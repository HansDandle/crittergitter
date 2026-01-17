import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Industrial Wildlife Exclusion & Facility Pest Management | Austin',
  description: 'Professional wildlife exclusion systems for manufacturing, industrial, and public facilities in Austin. FDA and USDA compliance included.',
  keywords: ['industrial wildlife control Austin', 'facility pest management', 'manufacturing wildlife exclusion', 'industrial rodent control'],
};

export default function IndustrialWildlifeExclusion() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Industrial Wildlife Exclusion & Facility Pest Management</h1>
        <p>
          Comprehensive wildlife exclusion systems for manufacturing facilities, industrial operations, and public infrastructure across Austin and Central Texas.
        </p>
      </div>

      <section className="hero" style={{ marginTop: '-2rem', marginBottom: '3rem' }}>
        <div className="hero-content">
          <h2>Prevent Wildlife Damage to Operations</h2>
          <p>
            Professional exclusion is more cost-effective than ongoing cleanup and emergency response. Permanent solutions protect your facility.
          </p>
          <div className="hero-cta">
            <Link href="/enterprise" className="btn btn-primary btn-lg">Get Facility Assessment</Link>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <Image
            src="/images/bird-netting-under-canopy.webp"
            alt="Industrial facility bird exclusion system"
            width={600}
            height={300}
            style={{ width: '100%', height: 'auto', borderRadius: '0.75rem' }}
          />
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Gallery: Industrial Exclusion Solutions</h2>
        <div className="image-gallery" style={{ margin: '2rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <Image
            src="/images/bird-netting-under-canopy.webp"
            alt="Bird exclusion under facility canopy"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/birdnetting2.jpg"
            alt="Industrial bird netting installation"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/Pest-Proofing-Squirrel.jpg"
            alt="Professional facility pest prevention"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <h2 style={{ marginTop: '2rem' }}>Industrial Wildlife Management Challenges</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Operational Disruption</h3>
            <ul>
              <li>Production shutdowns for pest control</li>
              <li>Equipment damage from wildlife</li>
              <li>HVAC and air quality contamination</li>
              <li>Electrical fires from nesting material</li>
              <li>Workplace safety hazards</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Regulatory & Compliance Risk</h3>
            <ul>
              <li>FDA sanitation violations</li>
              <li>USDA facility compliance failures</li>
              <li>Health code citations</li>
              <li>HACCP protocol breaches</li>
              <li>Facility audit failures</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Financial & Liability</h3>
            <ul>
              <li>Contamination cleanup costs</li>
              <li>Product loss and recalls</li>
              <li>Insurance claims and deductibles</li>
              <li>Regulatory fines and penalties</li>
              <li>Legal liability exposure</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>Professional Facility Exclusion Process</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Comprehensive Audit</h3>
            <p>Licensed specialists conduct a facility-wide assessment identifying entry points, vulnerability areas, and compliance risks.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Custom Exclusion Design</h3>
            <p>Tailored solutions addressing your specific facility type, size, and operational requirements. Minimal production impact.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Professional Installation</h3>
            <p>Licensed installation teams minimize operational disruption while ensuring long-term effectiveness and durability.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Audit & Documentation</h3>
            <p>Complete documentation proving compliance and exclusion effectiveness for regulatory bodies and auditors.</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Facility-Specific Exclusion Solutions</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Structural Wildlife Exclusion</h3>
            <p>
              Professional sealing of entry points prevents wildlife from entering buildings. Focus on roof lines, foundation gaps, and wall penetrations.
            </p>
            <ul>
              <li>Roof and roofline sealing</li>
              <li>Foundation penetration closure</li>
              <li>Wall-mounted barrier systems</li>
              <li>Weather-resistant materials</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Interior Habitat Elimination</h3>
            <p>
              Remove nesting and denning opportunities inside facilities through barriers, exclusion netting, and environmental management.
            </p>
            <ul>
              <li>Rafter and beam netting</li>
              <li>Storage area protection</li>
              <li>High-access area exclusion</li>
              <li>Inspection and monitoring</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Dock and Entrance Control</h3>
            <p>
              Loading docks and entrances are primary access points. Professional systems prevent entry during high-traffic operations.
            </p>
            <ul>
              <li>Entrance vestibule barriers</li>
              <li>Dock door sealing systems</li>
              <li>Air curtain integration</li>
              <li>Operational workflow compatible</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Utility and Infrastructure Protection</h3>
            <p>
              HVAC intakes, exhaust vents, and electrical conduits are vulnerability points. Targeted protection prevents interior intrusion.
            </p>
            <ul>
              <li>Vent and intake screening</li>
              <li>Exhaust duct protection</li>
              <li>Conduit and pipe sealing</li>
              <li>Maintenance-accessible design</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Austin Industrial Facilities We Serve</h2>
        <ul className="features">
          <li><strong>Food Processing Facilities</strong> – FDA-compliant operations requiring zero-contamination protocols</li>
          <li><strong>Manufacturing Plants</strong> – Complex facilities with machinery vulnerability and compliance requirements</li>
          <li><strong>Water Treatment Facilities</strong> – Public health infrastructure with strict exclusion standards</li>
          <li><strong>Public Works Departments</strong> – Government facilities with operational and safety requirements</li>
          <li><strong>Cold Storage & Distribution</strong> – Temperature-controlled environments requiring non-intrusive solutions</li>
          <li><strong>Logistics & Fulfillment</strong> – High-volume operations with compliance and product quality needs</li>
        </ul>
      </section>

      <section className="compliance-statement">
        <h2>Regulatory Compliance & Documentation</h2>
        <p>
          <strong>SiteShield connects facility managers with licensed wildlife control professionals</strong> specializing in industrial exclusion and compliance:
        </p>
        <ul style={{ marginTop: '1rem' }}>
          <li><strong>FDA Sanitation Compliance</strong> – Documented pest prevention meeting food safety standards</li>
          <li><strong>USDA Facility Standards</strong> – Required for meat processing and agricultural facilities</li>
          <li><strong>HACCP Integration</strong> – Pest exclusion as part of your hazard analysis plan</li>
          <li><strong>Health Code Compliance</strong> – Audit-ready documentation for municipal inspections</li>
          <li><strong>Insurance Requirements</strong> – Proof of pest prevention for property and liability coverage</li>
        </ul>
        <p style={{ marginTop: '1rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
          SiteShield is a referral platform connecting facility managers and operators with independent, licensed wildlife control professionals. We do not provide services directly but facilitate connections with qualified specialists serving Austin and Central Texas.
        </p>
      </section>

      <div className="cta-footer">
        <h2>Protect Your Facility Operations</h2>
        <p>
          Don't let wildlife damage disrupt operations or jeopardize compliance. Connect with licensed specialists today.
        </p>
        <div className="footer-cta">
          <a href="/enterprise" className="btn btn-primary btn-lg">Schedule Facility Assessment</a>
        </div>
      </div>
    </main>
  );
}
