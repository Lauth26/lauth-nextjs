import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Intellectual Property Theft Investigation",
  "Lauth Investigations protects your proprietary information and trade secrets with professional IP theft investigation services.",
  "/intellectual-property-theft"
);

const content = `
<h2>Protect Your Most Valuable Assets</h2>
<p>Your intellectual property — trade secrets, proprietary processes, client lists, and confidential data — represents years of innovation and investment. When it's stolen or compromised, the consequences can be devastating. Lauth Investigations provides specialized investigation services to detect, document, and help resolve IP theft.</p>

<h3>Types of IP Theft We Investigate</h3>
<ul>
  <li>Trade secret misappropriation by current or former employees</li>
  <li>Unauthorized sharing of proprietary processes or formulas</li>
  <li>Client list and database theft</li>
  <li>Product counterfeiting and design theft</li>
  <li>Non-compete and NDA violations</li>
  <li>Corporate espionage and competitor intelligence theft</li>
</ul>

<h3>Our Investigation Process</h3>
<p>IP theft investigations require a combination of technical expertise and traditional investigative skills. Our approach includes:</p>
<ul>
  <li>Digital forensics to trace data access and transfer</li>
  <li>Employee activity monitoring and surveillance</li>
  <li>Interview and interrogation of suspected parties</li>
  <li>Analysis of competitor products and practices for stolen IP</li>
  <li>Documentation of chain of custody for all evidence</li>
</ul>

<h3>Building Your Case</h3>
<p>Whether you're pursuing civil litigation or criminal charges, our investigators build cases that stand up in court. Every piece of evidence is properly collected, preserved, and documented. We work closely with your legal team to ensure our findings support your legal strategy.</p>
`;

const features = [
  { title: "Digital Forensics", description: "Trace unauthorized data access, transfers, and copying across digital systems." },
  { title: "Surveillance Operations", description: "Discreet monitoring of suspected IP theft activities." },
  { title: "Non-Compete Enforcement", description: "Investigation of non-compete and NDA violations by former employees." },
  { title: "Competitor Analysis", description: "Assessment of competitor products and practices for evidence of stolen IP." },
  { title: "Chain of Custody Documentation", description: "Meticulous evidence handling that meets legal standards." },
  { title: "Legal Team Coordination", description: "Close collaboration with your attorneys to support litigation strategy." },
];

const relatedServices = [
  { title: "Corporate Culture Audit", href: "/corporate-culture-audit" },
  { title: "Due Diligence", href: "/due-diligence" },
  { title: "Background Checks", href: "/background-checks" },
  { title: "Corporate Services", href: "/corporate" },
];

export default function IntellectualPropertyTheftPage() {
  return (
    <ServicePageLayout
      title="Intellectual Property Theft Investigation"
      subtitle="Corporate Services"
      description="Protecting your proprietary information, trade secrets, and competitive advantages from theft and misappropriation."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/intellectual-property-theft.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
