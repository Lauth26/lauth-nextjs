import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Missing Persons Investigation",
  "Lauth Investigations provides professional missing persons investigation services. Our licensed investigators use advanced techniques to locate missing individuals nationwide.",
  "/missing-persons"
);

const content = `
<h2>Finding People When It Matters Most</h2>
<p>When someone you care about goes missing, every moment counts. Lauth Investigations has over 35 years of experience locating missing persons across all 50 states. Whether you're searching for a missing family member, a runaway teen, or a long-lost relative, our team has the expertise and resources to help.</p>

<h3>Who We Help Find</h3>
<ul>
  <li>Missing family members and loved ones</li>
  <li>Runaway teens and at-risk youth</li>
  <li>Biological parents and adopted children</li>
  <li>Long-lost relatives and heirs</li>
  <li>Witnesses needed for legal proceedings</li>
  <li>Debtors and persons evading legal obligations</li>
</ul>

<h3>Our Search Methods</h3>
<p>Our investigators combine traditional investigative techniques with modern technology to locate missing individuals:</p>
<ul>
  <li>Database searches across public and proprietary records</li>
  <li>Social media and digital footprint analysis</li>
  <li>Field investigation and canvassing</li>
  <li>Interviews with associates, friends, and family</li>
  <li>Coordination with law enforcement when appropriate</li>
  <li>Nationwide network of field investigators</li>
</ul>

<h3>Compassionate, Professional Service</h3>
<p>Missing persons cases often involve deep emotional stakes. Our investigators approach every case with compassion and sensitivity, keeping you informed throughout the process. We understand that finding your missing person isn't just a case — it's about reuniting families and restoring peace of mind.</p>
`;

const features = [
  { title: "Nationwide Search Capability", description: "Network of investigators across all 50 states for comprehensive coverage." },
  { title: "Database & Records Research", description: "Access to extensive public and proprietary databases for locate services." },
  { title: "Digital Footprint Analysis", description: "Social media, online activity, and digital presence investigation." },
  { title: "Field Investigation", description: "On-the-ground canvassing, interviews, and surveillance operations." },
  { title: "Law Enforcement Coordination", description: "Professional collaboration with police and federal agencies when appropriate." },
  { title: "Family Reunification Support", description: "Compassionate guidance through the process of reconnecting with loved ones." },
];

const relatedServices = [
  { title: "Background Checks", href: "/background-checks" },
  { title: "Child Custody", href: "/child-custody" },
  { title: "Catfishing", href: "/catfishing" },
  { title: "Personal Services", href: "/personal" },
];

export default function MissingPersonsPage() {
  return (
    <ServicePageLayout
      title="Missing Persons Investigation"
      subtitle="Personal Services"
      description="Professional search and locate services for missing individuals — combining advanced techniques with compassionate, dedicated service."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/missing-persons.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
