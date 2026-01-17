import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Warehouse Bird Control & Exclusion | Austin Commercial Solutions',
  description: 'Professional warehouse bird control, netting, and exclusion systems for distribution centers and logistics facilities in Austin. Connect with licensed specialists.',
  keywords: ['warehouse bird control Austin', 'commercial bird netting', 'loading dock bird control', 'warehouse pest prevention'],
};

export default function WarehouseBirdControl() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Warehouse Bird Control & Exclusion</h1>
        <p>
          Industrial-grade bird exclusion systems for distribution centers, warehouses, and logistics facilities serving Austin and Central Texas.
        </p>
      </div>

      <section className="hero" style={{ marginTop: '-2rem', marginBottom: '3rem' }}>
        <div className="hero-content">
          <h2>Prevent Bird Damage Before It Costs You</h2>
          <p>
            Bird infestations in warehouses damage inventory, compromise compliance, and create liability. Professional exclusion is cheaper than cleanup.
          </p>
          <div className="hero-cta">
            <a href="/enterprise" className="btn btn-primary btn-lg">Get Connected with Specialists</a>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Why Warehouse Bird Control Matters</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Financial Impact</h3>
            <ul>
              <li>Inventory contamination and loss</li>
              <li>Facility cleaning and remediation costs</li>
              <li>Equipment damage from nesting and droppings</li>
              <li>Recurring pest control expenses</li>
              <li>Lost revenue from operational delays</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Compliance & Liability</h3>
            <ul>
              <li>FDA sanitation violations</li>
              <li>Health code citations</li>
              <li>HACCP documentation requirements</li>
              <li>Insurance claims and deductibles</li>
              <li>Legal liability for contaminated goods</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Operational Risk</h3>
            <ul>
              <li>Production shutdowns during treatments</li>
              <li>Worker safety concerns</li>
              <li>HVAC and air quality contamination</li>
              <li>Electrical fire hazards from nesting</li>
              <li>Reputation damage with clients</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>Professional Warehouse Bird Exclusion Process</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Facility Assessment</h3>
            <p>Licensed specialists evaluate your warehouse for bird entry points, nesting areas, and structural vulnerabilities.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Exclusion Design</h3>
            <p>Custom industrial netting, spikes, and barrier systems designed for your specific facility type and dimensions.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Professional Installation</h3>
            <p>Licensed technicians install systems with minimal disruption to operations. Solutions designed to last years.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Compliance Documentation</h3>
            <p>Complete documentation for audits, insurance, and regulatory compliance (USDA, FDA, HACCP).</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Warehouse-Specific Solutions</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Loading Dock Bird Control</h3>
            <p>
              Loading docks are primary entry points for birds. Professional netting systems prevent entry while maintaining operational access.
            </p>
            <ul>
              <li>Overhead netting systems</li>
              <li>Door seal solutions</li>
              <li>Dock leveler protection</li>
              <li>Maintenance-friendly designs</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Roof and Roofline Exclusion</h3>
            <p>
              Birds nest on warehouse roofs, damaging membranes and HVAC systems. Perimeter bird spikes and netting prevent nesting.
            </p>
            <ul>
              <li>Industrial bird spike systems</li>
              <li>Roofline netting</li>
              <li>HVAC exhaust protection</li>
              <li>Structural damage prevention</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Interior Rafter and Beam Protection</h3>
            <p>
              Birds roost inside high-ceiling warehouses, creating contamination risks. Targeted exclusion protects critical areas.
            </p>
            <ul>
              <li>Rafter netting systems</li>
              <li>Beam-mounted deterrents</li>
              <li>Interior blind installation</li>
              <li>Selective area protection</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Pallet Storage Area Management</h3>
            <p>
              Pallets create roosting opportunities. Strategic barriers and environmental management reduce nesting and contamination.
            </p>
            <ul>
              <li>Storage zone netting</li>
              <li>Environmental deterrents</li>
              <li>Elevated storage solutions</li>
              <li>Regular monitoring programs</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Austin Commercial Facilities We Serve</h2>
        <ul className="features">
          <li><strong>Distribution Centers</strong> – High-volume, temperature-controlled facilities with strict compliance requirements</li>
          <li><strong>Food Grade Warehouses</strong> – FDA and health code compliance with zero-contamination protocols</li>
          <li><strong>Logistics Hubs</strong> – Large-footprint facilities with complex rooflines and multiple entry points</li>
          <li><strong>Manufacturing Facilities</strong> – Industrial operations where bird damage threatens equipment and production</li>
          <li><strong>Cold Storage Warehouses</strong> – Temperature-sensitive environments requiring non-intrusive solutions</li>
          <li><strong>Pallet Yards</strong> – Outdoor storage areas requiring perimeter and elevated protection</li>
        </ul>
      </section>

      <section className="compliance-statement">
        <h2>Compliance & Documentation</h2>
        <p>
          <strong>SiteShield connects warehouse and distribution center managers with licensed wildlife control professionals</strong> who understand compliance requirements:
        </p>
        <ul style={{ marginTop: '1rem' }}>
          <li><strong>FDA Sanitation Compliance</strong> – Documentation proving no contamination risk</li>
          <li><strong>USDA Facility Standards</strong> – Required for food processing and storage facilities</li>
          <li><strong>HACCP Integration</strong> – Pest prevention as part of your hazard analysis plan</li>
          <li><strong>Insurance Requirements</strong> – Documentation for property and liability coverage</li>
          <li><strong>Audit Ready</strong> – All work documented for third-party facility audits</li>
        </ul>
        <p style={{ marginTop: '1rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
          SiteShield is a referral platform connecting facility managers with independent, licensed wildlife control professionals. We do not provide services directly but facilitate connections with qualified specialists in your area.
        </p>
      </section>

      <div className="cta-footer">
        <h2>Ready to Protect Your Facility?</h2>
        <p>
          Don't wait for bird damage. Connect with a licensed wildlife control specialist serving Austin and Central Texas.
        </p>
        <div className="footer-cta">
          <a href="/enterprise" className="btn btn-primary btn-lg">Get Enterprise Assessment</a>
        </div>
      </div>
    </main>
  );
}
