import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Substation Bird Control & Utility Infrastructure | Austin',
  description: 'Professional bird exclusion and deterrent systems for electrical substations, transformers, and utility infrastructure in Austin and Central Texas.',
  keywords: ['substation bird control Austin', 'electrical substation bird deterrents', 'utility bird exclusion', 'transformer bird protection'],
};

export default function SubstationBirdControl() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Substation & Utility Infrastructure Bird Control</h1>
        <p>
          Specialized bird exclusion and deterrent systems protecting electrical substations, transformers, and critical utility infrastructure across Austin and Central Texas.
        </p>
      </div>

      <section className="hero" style={{ marginTop: '-2rem', marginBottom: '3rem' }}>
        <div className="hero-content">
          <h2>Prevent Power Outages Before They Start</h2>
          <p>
            Birds cause 25% of substation outages. Professional exclusion prevents costly failures and service disruptions.
          </p>
          <div className="hero-cta">
            <Link href="/enterprise" className="btn btn-primary btn-lg">Connect with Specialists</Link>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <Image
            src="/images/birdnets-substation.jpg"
            alt="Professional bird exclusion at electrical substation"
            width={600}
            height={300}
            style={{ width: '100%', height: 'auto', borderRadius: '0.75rem' }}
          />
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Gallery: Substation Bird Control Solutions</h2>
        <div className="image-gallery" style={{ margin: '2rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <Image
            src="/images/birdnets-substation.jpg"
            alt="Bird exclusion at electrical substation"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/bird-netting-under-canopy.webp"
            alt="Equipment protection bird netting"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/birdnet3.webp"
            alt="Professional transformer bird protection"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <h2 style={{ marginTop: '2rem' }}>Why Substation Bird Control Is Critical</h2>
        <div className="service-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="service-card">
            <h3>Operational Impact</h3>
            <ul>
              <li>Transformer failures from bird contact</li>
              <li>Short circuits from nesting material</li>
              <li>Unplanned power outages</li>
              <li>Service disruptions affecting customers</li>
              <li>Emergency response costs</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Financial Risk</h3>
            <ul>
              <li>Transformer replacement ($50K-$500K+)</li>
              <li>Emergency maintenance costs</li>
              <li>Regulatory penalties for outages</li>
              <li>Customer compensation claims</li>
              <li>Reputational damage and lost revenue</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Safety & Compliance</h3>
            <ul>
              <li>Worker safety during maintenance</li>
              <li>Utility commission reporting requirements</li>
              <li>FERC and regional reliability standards</li>
              <li>Environmental protection compliance</li>
              <li>Insurance and liability management</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>Professional Substation Bird Exclusion</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Site Assessment</h3>
            <p>Licensed specialists evaluate your substation for bird perching, nesting, and entry points specific to utility infrastructure.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Custom System Design</h3>
            <p>Non-conductive deterrent systems designed for electrical safety and regulatory compliance.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Professional Installation</h3>
            <p>Certified installation by licensed professionals following utility safety standards and OSHA protocols.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Monitoring & Compliance</h3>
            <p>Ongoing monitoring and documentation meeting FERC, regional grid operator, and insurance requirements.</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Substation-Specific Solutions</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Transformer Bird Protection</h3>
            <p>
              Transformers are prime targets for nesting and perching. Non-conductive bird spikes and barriers protect critical equipment.
            </p>
            <ul>
              <li>Non-conductive bird spike systems</li>
              <li>Transformer-mounted deterrents</li>
              <li>Electrical safety compliance</li>
              <li>Equipment accessibility maintained</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Transmission Line Bird Exclusion</h3>
            <p>
              Birds perch on transmission structures causing contact losses and failures. Professional exclusion systems prevent ground faults.
            </p>
            <ul>
              <li>Line-mounted bird deterrents</li>
              <li>Avian protection devices (APDs)</li>
              <li>Insulator protection</li>
              <li>Compliance with utility standards</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Substation Facility Exclusion</h3>
            <p>
              Birds nest in substation buildings and enclosures. Complete facility exclusion prevents interior contamination and damage.
            </p>
            <ul>
              <li>Building perimeter netting</li>
              <li>Vent and opening protection</li>
              <li>Equipment room exclusion</li>
              <li>Maintenance-friendly designs</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Switching Station Protection</h3>
            <p>
              Switching equipment is vulnerable to bird-caused faults. Targeted barriers and environmental management protect operations.
            </p>
            <ul>
              <li>Equipment-specific deterrents</li>
              <li>Perch point elimination</li>
              <li>Environmental management</li>
              <li>Regular monitoring programs</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Austin & Central Texas Utility Infrastructure We Serve</h2>
        <ul className="features">
          <li><strong>Municipal Utilities</strong> – City-owned and operated power systems serving Austin metro</li>
          <li><strong>Electric Cooperatives</strong> – Member-owned utilities across the Hill Country and surrounding areas</li>
          <li><strong>Investor-Owned Utilities</strong> – Large regional utility companies serving multiple counties</li>
          <li><strong>Independent Power Operators</strong> – Critical infrastructure and backup generation facilities</li>
          <li><strong>Renewable Energy Facilities</strong> – Solar and wind infrastructure with bird protection needs</li>
          <li><strong>Distribution Substations</strong> – Neighborhood-level equipment serving residential and commercial areas</li>
        </ul>
      </section>

      <section className="compliance-statement">
        <h2>Regulatory Compliance & Documentation</h2>
        <p>
          <strong>SiteShield connects utility managers and facility operators with licensed wildlife control professionals</strong> specializing in utility infrastructure:
        </p>
        <ul style={{ marginTop: '1rem' }}>
          <li><strong>FERC Compliance</strong> – Documentation meeting Federal Energy Regulatory Commission standards</li>
          <li><strong>Regional Grid Operator Standards</strong> – Compliance with ERCOT and other regional operators</li>
          <li><strong>Utility Safety Standards</strong> – Non-conductive systems meeting electrical safety requirements</li>
          <li><strong>Outage Prevention</strong> – Documented prevention measures reducing forced outages</li>
          <li><strong>Insurance Requirements</strong> – Documentation for property and liability coverage</li>
        </ul>
        <p style={{ marginTop: '1rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
          SiteShield is a referral platform connecting utility managers with independent, licensed wildlife control professionals. We do not provide services directly but facilitate connections with qualified specialists in your service area.
        </p>
      </section>

      <div className="cta-footer">
        <h2>Protect Your Infrastructure</h2>
        <p>
          Connect with a licensed specialist serving Austin and Central Texas utilities. Prevent outages before they happen.
        </p>
        <div className="footer-cta">
          <a href="/enterprise" className="btn btn-primary btn-lg">Get Infrastructure Assessment</a>
        </div>
      </div>
    </main>
  );
}
