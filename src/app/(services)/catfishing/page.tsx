import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Catfishing Investigation",
  "Lauth Investigations helps verify online identities and investigate digital deception. Protect yourself from catfishing scams with professional investigation services.",
  "/catfishing"
);

const content = `
<h2>Verify Who You're Really Talking To</h2>
<p>In the digital age, it's easier than ever for people to create fake identities and deceive others online. Catfishing — using a fabricated online persona to manipulate or defraud someone — has become increasingly common on dating apps, social media, and professional networks. Lauth Investigations helps you uncover the truth about the people you meet online.</p>

<h3>Warning Signs of Catfishing</h3>
<ul>
  <li>Refuses to video chat or meet in person</li>
  <li>Profile photos look too perfect or inconsistent</li>
  <li>Stories don't add up or change frequently</li>
  <li>Requests for money, gifts, or financial information</li>
  <li>Claims to be overseas, military, or unable to travel</li>
  <li>Relationship moves unusually fast</li>
  <li>Limited or suspicious social media presence</li>
</ul>

<h3>How We Investigate</h3>
<p>Our investigators use a combination of digital forensics and traditional techniques to verify or disprove someone's online identity:</p>
<ul>
  <li>Reverse image searches and photo verification</li>
  <li>Social media account analysis and cross-referencing</li>
  <li>Background checks and identity verification</li>
  <li>IP address and digital footprint analysis</li>
  <li>Phone number and email investigation</li>
  <li>Public records and database searches</li>
</ul>

<h3>Protect Yourself and Your Finances</h3>
<p>Romance scams cost Americans over $1 billion annually. If you suspect you're being catfished, acting quickly can protect you from emotional manipulation and financial loss. Our discreet investigation gives you the facts you need to protect yourself.</p>
`;

const features = [
  { title: "Identity Verification", description: "Comprehensive verification of online personas against real-world records." },
  { title: "Reverse Image Analysis", description: "Advanced photo searching to trace stolen or fabricated profile images." },
  { title: "Social Media Forensics", description: "Deep analysis of social media accounts for authenticity indicators." },
  { title: "Background Investigation", description: "Full background checks on the person behind the online profile." },
  { title: "Digital Footprint Mapping", description: "Tracing email addresses, phone numbers, and IP addresses to real identities." },
  { title: "Scam Pattern Recognition", description: "Identification of known catfishing and romance scam techniques." },
];

const relatedServices = [
  { title: "Background Checks", href: "/background-checks" },
  { title: "Infidelity", href: "/infidelity" },
  { title: "Missing Persons", href: "/missing-persons" },
  { title: "Personal Services", href: "/personal" },
];

export default function CatfishingPage() {
  return (
    <ServicePageLayout
      title="Catfishing Investigation"
      subtitle="Personal Services"
      description="Verification of online identities and digital deception — uncovering the truth behind online personas."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/catfishing.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
