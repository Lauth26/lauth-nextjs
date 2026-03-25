import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "FMLA Abuse Investigation",
  "Lauth Investigations helps employers investigate suspected FMLA abuse with discreet, professional investigation services that protect your rights while respecting employee privacy.",
  "/fmla-abuse"
);

const content = `
<h2>Protect Your Business from FMLA Misuse</h2>
<p>The Family and Medical Leave Act (FMLA) provides important protections for employees with legitimate medical needs. However, some employees exploit these protections, using FMLA leave for purposes unrelated to their qualifying condition. Lauth Investigations helps employers investigate suspected FMLA abuse while navigating the complex legal requirements.</p>

<h3>Signs of Potential FMLA Abuse</h3>
<ul>
  <li>Intermittent leave patterns that coincide with weekends, holidays, or personal events</li>
  <li>Social media posts showing activities inconsistent with the claimed condition</li>
  <li>Co-worker reports of the employee engaging in physical activities while on leave</li>
  <li>Pattern of leave requests during peak work periods</li>
  <li>Evidence of secondary employment during leave periods</li>
</ul>

<h3>Our Careful Approach</h3>
<p>FMLA investigations require exceptional sensitivity to legal boundaries. Our investigators are trained in FMLA regulations and conduct investigations that:</p>
<ul>
  <li>Respect employee privacy rights under FMLA and ADA</li>
  <li>Document observable activities without medical inquiries</li>
  <li>Provide fact-based findings, not medical opinions</li>
  <li>Build evidence that supports lawful employment decisions</li>
</ul>

<h3>What You Can Expect</h3>
<p>Our investigators conduct discreet surveillance and activity checks during reported leave periods. We document what we observe — activities, locations, physical capabilities — without making medical judgments. The resulting report gives your HR and legal teams the objective evidence they need to make informed decisions.</p>
`;

const features = [
  { title: "Discreet Surveillance", description: "Professional surveillance during reported FMLA leave periods." },
  { title: "Activity Documentation", description: "Objective documentation of observable activities and physical capabilities." },
  { title: "Social Media Monitoring", description: "Analysis of online activity for evidence inconsistent with claimed conditions." },
  { title: "Secondary Employment Checks", description: "Investigation of potential moonlighting during FMLA leave." },
  { title: "Legal Compliance", description: "All investigations conducted within FMLA and ADA legal frameworks." },
  { title: "HR-Ready Reports", description: "Clear, factual reports designed to support lawful employment decisions." },
];

const relatedServices = [
  { title: "Workers Compensation Fraud", href: "/workers-compensation-fraud" },
  { title: "Corporate Culture Audit", href: "/corporate-culture-audit" },
  { title: "Insurance Fraud", href: "/insurance-fraud" },
  { title: "Corporate Services", href: "/corporate" },
];

export default function FMLAAbusePage() {
  return (
    <ServicePageLayout
      title="FMLA Abuse Investigation"
      subtitle="Corporate Services"
      description="Investigating suspected misuse of Family and Medical Leave Act benefits — protecting your business while respecting legal boundaries."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/fmla-abuse.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
