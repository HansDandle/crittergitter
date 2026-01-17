import type { Metadata } from 'next';
import { EnterpriseForm } from '@/components/EnterpriseForm';
import React from 'react';

export const metadata: Metadata = {
  title: 'Commercial Wildlife Exclusion & Facility Prevention Assessment',
  description:
    'Enterprise wildlife prevention and facility assessment coordination. We connect commercial, industrial, food service, and municipal facilities with licensed vertebrate pest management specialists for USDA/FDA compliant exclusion solutions.',
};

export default function EnterprisePage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Commercial & Industrial Wildlife Exclusion Assessment</h1>
        <p>
          Facilities facing wildlife challenges need compliance-ready solutions. We coordinate comprehensive assessments with licensed vertebrate pest management specialists who understand USDA, FDA, and health code requirements. From warehouses and manufacturing to food service and municipal facilities, our network provides expert guidance on structural prevention, rodent exclusion, and bird control systems.
        </p>
      </div>

      <section className="content-section">
        <div className="form-container">
          <EnterpriseForm />
        </div>

        <aside className="info-panel">
          <h2>Professional Assessment Process</h2>
          <ol>
            <li>
              <strong>Facility Intake:</strong> You provide property details, facility type, and specific wildlife or sanitation concerns.
            </li>
            <li>
              <strong>Specialist Matching:</strong> We connect you with licensed vertebrate pest management professionals experienced with your facility type.
            </li>
            <li>
              <strong>Comprehensive Site Assessment:</strong> Specialist conducts detailed evaluation of structural vulnerabilities, entry points, and regulatory compliance needs.
            </li>
            <li>
              <strong>Scope & Estimate:</strong> Licensed partner provides detailed proposal including compliance implications and estimated costs.
            </li>
            <li>
              <strong>Execution & Verification:</strong> Licensed professional implements exclusion work, provides documentation, and supports compliance verification.
            </li>
          </ol>

          <h2>Facility Types & Services</h2>
          <ul>
            <li><strong>Warehouses & Manufacturing:</strong> Bird exclusion systems, rodent exclusion, perimeter hardening, dock door protection</li>
            <li><strong>Food Service & Restaurants:</strong> Rodent exclusion, entry point sealing, HACCP compliance support</li>
            <li><strong>Healthcare Facilities:</strong> Infection control assessment, exclusion planning, compliance documentation</li>
            <li><strong>Commercial & Retail:</strong> Structural vulnerability assessment, prevention planning, tenant communication</li>
            <li><strong>Municipal & Government:</strong> Infrastructure assessment, compliance-ready solutions, documentation</li>
          </ul>

          <h2>Compliance-Ready Solutions</h2>
          <ul>
            <li>USDA/FDA wildlife exclusion requirements</li>
            <li>Health code violation prevention</li>
            <li>HACCP pest management support</li>
            <li>Documentation and verification services</li>
            <li>Risk and sanitation assessment reporting</li>
          </ul>

          <div className="compliance-note">
            <p>
              <strong>Critical Disclosure:</strong> We are a coordination platform only. All wildlife exclusion, vertebrate pest management, facility assessment, and prevention services are delivered by independent, licensed wildlife control specialists. We do not perform services directly. Each licensed partner maintains their own professional licensing, insurance, and regulatory compliance.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
