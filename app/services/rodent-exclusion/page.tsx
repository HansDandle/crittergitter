import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Rodent Exclusion & Rat Prevention | Residential & Commercial',
  description:
    'Rodent exclusion and rat prevention solutions for homes and facilities. Licensed specialists identify entry points and implement structural prevention to stop rodent infestations.',
};

export default function RodentExclusionPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Rodent Exclusion & Prevention Systems</h1>
        <p>
          Rodent infestations damage property, contaminate food, and create health hazards. Professional rodent exclusion focuses on sealing entry points and preventing access—the only long-term solution. We connect property owners with licensed specialists who assess vulnerability and implement exclusion systems.
        </p>
      </div>

      <section className="content-section">
        <div className="info-panel">
          <h2>Rodent Problems & Solutions</h2>
          <ul>
            <li><strong>Entry Point Sealing:</strong> Rats and mice can squeeze through holes as small as a dime. Specialists identify and seal all access points.</li>
            <li><strong>Structural Prevention:</strong> Hardening foundations, sealing utility penetrations, and installing door sweeps prevent entry.</li>
            <li><strong>Sanitation Assessment:</strong> Reducing food sources and removing harborage areas complements exclusion.</li>
            <li><strong>Ongoing Verification:</strong> Licensed specialists conduct follow-up inspections to ensure exclusion integrity.</li>
          </ul>

          <h2>Rodent Exclusion Services</h2>
          <ul>
            <li>Comprehensive property inspection for entry points</li>
            <li>Foundation and foundation crack sealing</li>
            <li>Utility penetration closure</li>
            <li>Attic ventilation exclusion</li>
            <li>Door and window sealing</li>
            <li>Crawl space hardening and exclusion</li>
          </ul>

          <h2>Residential Rodent Issues</h2>
          <ul>
            <li>Rats or mice in attics, walls, or basements</li>
            <li>Rodent entry points along foundation or siding</li>
            <li>Damage to insulation or wiring</li>
            <li>Droppings or nesting evidence</li>
            <li>Recurring infestation despite trapping</li>
          </ul>

          <h2>Commercial & Industrial Rodent Prevention</h2>
          <ul>
            <li>Warehouse and distribution center rodent prevention</li>
            <li>Food service facility health code compliance</li>
            <li>USDA/HACCP pest management support</li>
            <li>Manufacturing plant vulnerability assessment</li>
            <li>Documentation and compliance reporting</li>
          </ul>

          <div className="cta-box">
            <h3>Assess Your Rodent Problem</h3>
            <p>Select the option that fits your situation for a professional assessment and exclusion plan.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/residential" className="btn btn-primary">
                Residential Assessment
              </Link>
              <Link href="/enterprise" className="btn btn-secondary">
                Commercial Assessment
              </Link>
            </div>
          </div>

          <div className="compliance-note">
            <p>
              <strong>Our Role:</strong> We coordinate assessments with licensed wildlife specialists experienced in rodent exclusion. All exclusion work, sealing, and prevention services are performed by independent, licensed professionals. We do not perform services directly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
