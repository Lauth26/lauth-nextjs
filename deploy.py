#!/usr/bin/env python3
"""Deploy lauth-nextjs to Vercel via REST API (file upload method)."""

import hashlib
import json
import os
import sys
import time
import requests

VERCEL_TOKEN = os.environ.get("VERCEL_TOKEN", "")
PROJECT_NAME = "lauth-nextjs"
PROJECT_DIR = "/home/aiciv/lauth-nextjs"
API_BASE = "https://api.vercel.com"

HEADERS = {
    "Authorization": f"Bearer {VERCEL_TOKEN}",
}

# Files/dirs to exclude from upload
EXCLUDE = {
    "node_modules", ".git", ".next", ".vercel", "deploy.py",
    "__pycache__", ".DS_Store", ".env", ".env.local",
}


def collect_files(base_dir):
    """Collect all project files for deployment."""
    files = []
    for root, dirs, filenames in os.walk(base_dir):
        # Skip excluded directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE]

        for filename in filenames:
            if filename in EXCLUDE:
                continue
            filepath = os.path.join(root, filename)
            relpath = os.path.relpath(filepath, base_dir)

            with open(filepath, "rb") as f:
                content = f.read()

            sha = hashlib.sha1(content).hexdigest()
            files.append({
                "file": relpath,
                "sha": sha,
                "size": len(content),
                "data": content,
            })

    return files


def upload_file(file_data):
    """Upload a single file to Vercel."""
    resp = requests.post(
        f"{API_BASE}/v2/files",
        headers={
            **HEADERS,
            "Content-Type": "application/octet-stream",
            "x-vercel-digest": file_data["sha"],
        },
        data=file_data["data"],
    )
    return resp.status_code in (200, 409)  # 409 = already exists


def create_deployment(files):
    """Create a deployment with the uploaded files."""
    file_refs = [{"file": f["file"], "sha": f["sha"], "size": f["size"]} for f in files]

    payload = {
        "name": PROJECT_NAME,
        "files": file_refs,
        "projectSettings": {
            "framework": "nextjs",
            "buildCommand": "npm run build",
            "outputDirectory": ".next",
            "installCommand": "npm install",
        },
        "target": "production",
    }

    resp = requests.post(
        f"{API_BASE}/v13/deployments",
        headers={**HEADERS, "Content-Type": "application/json"},
        json=payload,
    )

    return resp.json()


def wait_for_deployment(deployment_id, timeout=600):
    """Wait for deployment to complete."""
    start = time.time()
    while time.time() - start < timeout:
        resp = requests.get(
            f"{API_BASE}/v13/deployments/{deployment_id}",
            headers=HEADERS,
        )
        data = resp.json()
        status = data.get("readyState", data.get("status", "unknown"))
        print(f"  Status: {status}")

        if status == "READY":
            return data
        elif status in ("ERROR", "CANCELED"):
            print(f"  Deployment failed: {data.get('errorMessage', 'unknown error')}")
            return data

        time.sleep(10)

    print("  Timeout waiting for deployment")
    return None


def main():
    print(f"Collecting files from {PROJECT_DIR}...")
    files = collect_files(PROJECT_DIR)
    print(f"  Found {len(files)} files")

    print("Uploading files to Vercel...")
    uploaded = 0
    for f in files:
        if upload_file(f):
            uploaded += 1
        else:
            print(f"  WARN: Failed to upload {f['file']}")
    print(f"  Uploaded {uploaded}/{len(files)} files")

    print("Creating deployment...")
    result = create_deployment(files)

    if "error" in result:
        print(f"  ERROR: {result['error']}")
        sys.exit(1)

    deployment_id = result.get("id", "unknown")
    url = result.get("url", "unknown")
    print(f"  Deployment ID: {deployment_id}")
    print(f"  URL: https://{url}")

    print("Waiting for build to complete...")
    final = wait_for_deployment(deployment_id)

    if final and final.get("readyState") == "READY":
        print(f"\nDeployment READY!")
        print(f"  URL: https://{final.get('url', url)}")
        aliases = final.get("alias", [])
        if aliases:
            print(f"  Aliases: {', '.join(f'https://{a}' for a in aliases)}")
    else:
        print("\nDeployment may still be building. Check Vercel dashboard.")
        print(f"  URL: https://{url}")


if __name__ == "__main__":
    main()
