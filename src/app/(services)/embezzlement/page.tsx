import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Embezzlement Investigation",
  "Lauth Investigations provides professional embezzlement investigation services to detect, document, and resolve financial misconduct within organizations.",
  "/embezzlement"
);

const content = `
<h2>Detect and Document Financial Misconduct</h2>
<p>Embezzlement costs businesses billions of dollars annually, and the perpetrators are often trusted employees or executives. Lauth Investigations provides discreet, thorough embezzlement investigations that uncover the truth, document the evidence, and help you recover.</p>

<h3>Signs You May Need an Embezzlement Investigation</h3>
<p>Embezzlement often goes undetected for months or years. Warning signs include:</p>
<ul>
  <li>Unexplained discrepancies in financial records</li>
  <li>Missing funds or inventory</li>
  <li>Employees living beyond their means</li>
  <li>Resistance to audits or financial oversight</li>
  <li>Unusual vendor relationships or payments</li>
  <li>Altered or missing financial documents</li>
</ul>

<h3>Our Investigation Approach</h3>
<p>Our licensed investigators combine financial forensics with traditional investigation techniques to trace missing funds, identify perpetrators, and build cases that stand up in court. Our embezzlement investigations include:</p>
<ul>
  <li>Financial record analysis and forensic accounting support</li>
  <li>Employee interviews and surveillance</li>
  <li>Digital evidence collection and preservation</li>
  <li>Vendor and transaction verification</li>
  <li>Timeline reconstruction of financial irregularities</li>
</ul>

<h3>Protecting Your Business</h3>
<p>Beyond uncovering existing embezzlement, we help organizations strengthen their internal controls to prevent future incidents. Our reports include recommendations for policy improvements, oversight enhancements, and best practices for financial security.</p>
`;

const features = [
  { title: "Financial Forensics", description: "Detailed analysis of financial records to trace missing funds and identify irregularities." },
  { title: "Evidence Preservation", description: "Court-admissible documentation of all findings and evidence." },
  { title: "Employee Surveillance", description: "Discreet monitoring when warranted by investigation findings." },
  { title: "Digital Evidence Collection", description: "Recovery and analysis of electronic records and communications." },
  { title: "Prevention Recommendations", description: "Actionable guidance to strengthen internal controls and prevent recurrence." },
  { title: "Expert Testimony", description: "Our investigators can provide expert testimony in legal proceedings." },
];

const relatedServices = [
  { title: "Insurance Fraud", href: "/insurance-fraud" },
  { title: "Workers Compensation Fraud", href: "/workers-compensation-fraud" },
  { title: "Due Diligence", href: "/due-diligence" },
  { title: "Corporate Services", href: "/corporate" },
];

export default function EmbezzlementPage() {
  return (
    <ServicePageLayout
      title="Embezzlement Investigation"
      subtitle="Corporate Services"
      description="Investigation and documentation of financial misconduct — from detection through resolution, with evidence that holds up in court."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/embezzlement.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
