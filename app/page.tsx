import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneLink } from '@/components/PhoneLink';

export const metadata: Metadata = {
  title: 'Wildlife Exclusion & Pest Prevention | Professional Network',
  description:
    'Connect with licensed wildlife exclusion specialists and vertebrate pest management professionals. Assessment coordination and specialist referrals for residential and commercial properties.',
};

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>Wildlife Exclusion & Nuisance Wildlife Control</h1>
          <p>
            We connect property owners with our network of licensed, independent wildlife exclusion and vertebrate pest management specialists. From residential animal removal to commercial facility prevention and bird control systems, we coordinate comprehensive assessments and professional solutions.
          </p>
          <div className="hero-cta">
            <Link href="/residential" className="btn btn-primary btn-lg">
              Residential Issues
            </Link>
            <Link href="/enterprise" className="btn btn-secondary btn-lg">
              Enterprise Assessment
            </Link>
          </div>
          <p className="hero-phone">
            Prefer to talk? Call us: <PhoneLink />
          </p>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Image
            src="/images/heronet.jpg"
            alt="Professional bird netting and wildlife exclusion installation"
            width={1200}
            height={400}
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '0.75rem' }}
          />
        </div>
      </header>

      <main className="page-container">
        <section className="how-it-works">
          <h2>How Wildlife Exclusion Coordination Works</h2>
          <p>
            Our platform connects property owners with licensed, independent wildlife exclusion and nuisance wildlife control specialists. We facilitate assessments, coordinate with professionals, and manage the referral process.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Tell Us Your Situation</h3>
              <p>Complete a brief assessment form describing your property and wildlife concerns.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>We Assess & Coordinate</h3>
              <p>We review your situation and match you with licensed specialists suited to your needs.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Licensed Specialist Contacts You</h3>
              <p>An independent, licensed professional will reach out to perform assessment and discuss solutions.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Services Executed by Specialists</h3>
              <p>Licensed partners perform inspections, exclusion, prevention, and any required follow-up.</p>
            </div>
          </div>
        </section>

        <section className="service-areas">
          <h2>Wildlife Exclusion & Prevention Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Residential Exclusion</h3>
              <ul>
                <li>Animal removal and exclusion</li>
                <li>Attic wildlife removal</li>
                <li>Rodent exclusion systems</li>
                <li>Humane bat exclusion</li>
                <li>Entry point sealing</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Commercial & Industrial Prevention</h3>
              <ul>
                <li>Structural vulnerability assessment</li>
                <li>Bird exclusion systems for warehouses</li>
                <li>Industrial rodent exclusion</li>
                <li>USDA/FDA compliance support</li>
                <li>Facility wildlife prevention programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="why-choose">
          <h2>Why Our Network Matters</h2>
          <ul className="features">
            <li>
              <strong>Licensed Specialist Network:</strong> We connect you only with independently licensed, insured wildlife exclusion and pest management professionals.
            </li>
            <li>
              <strong>Compliance & Transparency:</strong> We clearly communicate our role as a coordination platform connecting you with licensed operators—never as direct service providers.
            </li>
            <li>
              <strong>Regional Expertise:</strong> Specialists in our network understand local wildlife challenges, building codes, and regulatory requirements.
            </li>
            <li>
              <strong>Prevention-Focused:</strong> Our partners help identify entry points, seal vulnerabilities, and implement long-term exclusion solutions.
            </li>
            <li>
              <strong>Regulatory Support:</strong> For commercial clients, specialists provide USDA/FDA compliance assessment and documentation.
            </li>
          </ul>
        </section>

        <section className="compliance-statement">
          <h2>Regulatory Compliance & Disclaimer</h2>
          <p>
            <strong>Important:</strong> We are a coordination and referral platform only—not a licensed wildlife control or pest management operator. We do not perform wildlife removal, exclusion, trapping, control, or prevention services. We do not handle, transport, or deal with animals.
          </p>
          <p>
            <strong>Licensed Professionals Only:</strong> All wildlife exclusion, animal removal, and pest prevention services are provided exclusively by independent, licensed wildlife control specialists and vertebrate pest management professionals in our network. Each licensed partner maintains their own insurance and licensure.
          </p>
          <p>
            When you submit an assessment request, we coordinate with qualified specialists to facilitate referrals. Specialists will contact you directly to discuss your specific situation, scope work, and provide estimates. Learn more: <Link href="/about">About Our Service Model</Link> | <Link href="/privacy">Privacy Policy</Link>
          </p>
        </section>

        <section className="cta-footer">
          <h2>Ready to Get Started?</h2>
          <p>Choose the option that fits your situation.</p>
          <div className="footer-cta">
            <Link href="/residential" className="btn btn-primary btn-lg">
              Residential Assessment
            </Link>
            <Link href="/enterprise" className="btn btn-secondary btn-lg">
              Enterprise Assessment
            </Link>
          </div>
          <p className="cta-phone">
            Or call us directly: <PhoneLink />
          </p>
        </section>
      </main>
    </>
  );
}
