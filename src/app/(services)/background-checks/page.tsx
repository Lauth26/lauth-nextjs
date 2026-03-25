import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Background Check Services",
  "Lauth Investigations provides comprehensive background investigation services for businesses and individuals. Go beyond basic checks with licensed investigators.",
  "/background-checks"
);

const content = `
<h2>Know Who You're Dealing With</h2>
<p>Whether you're hiring a new employee, entering a business partnership, or simply need to verify someone's claims, a comprehensive background check provides the peace of mind that comes from knowing the truth. Lauth Investigations goes beyond basic database searches to deliver thorough, verified background investigations.</p>

<h3>Our Background Checks Include</h3>
<ul>
  <li>Criminal history searches (local, state, and federal)</li>
  <li>Employment verification and work history</li>
  <li>Education and credential verification</li>
  <li>Civil litigation and judgment history</li>
  <li>Credit and financial background (where legally permitted)</li>
  <li>Professional license verification</li>
  <li>Social media and online presence review</li>
  <li>Reference interviews and character verification</li>
</ul>

<h3>Beyond Database Searches</h3>
<p>Online background check services only scratch the surface. Lauth Investigations deploys licensed investigators who verify information firsthand, conduct interviews, and dig deeper when something doesn't add up. Our background checks provide context and analysis — not just raw data.</p>

<h3>Who We Serve</h3>
<p>Our background investigation services are used by:</p>
<ul>
  <li>Employers making critical hiring decisions</li>
  <li>Individuals entering new personal relationships</li>
  <li>Attorneys conducting due diligence for litigation</li>
  <li>Landlords screening potential tenants</li>
  <li>Families vetting caregivers and household staff</li>
  <li>Businesses evaluating potential partners or vendors</li>
</ul>
`;

const features = [
  { title: "Criminal History Search", description: "Comprehensive criminal records search across local, state, and federal databases." },
  { title: "Employment Verification", description: "Direct verification of work history, titles, and employment dates." },
  { title: "Education Verification", description: "Confirmation of degrees, certifications, and academic credentials." },
  { title: "Financial Background", description: "Credit history and financial standing review where legally permitted." },
  { title: "Social Media Review", description: "Analysis of online presence and social media activity for red flags." },
  { title: "Investigator-Verified Results", description: "Human investigators verify findings — not just automated database pulls." },
];

const relatedServices = [
  { title: "Due Diligence", href: "/due-diligence" },
  { title: "Child Custody", href: "/child-custody" },
  { title: "Catfishing", href: "/catfishing" },
  { title: "Personal Services", href: "/personal" },
];

export default function BackgroundChecksPage() {
  return (
    <ServicePageLayout
      title="Background Check Services"
      subtitle="Personal Services"
      description="Comprehensive background investigations that go beyond database searches — delivering verified facts for informed decisions."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/background-checks.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
