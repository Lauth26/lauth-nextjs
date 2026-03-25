import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Bug Sweeps & TSCM Services",
  "Lauth Investigations provides professional bug sweeps and Technical Surveillance Countermeasures (TSCM) to detect hidden listening devices, cameras, and GPS trackers.",
  "/bug-sweeps"
);

const content = `
<h2>Detect Hidden Surveillance Devices</h2>
<p>In an era of increasingly accessible surveillance technology, hidden cameras, listening devices, and GPS trackers are more common than ever. Whether you suspect corporate espionage, a domestic situation, or simply want peace of mind, Lauth Investigations' Technical Surveillance Countermeasures (TSCM) services can detect and neutralize hidden surveillance threats.</p>

<h3>What We Detect</h3>
<ul>
  <li>Hidden cameras and video recording devices</li>
  <li>Audio listening devices and room bugs</li>
  <li>GPS tracking devices on vehicles</li>
  <li>Wireless transmitters and Wi-Fi-enabled devices</li>
  <li>Telephone and landline taps</li>
  <li>Computer and network surveillance tools</li>
</ul>

<h3>Our TSCM Process</h3>
<p>Our certified TSCM technicians use professional-grade detection equipment to conduct thorough sweeps of your environment:</p>
<ul>
  <li>Radio frequency (RF) spectrum analysis</li>
  <li>Non-linear junction detection for electronic components</li>
  <li>Thermal imaging for hidden devices</li>
  <li>Physical inspection of likely hiding spots</li>
  <li>Telephone line and network analysis</li>
  <li>Vehicle sweep for GPS trackers</li>
</ul>

<h3>Who Needs Bug Sweeps</h3>
<p>Our TSCM services are utilized by corporate executives, attorneys, individuals in contentious situations, celebrities, and anyone who has reason to believe their privacy may be compromised. We serve both residential and commercial environments across the country.</p>
`;

const features = [
  { title: "RF Spectrum Analysis", description: "Advanced radio frequency scanning to detect wireless transmitting devices." },
  { title: "Physical Inspection", description: "Thorough manual inspection of premises for hidden cameras and recording devices." },
  { title: "Vehicle Sweeps", description: "Detection and removal of GPS tracking devices from personal and corporate vehicles." },
  { title: "Telephone Line Analysis", description: "Testing of phone lines and network connections for wiretaps and monitoring." },
  { title: "Corporate TSCM", description: "Comprehensive sweeps of boardrooms, offices, and sensitive corporate spaces." },
  { title: "Ongoing Protection Plans", description: "Scheduled recurring sweeps for clients requiring continuous surveillance protection." },
];

const relatedServices = [
  { title: "Intellectual Property Theft", href: "/intellectual-property-theft" },
  { title: "Infidelity", href: "/infidelity" },
  { title: "Corporate Culture Audit", href: "/corporate-culture-audit" },
  { title: "Personal Services", href: "/personal" },
];

export default function BugSweepsPage() {
  return (
    <ServicePageLayout
      title="Bug Sweeps & TSCM"
      subtitle="Personal Services"
      description="Technical surveillance countermeasures to detect hidden listening devices, cameras, and GPS trackers — protecting your privacy."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/bug-sweeps.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
