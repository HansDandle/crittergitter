import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Warehouse Pest Prevention & Wildlife Exclusion Systems',
  description:
    'Industrial warehouse pest prevention, bird exclusion, and wildlife control coordination. USDA/FDA compliant solutions for manufacturing, distribution, and food storage facilities.',
};

export default function WarehousePestPreventionPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Warehouse & Industrial Pest Prevention</h1>
        <p>
          Warehouses, distribution centers, and manufacturing facilities face unique pest challenges. Birds, rodents, and wildlife cause product contamination, regulatory violations, and operational disruptions. We coordinate comprehensive assessments with licensed vertebrate pest management specialists who understand industrial facility requirements and compliance standards.
        </p>
      </div>

      <section className="content-section">
        <div className="image-gallery" style={{ margin: '2rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <Image
            src="/images/birdnets-substation.jpg"
            alt="Bird exclusion systems for industrial facilities"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/birdnetting2.jpg"
            alt="Warehouse bird netting installation"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/Pest-Proofing-Squirrel.jpg"
            alt="Professional pest prevention and sealing"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className="info-panel">
          <h2>Why Warehouse Pest Prevention Matters</h2>
          <ul>
            <li><strong>Product Contamination:</strong> Bird droppings and rodent activity contaminate inventory and violate food safety standards.</li>
            <li><strong>Regulatory Compliance:</strong> USDA, FDA, and health codes require active pest prevention programs.</li>
            <li><strong>Operational Efficiency:</strong> Pest-related shutdowns and recalls disrupt distribution and damage reputation.</li>
            <li><strong>Structural Damage:</strong> Wildlife entry causes roof, siding, and equipment damage requiring expensive repairs.</li>
            <li><strong>Employee Safety:</strong> Pest infestations create health hazards and workplace concerns.</li>
          </ul>

          <h2>Warehouse Assessment Services</h2>
          <ul>
            <li>Structural vulnerability inspection and mapping</li>
            <li>Bird exclusion system design (netting, screening, deterrents)</li>
            <li>Rodent entry point assessment and sealing specifications</li>
            <li>Dock door and loading area protection</li>
            <li>Drainage and water exclusion evaluation</li>
            <li>Sanitation and harborage area assessment</li>
          </ul>

          <h2>Compliance & Documentation</h2>
          <ul>
            <li><strong>USDA Compliance:</strong> Pest prevention documentation and verification for USDA-regulated products</li>
            <li><strong>FDA Requirements:</strong> Food safety plan support and pest management verification</li>
            <li><strong>Health Code:</strong> Rodent and bird control documentation satisfying local health departments</li>
            <li><strong>Insurance:</strong> Prevention programs that support property and liability coverage</li>
            <li><strong>Third-Party Audits:</strong> Documentation supporting customer and supplier audits</li>
          </ul>

          <h2>Facility Types Served</h2>
          <ul>
            <li>Food storage and distribution warehouses</li>
            <li>Pharmaceutical and medical supply facilities</li>
            <li>Manufacturing plants and processing centers</li>
            <li>Agricultural product storage</li>
            <li>Import/export and consolidation centers</li>
            <li>Retail and general merchandise warehouses</li>
          </ul>

          <h2>Common Warehouse Pest Issues</h2>
          <ul>
            <li>Birds nesting in rafters or entry areas</li>
            <li>Rodent access through foundation or utility penetrations</li>
            <li>Water infiltration creating pest habitat</li>
            <li>Dock areas exposed to wildlife during receiving/shipping</li>
            <li>Regulatory findings during inspections</li>
          </ul>

          <div className="cta-box">
            <h3>Request a Warehouse Assessment</h3>
            <p>Describe your facility and pest concerns. We'll coordinate with licensed specialists experienced in industrial pest prevention and compliance requirements.</p>
            <Link href="/enterprise" className="btn btn-primary btn-lg">
              Get Enterprise Assessment
            </Link>
          </div>

          <div className="compliance-note">
            <p>
              <strong>Our Role:</strong> We coordinate comprehensive assessments with licensed wildlife exclusion and vertebrate pest management specialists. All prevention work, facility hardening, and compliance support are delivered by independent, licensed professionals. We do not perform services directly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
