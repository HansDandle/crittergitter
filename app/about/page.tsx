import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About SiteShield | Wildlife Exclusion Referrals',
  description: 'Learn about our referral platform connecting wildlife issues with licensed specialists.',
};

export default function AboutPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>About SiteShield</h1>
        <p>Connecting wildlife issues with licensed professionals since 2025.</p>
      </div>

      <section className="content-section">
        <article>
          <h2>What We Do</h2>
          <p>
            SiteShield helps property owners and facility managers address wildlife and pest intrusion issues by connecting them with qualified, licensed wildlife exclusion professionals.
          </p>
          <p>
            We focus on intake, education, and coordination so that the right specialist handles the work from the start.
          </p>

          <h2>How SiteShield Works</h2>
          <div className="steps" style={{ marginBottom: '2rem' }}>
            <div className="step">
              <h3>You tell us about the situation</h3>
              <p>We collect details about the property, the issue, and any known risks or constraints.</p>
            </div>
            <div className="step">
              <h3>We coordinate the next step</h3>
              <p>Based on your needs and location, we connect you with an appropriate licensed wildlife exclusion specialist.</p>
            </div>
            <div className="step">
              <h3>The specialist performs the work</h3>
              <p>All inspections, exclusion, removal, and remediation services are performed by independent, licensed professionals.</p>
            </div>
          </div>
          <p>
            <strong>SiteShield does not perform wildlife control services directly. Our role is to ensure you are connected with the right expertise efficiently and transparently.</strong>
          </p>

          <h2>Who We Serve</h2>

          <h3>Residential Properties</h3>
          <p>
            For homeowners dealing with wildlife intrusion such as squirrels, raccoons, rodents, bats, or birds, we help coordinate assessments and connect you with licensed specialists who can evaluate damage, recommend solutions, and implement exclusion and prevention measures.
          </p>

          <h3>Commercial and Enterprise Facilities</h3>
          <p>
            We work with warehouses, industrial sites, food service operations, healthcare facilities, utilities, and other commercial properties that require coordinated, compliance-aware wildlife exclusion solutions.
          </p>
          <p>This includes support for:</p>
          <ul>
            <li>Facility assessments</li>
            <li>Risk identification</li>
            <li>Project scoping and coordination</li>
            <li>Multi-building or ongoing exclusion needs</li>
          </ul>

          <h2>Why SiteShield</h2>
          <div className="service-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="service-card" style={{ border: 'none', boxShadow: 'none', padding: 'var(--spacing-lg)' }}>
              <h3 style={{ marginTop: 0 }}>Clarity and transparency</h3>
              <p>You always know who is providing the service and who is responsible for the work.</p>
            </div>
            <div className="service-card" style={{ border: 'none', boxShadow: 'none', padding: 'var(--spacing-lg)' }}>
              <h3 style={{ marginTop: 0 }}>Licensed specialists</h3>
              <p>All services are performed by independently licensed and insured professionals.</p>
            </div>
            <div className="service-card" style={{ border: 'none', boxShadow: 'none', padding: 'var(--spacing-lg)' }}>
              <h3 style={{ marginTop: 0 }}>Local knowledge</h3>
              <p>We connect you with specialists who understand regional wildlife patterns and regulations.</p>
            </div>
            <div className="service-card" style={{ border: 'none', boxShadow: 'none', padding: 'var(--spacing-lg)' }}>
              <h3 style={{ marginTop: 0 }}>Commercial ready approach</h3>
              <p>We are built to support both single property needs and complex commercial environments.</p>
            </div>
          </div>

          <h2>Our Role and Responsibilities</h2>
          <p>
            SiteShield operates as an intake and referral platform. We do not hold pest control or wildlife removal licenses and do not perform regulated services ourselves.
          </p>
          <p>Our responsibility is to:</p>
          <ul>
            <li>Collect and organize intake information</li>
            <li>Coordinate connections with licensed specialists</li>
            <li>Facilitate communication during the initial engagement phase</li>
          </ul>
          <p>
            <strong>All services are contracted and performed directly between you and the licensed specialist.</strong>
          </p>

          <h2>Pricing and Referrals</h2>
          <ul>
            <li>There is no cost to submit an inquiry through SiteShield.</li>
            <li>You pay only the licensed specialist for services performed. SiteShield may receive a referral fee from participating specialists for qualified leads.</li>
          </ul>

          <h2>Privacy and Data Use</h2>
          <p>
            Your information is used solely to assess your needs, coordinate specialist connections, and facilitate communication. We do not sell consumer data outside our specialist network. For full details, please review our <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>Ready to Get Started?</h2>
          <p>
            Submit your information and we will coordinate the next step with a licensed wildlife exclusion professional.
          </p>

          <div className="cta-group">
            <Link href="/residential" className="btn btn-primary btn-lg">
              Residential Assessment
            </Link>
            <Link href="/enterprise" className="btn btn-primary btn-lg">
              Facility Assessment
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
