import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Due Diligence Investigations",
  "Lauth Investigations provides thorough due diligence investigation services for businesses making critical decisions about partnerships, acquisitions, and investments.",
  "/due-diligence"
);

const content = `
<h2>Make Informed Decisions with Comprehensive Due Diligence</h2>
<p>Before entering into any major business relationship — whether it's a merger, acquisition, partnership, or investment — you need to know exactly who you're dealing with. Lauth Investigations' due diligence services provide the intelligence you need to make informed decisions and protect your interests.</p>

<h3>What Our Due Diligence Investigations Cover</h3>
<p>Our licensed investigators conduct thorough background research on individuals, companies, and organizations to verify claims, uncover hidden risks, and provide you with a complete picture. Our due diligence investigations typically include:</p>
<ul>
  <li>Corporate history and financial health verification</li>
  <li>Key personnel background checks</li>
  <li>Litigation history and regulatory actions</li>
  <li>Reputation and media analysis</li>
  <li>Asset verification and financial standing</li>
  <li>Business relationships and conflict of interest analysis</li>
</ul>

<h3>When You Need Due Diligence</h3>
<p>Our clients typically engage us for due diligence before:</p>
<ul>
  <li>Mergers and acquisitions</li>
  <li>New business partnerships or joint ventures</li>
  <li>Large vendor or supplier contracts</li>
  <li>Executive hiring decisions</li>
  <li>Real estate or investment transactions</li>
</ul>

<h3>Why Choose Lauth for Due Diligence</h3>
<p>With over 35 years of investigation experience, our team knows where to look and what to look for. We go beyond publicly available information to uncover the facts that matter most to your decision. Every finding is verified, documented, and presented in a clear, actionable report.</p>
`;

const features = [
  { title: "Corporate Background Research", description: "Comprehensive analysis of company history, ownership, and financial health." },
  { title: "Executive & Key Personnel Vetting", description: "Deep background investigations on individuals who will have significant roles." },
  { title: "Litigation & Regulatory History", description: "Complete review of legal proceedings, regulatory actions, and compliance issues." },
  { title: "Financial Verification", description: "Independent verification of financial claims, assets, and liabilities." },
  { title: "Reputation Analysis", description: "Media monitoring and industry reputation assessment." },
  { title: "Conflict of Interest Screening", description: "Identification of hidden relationships and potential conflicts." },
];

const relatedServices = [
  { title: "Corporate Culture Audit", href: "/corporate-culture-audit" },
  { title: "Background Checks", href: "/background-checks" },
  { title: "Embezzlement", href: "/embezzlement" },
  { title: "Corporate Services", href: "/corporate" },
];

export default function DueDiligencePage() {
  return (
    <ServicePageLayout
      title="Due Diligence Investigations"
      subtitle="Corporate Services"
      description="Thorough investigation of business entities, individuals, and opportunities — giving you the facts before major decisions."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/due-diligence.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
