import type { Metadata } from 'next';
import { EnterpriseForm } from '@/components/EnterpriseForm';
import React from 'react';

export const metadata: Metadata = {
  title: 'Facility Assessment & Exclusion Services | Critter Getter',
  description:
    'Enterprise wildlife exclusion and prevention coordination. We assess facilities and coordinate with licensed specialists for commercial, industrial, and food service properties.',
};

export default function EnterprisePage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Enterprise Facility Assessment</h1>
        <p>
          We coordinate comprehensive wildlife exclusion and prevention projects with licensed specialists.
          Our team assesses your facility and scopes work with qualified partners.
        </p>
      </div>

      <section className="content-section">
        <div className="form-container">
          <EnterpriseForm />
        </div>

        <aside className="info-panel">
          <h2>Our Assessment Process</h2>
          <ol>
            <li>
              <strong>Facility Review:</strong> You provide details about your property and concerns.
            </li>
            <li>
              <strong>Partner Coordination:</strong> We match you with licensed specialists suited to your needs.
            </li>
            <li>
              <strong>On-Site Assessment:</strong> Specialists conduct thorough evaluation.
            </li>
            <li>
              <strong>Project Scope & Estimate:</strong> Licensed partner provides detailed proposal.
            </li>
            <li>
              <strong>Execution:</strong> Licensed partner executes work and provides verification.
            </li>
          </ol>

          <h2>Facility Types Served</h2>
          <ul>
            <li>Commercial office and retail buildings</li>
            <li>Industrial warehouses and manufacturing</li>
            <li>Food service and restaurants</li>
            <li>Healthcare facilities</li>
            <li>Other specialized properties</li>
          </ul>

          <h2>Service Areas</h2>
          <ul>
            <li>Structural vulnerability assessment</li>
            <li>Rodent prevention and exclusion</li>
            <li>Bird control and deterrents</li>
            <li>Perimeter hardening</li>
            <li>Sanitation and risk assessment</li>
            <li>Regulatory compliance support</li>
          </ul>

          <div className="compliance-note">
            <p>
              <strong>Important:</strong> We do not perform services directly. All work is executed by
              independent, licensed wildlife control specialists. Our role is assessment coordination and
              specialist referral.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
