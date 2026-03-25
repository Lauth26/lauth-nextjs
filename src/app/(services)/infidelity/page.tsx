import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Infidelity Investigation",
  "Lauth Investigations provides discreet infidelity investigation services. Our licensed investigators help you find the truth with compassion and professionalism.",
  "/infidelity"
);

const content = `
<h2>The Truth You Deserve</h2>
<p>Suspecting a partner of infidelity is one of the most painful experiences anyone can face. Uncertainty can be worse than knowing the truth. Lauth Investigations provides discreet, professional infidelity investigation services that give you the answers you need to move forward with clarity and confidence.</p>

<h3>Signs That May Warrant an Investigation</h3>
<ul>
  <li>Unexplained absences or changes in schedule</li>
  <li>Increased secrecy with phone, email, or social media</li>
  <li>Unexplained expenses or financial changes</li>
  <li>Emotional distance or behavioral changes</li>
  <li>New attention to appearance or fitness</li>
  <li>Gut feeling that something isn't right</li>
</ul>

<h3>How We Can Help</h3>
<p>Our licensed investigators conduct discreet surveillance and investigation to determine the truth about your partner's activities. Our services include:</p>
<ul>
  <li>Covert surveillance and activity documentation</li>
  <li>GPS tracking (where legally permitted)</li>
  <li>Social media and online activity investigation</li>
  <li>Background checks on suspected third parties</li>
  <li>Phone and communication pattern analysis</li>
  <li>Photographic and video evidence collection</li>
</ul>

<h3>Compassion and Discretion</h3>
<p>We understand the emotional weight of these investigations. Our team approaches every case with sensitivity, maintaining complete confidentiality throughout the process. Whether the results confirm or dispel your concerns, you'll have the clarity you need to make informed decisions about your future.</p>
`;

const features = [
  { title: "Covert Surveillance", description: "Professional surveillance operations conducted with complete discretion." },
  { title: "Digital Investigation", description: "Analysis of social media profiles, online activity, and digital footprints." },
  { title: "Photo & Video Evidence", description: "Clear documentation of activities for your peace of mind or legal proceedings." },
  { title: "Background Checks", description: "Investigation of suspected third parties and their connections." },
  { title: "Complete Confidentiality", description: "Your privacy is protected at every stage of the investigation." },
  { title: "Compassionate Service", description: "Sensitive handling of emotionally difficult cases with respect and empathy." },
];

const relatedServices = [
  { title: "Child Custody", href: "/child-custody" },
  { title: "Background Checks", href: "/background-checks" },
  { title: "Catfishing", href: "/catfishing" },
  { title: "Personal Services", href: "/personal" },
];

export default function InfidelityPage() {
  return (
    <ServicePageLayout
      title="Infidelity Investigation"
      subtitle="Personal Services"
      description="Discreet investigation of suspected unfaithfulness — providing the clarity and answers you deserve."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/infidelity.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
