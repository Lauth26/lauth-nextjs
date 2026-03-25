import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Corporate Culture Audit",
  "Lauth Investigations provides comprehensive corporate culture audits to assess organizational integrity, identify misconduct risks, and strengthen workplace compliance.",
  "/corporate-culture-audit"
);

const content = `
<h2>Uncover the Truth About Your Organization's Culture</h2>
<p>A company's culture can either be its greatest asset or its most dangerous liability. Lauth Investigations' Corporate Culture Audit provides a thorough, objective assessment of your organization's internal dynamics, employee behavior, and management practices.</p>

<h3>What Is a Corporate Culture Audit?</h3>
<p>A corporate culture audit is a comprehensive investigation into the behavioral patterns, communication norms, and ethical climate within an organization. Our licensed investigators go beyond surface-level surveys to uncover hidden issues that could expose your company to legal liability, financial loss, or reputational damage.</p>

<h3>Why Your Organization Needs a Culture Audit</h3>
<p>Many organizations don't realize they have a culture problem until it's too late — until a lawsuit is filed, a key employee leaves, or a scandal breaks. Our proactive audits help identify risks before they become crises, including:</p>
<ul>
  <li>Unreported harassment or discrimination</li>
  <li>Management misconduct or abuse of authority</li>
  <li>Policy violations and compliance gaps</li>
  <li>Toxic workplace dynamics that drive turnover</li>
  <li>Ethical blind spots in leadership</li>
</ul>

<h3>Our Process</h3>
<p>Every culture audit begins with a confidential consultation to understand your concerns and objectives. Our investigators then deploy a combination of interviews, observation, document review, and data analysis to build a complete picture of your organization's culture.</p>
<p>At the conclusion of the audit, you'll receive a detailed report with findings, risk assessments, and actionable recommendations — all documented to standards that can support legal proceedings if necessary.</p>
`;

const features = [
  { title: "Confidential Employee Interviews", description: "Discreet, one-on-one interviews with employees at all levels to surface hidden issues." },
  { title: "Policy & Compliance Review", description: "Assessment of existing HR policies, codes of conduct, and compliance frameworks." },
  { title: "Management Behavior Analysis", description: "Evaluation of leadership practices and their impact on organizational culture." },
  { title: "Risk Identification Report", description: "Detailed findings with prioritized risk assessments and remediation recommendations." },
  { title: "Ongoing Monitoring", description: "Optional follow-up assessments to track progress and ensure sustained improvement." },
  { title: "Legal-Ready Documentation", description: "All findings documented to standards suitable for legal proceedings." },
];

const relatedServices = [
  { title: "Due Diligence", href: "/due-diligence" },
  { title: "Embezzlement", href: "/embezzlement" },
  { title: "FMLA Abuse", href: "/fmla-abuse" },
  { title: "Corporate Services", href: "/corporate" },
];

export default function CorporateCultureAuditPage() {
  return (
    <ServicePageLayout
      title="Corporate Culture Audit"
      subtitle="Corporate Services"
      description="Comprehensive assessment of your organization's internal culture, integrity, and compliance — uncovering risks before they become crises."
      content={content}
      image="https://lauthinvestigations.com/wp-content/uploads/2023/10/corporate-culture-audit.jpg"
      features={features}
      relatedServices={relatedServices}
    />
  );
}
