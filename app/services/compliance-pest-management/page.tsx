import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Compliance-Driven Pest Management | FDA, USDA, HACCP | Austin',
  description: 'Professional pest management solutions designed for regulatory compliance. FDA, USDA, and HACCP documentation included for food service and processing facilities.',
  keywords: ['FDA pest control', 'USDA pest management', 'HACCP compliance', 'health code pest prevention', 'audit ready pest control'],
};

export default function CompliancePestManagement() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Compliance-Driven Pest Management</h1>
        <p>
          Professional wildlife exclusion and pest prevention designed specifically for FDA, USDA, and HACCP compliance. Audit-ready documentation included.
        </p>
      </div>

      <section className="hero" style={{ marginTop: '-2rem', marginBottom: '3rem' }}>
        <div className="hero-content">
          <h2>Pass Your Audit With Confidence</h2>
          <p>
            Documented pest prevention prevents violations, fines, and operational shutdowns. Professional exclusion is compliance built in.
          </p>
          <div className="hero-cta">
            <a href="/enterprise" className="btn btn-primary btn-lg">Get Compliance Assessment</a>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Regulatory Standards That Matter</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>FDA Sanitation Compliance</h3>
            <p className="font-weight-bold" style={{ marginBottom: '1rem' }}>
              Food Safety Modernization Act (FSMA) requires documented pest prevention.
            </p>
            <ul>
              <li>Food facility sanitation standards</li>
              <li>Pest-proof design requirements</li>
              <li>Monitoring and inspection protocols</li>
              <li>Documented corrective actions</li>
              <li>Third-party audit readiness</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>USDA Facility Standards</h3>
            <p className="font-weight-bold" style={{ marginBottom: '1rem' }}>
              Critical for meat processing, poultry, and agricultural operations.
            </p>
            <ul>
              <li>Pest control procedure documentation</li>
              <li>Facility exclusion requirements</li>
              <li>Chemical treatment protocols</li>
              <li>Post-treatment verification</li>
              <li>Inspector audit compliance</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>HACCP Integration</h3>
            <p className="font-weight-bold" style={{ marginBottom: '1rem' }}>
              Hazard Analysis and Critical Control Points requires pest prevention documentation.
            </p>
            <ul>
              <li>Pest control as hazard prevention</li>
              <li>Critical control point monitoring</li>
              <li>Preventive measure documentation</li>
              <li>Corrective action procedures</li>
              <li>Record keeping and traceability</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Health Code Compliance</h3>
            <p className="font-weight-bold" style={{ marginBottom: '1rem' }}>
              Local health departments require evidence of pest prevention.
            </p>
            <ul>
              <li>Municipal facility inspection standards</li>
              <li>Pest control plan documentation</li>
              <li>Treatment records and evidence</li>
              <li>Inspector communication log</li>
              <li>Violation prevention protocols</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>Compliance-Focused Pest Management Process</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Compliance Audit</h3>
            <p>Licensed specialists review your facility against FDA, USDA, and local requirements. Identify gaps and vulnerabilities.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Exclusion Strategy</h3>
            <p>Design pest prevention plan addressing compliance gaps. Focus on entry point sealing and structural improvements.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Professional Implementation</h3>
            <p>Licensed installation with full documentation. Create audit trail proving compliance effort and results.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Audit Preparation</h3>
            <p>Complete documentation package ready for FDA, USDA, or health inspectors. Regular monitoring and reporting.</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Documentation That Passes Inspection</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Facility Assessment Reports</h3>
            <p>
              Professional assessment documenting facility vulnerabilities, exclusion methods, and compliance status. Includes photos and technical details.
            </p>
          </div>
          <div className="service-card">
            <h3>Pest Control Plans</h3>
            <p>
              Written procedures for pest prevention, monitoring, and response. Aligned with FDA, USDA, and HACCP requirements.
            </p>
          </div>
          <div className="service-card">
            <h3>Treatment & Installation Records</h3>
            <p>
              Complete records of all exclusion work, pest control treatments, and preventive measures. Time-stamped and photographed.
            </p>
          </div>
          <div className="service-card">
            <h3>Monitoring Logs</h3>
            <p>
              Ongoing monitoring documentation showing continued compliance and early detection of potential issues.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Industries Requiring Compliance Documentation</h2>
        <ul className="features">
          <li><strong>Food Processing & Manufacturing</strong> – Meat, poultry, dairy, and specialty food production</li>
          <li><strong>Food Service & Hospitality</strong> – Restaurants, catering, institutional foodservice</li>
          <li><strong>Food Distribution & Warehousing</strong> – Wholesale food storage and logistics</li>
          <li><strong>Pharmaceutical Manufacturing</strong> – GMP compliance and controlled environment protection</li>
          <li><strong>Healthcare Facilities</strong> – Hospitals, clinics, and medical supply areas</li>
          <li><strong>Public Water & Wastewater</strong> – Public health infrastructure requiring strict protocols</li>
        </ul>
      </section>

      <section className="compliance-statement">
        <h2>Why Professional Documentation Matters</h2>
        <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Prevent Violations & Fines</h3>
        <p>
          Documented pest prevention demonstrates good faith effort to inspectors. Professional exclusion reduces violation risk and potential fines.
        </p>
        
        <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Operational Continuity</h3>
        <p>
          Passing audits means no shutdown orders, no operational disruptions, and no negative publicity. Maintain customer confidence.
        </p>
        
        <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Insurance & Liability Protection</h3>
        <p>
          Documentation shows reasonable precautions, protecting you in liability claims. Required by many insurance policies.
        </p>

        <p style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#ecfdf5', borderLeft: '4px solid var(--color-primary)', borderRadius: 'var(--border-radius-lg)' }}>
          <strong>SiteShield connects facility managers with licensed wildlife control professionals</strong> who understand regulatory requirements and can provide audit-ready documentation. We do not provide services directly but facilitate connections with qualified specialists in your area.
        </p>
      </section>

      <section style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'var(--color-slate-100)', borderRadius: 'var(--border-radius-xl)' }}>
        <h2>Common Compliance Questions</h2>
        
        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>What documentation do I need for FDA compliance?</h3>
        <p>
          FDA expects written pest control procedures, facility assessment results, treatment/exclusion records, and ongoing monitoring documentation. Professional assessment and installation provides all of this.
        </p>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>How often do we need pest control documentation?</h3>
        <p>
          Ongoing monitoring and periodic assessments show consistent effort. Most facilities maintain quarterly or annual documentation, with monthly monitoring logs.
        </p>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Can I use a retail pest control company?</h3>
        <p>
          You can, but professional facilities-focused specialists are better equipped to provide compliance-specific documentation and understand regulatory nuances.
        </p>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Does exclusion work for compliance audits?</h3>
        <p>
          Yes—exclusion is considered a primary control measure. Documented exclusion (sealing, netting, barriers) combined with monitoring satisfies most audit requirements.
        </p>
      </section>

      <div className="cta-footer">
        <h2>Ensure Compliance Today</h2>
        <p>
          Don't risk violations, fines, or operational disruptions. Connect with a licensed specialist who understands your regulatory requirements.
        </p>
        <div className="footer-cta">
          <a href="/enterprise" className="btn btn-primary btn-lg">Schedule Compliance Assessment</a>
        </div>
      </div>
    </main>
  );
}
