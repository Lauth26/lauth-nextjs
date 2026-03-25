import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Workers Compensation Fraud Investigation",
  "Lauth Investigations provides professional workers compensation fraud investigation services to detect fraudulent claims and protect your business.",
  "/workers-compensation-fraud"
);

const content = `
<h2>Stop Fraudulent Workers Compensation Claims</h2>
<p>Workers compensation fraud costs employers and insurers billions of dollars annually. Whether it's a completely fabricated injury, an exaggerated claim, or a pre-existing condition attributed to a workplace incident, Lauth Investigations has the expertise to uncover the truth.</p>

<h3>Common Types of Workers Comp Fraud</h3>
<ul>
  <li>Fabricated injuries that never occurred</li>
  <li>Exaggerated injuries to increase benefits</li>
  <li>Pre-existing conditions claimed as workplace injuries</li>
  <li>Claimants working other jobs while collecting benefits</li>
  <li>Malingering — prolonging a claim beyond actual recovery</li>
  <li>Injuries that occurred outside the workplace</li>
</ul>

<h3>Our Investigation Process</h3>
<p>Our experienced investigators use proven techniques to document the reality of a claimant's condition and activities:</p>
<ul>
  <li>Extended covert surveillance with video documentation</li>
  <li>Social media and internet activity analysis</li>
  <li>Neighborhood canvasses and witness interviews</li>
  <li>Activity checks at known locations and events</li>
  <li>Background investigation for prior claims history</li>
  <li>Medical records comparison and timeline analysis</li>
</ul>

<h3>Results That Matter</h3>
<p>Our detailed investigation reports have helped clients save millions in fraudulent claims. We provide video evidence, photographs, written reports, and investigator testimony that insurance companies and courts rely on to make informed decisions.</p>
`;

const features = [
  { title: "Video Surveillance", description: "Extended covert video surveillance documenting claimant activities." },
  { title: "Claims History Research", description: "Investigation of prior workers comp and insurance claims." },
  { title: "Social Media Analysis", description: "Deep dive into claimants' online presence for contradictory evidence." },
  { title: "Neighborhood Canvass", description: "Interviews with neighbors and community members about claimant activities." },
  { title: "Medical Timeline Analysis", description: "Comparison of medical records with observed activities and claimed limitations." },
  { title: "Court-Ready Documentation", description: "Professional reports and testimony for legal proceedings." },
];

const relatedServices = [
  { title: "Insurance Fraud", href: "/insurance-fraud" },
  { title: "FMLA Abuse", href: "/fmla-abuse" },
  { title: "Embezzlement", href: "/embezzlement" },
  { title: "Corporate Services", href: "/corporate" },
];

export default function WorkersCompensationFraudPage() {
  return (
    <ServicePageLayout
      title="Workers Compensation Fraud Investigation"
      subtitle="Corporate Services"
      description="Detecting fraudulent workers compensation claims with professional surveillance and court-ready evidence."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/workers-comp-fraud.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
