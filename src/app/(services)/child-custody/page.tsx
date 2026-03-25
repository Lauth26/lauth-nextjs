import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Child Custody Investigation",
  "Lauth Investigations provides professional child custody investigation services to gather evidence for custody and welfare cases, ensuring your child's safety and well-being.",
  "/child-custody"
);

const content = `
<h2>Protecting What Matters Most</h2>
<p>When the safety and well-being of your child is at stake, you need facts — not speculation. Lauth Investigations provides thorough, compassionate child custody investigation services that deliver the evidence you and your attorney need to protect your child's best interests.</p>

<h3>When You Need a Child Custody Investigation</h3>
<p>Parents and attorneys often turn to us when they have concerns about:</p>
<ul>
  <li>A child's safety in the other parent's care</li>
  <li>Substance abuse or addiction by a custodial parent</li>
  <li>Neglect or unsafe living conditions</li>
  <li>Exposure to inappropriate individuals or situations</li>
  <li>Violation of existing custody orders</li>
  <li>Hidden assets or income affecting support obligations</li>
</ul>

<h3>Our Approach</h3>
<p>Child custody investigations are among the most sensitive cases we handle. Our investigators approach every case with professionalism, discretion, and genuine concern for the child's welfare. Our investigation may include:</p>
<ul>
  <li>Surveillance of the other parent's activities and living conditions</li>
  <li>Background checks on new partners or household members</li>
  <li>Documentation of parenting behaviors and routines</li>
  <li>Social media analysis for evidence of concerning behavior</li>
  <li>Interviews with teachers, neighbors, and other relevant parties</li>
  <li>Verification of claims made in custody proceedings</li>
</ul>

<h3>Evidence for Your Case</h3>
<p>Our findings are documented in detailed reports suitable for family court proceedings. We provide photographs, video evidence, and written documentation that your attorney can use to build the strongest possible case for your child's welfare.</p>
`;

const features = [
  { title: "Custody Compliance Monitoring", description: "Surveillance to verify compliance with existing custody orders and agreements." },
  { title: "Living Conditions Assessment", description: "Discreet documentation of the child's living environment and conditions." },
  { title: "Background Investigations", description: "Thorough background checks on new partners and household members." },
  { title: "Behavioral Documentation", description: "Objective recording of parenting behaviors, routines, and activities." },
  { title: "Social Media Analysis", description: "Investigation of online activity for evidence relevant to custody decisions." },
  { title: "Court-Ready Reports", description: "Detailed documentation prepared to family court standards." },
];

const relatedServices = [
  { title: "Infidelity", href: "/infidelity" },
  { title: "Background Checks", href: "/background-checks" },
  { title: "Missing Persons", href: "/missing-persons" },
  { title: "Personal Services", href: "/personal" },
];

export default function ChildCustodyPage() {
  return (
    <ServicePageLayout
      title="Child Custody Investigation"
      subtitle="Personal Services"
      description="Evidence gathering for child custody and welfare cases — protecting your child's best interests with facts, not speculation."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/child-custody.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
