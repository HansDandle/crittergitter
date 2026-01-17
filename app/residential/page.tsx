import type { Metadata } from 'next';
import { ResidentialForm } from '@/components/ResidentialForm';
import { PhoneLink } from '@/components/PhoneLink';

export const metadata: Metadata = {
  title: 'Animal Removal & Residential Wildlife Exclusion Assessment',
  description:
    'Assess residential animal removal and wildlife exclusion needs. Connect with licensed specialists for attic wildlife removal, rodent exclusion, humane animal control, and structural prevention.',
};

export default function ResidentialPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Request a Home Assessment</h1>
        <p>
          We coordinate wildlife removal and exclusion with licensed specialists in your area. Describe your situation below and we'll match you with qualified professionals. Call if you'd prefer to chat now - <PhoneLink />
        </p>
      </div>

      <section className="content-section">
        <div className="form-container">
          <ResidentialForm />
        </div>

        <aside className="info-panel">
          <h2>What Specialists Assess</h2>
          <ul>
            <li>
              <strong>Property Inspection:</strong> Identify entry points, evidence of infestation, and vulnerable areas.
            </li>
            <li>
              <strong>Risk Assessment:</strong> Understand health and safety impacts specific to your property.
            </li>
            <li>
              <strong>Exclusion Planning:</strong> Develop a strategy to seal entry points and prevent future problems.
            </li>
            <li>
              <strong>Humane Solutions:</strong> Licensed specialists prioritize humane, long-term exclusion methods.
            </li>
          </ul>

          <h3>Common Residential Issues</h3>
          <ul>
            <li>Attic wildlife removal (squirrels, raccoons, bats)</li>
            <li>Rodent exclusion and prevention</li>
            <li>Foundation and crawl space damage assessment</li>
            <li>Humane animal control and exclusion</li>
            <li>Entry point sealing and structural prevention</li>
          </ul>

          <div className="compliance-note">
            <p>
              <strong>Our Role:</strong> We coordinate with licensed, independent wildlife specialists. All animal removal, exclusion, and pest prevention services are provided by licensed professionals—not by us. Each specialist maintains their own licensing, insurance, and qualifications.
            </p>
            <p className="call-option">
              <strong>Prefer to call?</strong> Reach us at <PhoneLink />
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
