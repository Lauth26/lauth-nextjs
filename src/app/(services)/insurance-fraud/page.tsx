import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Insurance Fraud Investigation",
  "Lauth Investigations provides professional insurance fraud investigation services to detect and document fraudulent claims for insurance companies and businesses.",
  "/insurance-fraud"
);

const content = `
<h2>Detect and Document Fraudulent Claims</h2>
<p>Insurance fraud costs the industry billions annually and drives up premiums for everyone. Lauth Investigations helps insurance companies, self-insured employers, and businesses detect, investigate, and document fraudulent claims with evidence that holds up in court.</p>

<h3>Types of Insurance Fraud We Investigate</h3>
<ul>
  <li>Staged accidents and exaggerated injuries</li>
  <li>Fraudulent disability claims</li>
  <li>Arson and property damage fraud</li>
  <li>Medical provider fraud and billing irregularities</li>
  <li>Identity theft-related claims</li>
  <li>Claimant activity inconsistent with reported injuries</li>
</ul>

<h3>Our Investigation Methodology</h3>
<p>Our licensed investigators use a combination of field work, technology, and analytical techniques to verify or disprove claims:</p>
<ul>
  <li>Covert surveillance of claimants</li>
  <li>Social media and open-source intelligence analysis</li>
  <li>Witness interviews and statement verification</li>
  <li>Medical record review and analysis</li>
  <li>Activity checks and scene investigations</li>
  <li>Sub rosa video documentation</li>
</ul>

<h3>Court-Ready Evidence</h3>
<p>Every investigation produces detailed, court-admissible reports with timestamped documentation, video evidence, and supporting materials. Our investigators are experienced witnesses who can provide clear, credible testimony in depositions and trials.</p>
`;

const features = [
  { title: "Covert Surveillance", description: "Professional surveillance operations to document claimant activities." },
  { title: "Social Media Investigation", description: "Comprehensive analysis of claimants' digital presence and online activity." },
  { title: "Medical Record Analysis", description: "Review of medical documentation for inconsistencies and red flags." },
  { title: "Witness Interviews", description: "Thorough interviews with witnesses, neighbors, and associates." },
  { title: "Sub Rosa Video", description: "High-quality video documentation of claimant activities." },
  { title: "Expert Testimony", description: "Experienced investigators available for depositions and trial testimony." },
];

const relatedServices = [
  { title: "Workers Compensation Fraud", href: "/workers-compensation-fraud" },
  { title: "Embezzlement", href: "/embezzlement" },
  { title: "FMLA Abuse", href: "/fmla-abuse" },
  { title: "Corporate Services", href: "/corporate" },
];

export default function InsuranceFraudPage() {
  return (
    <ServicePageLayout
      title="Insurance Fraud Investigation"
      subtitle="Corporate Services"
      description="Detection and investigation of fraudulent insurance claims — protecting your bottom line with court-ready evidence."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/insurance-fraud.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
