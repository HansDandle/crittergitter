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
        <div className="hero-images">
          <div className="hero-image-main">
            <Image
              src="/images/heronet.jpg"
              alt="Professional bird netting and wildlife exclusion installation"
              width={800}
              height={500}
              priority
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem' }}
            />
          </div>
          <div className="hero-image-side">
            <Image
              src="/images/bird-net-eaves.jpg"
              alt="Bird netting installation on building eaves"
              width={400}
              height={240}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem' }}
            />
            <Image
              src="/images/racoon-roof-fascia-medium.jpg"
              alt="Raccoon wildlife exclusion from roof"
              width={400}
              height={240}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem' }}
            />
          </div>
        </div>
      </header>

      <main className="page-container">
        <section className="how-it-works">
          <div className="how-overlay">
            <h2>How Wildlife Exclusion Coordination Works</h2>
            <p>
              Our platform connects property owners with licensed, independent wildlife exclusion and nuisance wildlife control specialists. We facilitate assessments, coordinate with professionals, and manage the referral process.
            </p>
          </div>
          <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Submit Your Situation & We Coordinate</h3>
                <p>
                  Complete a brief assessment form describing your property and wildlife concerns. We review your submission and match you with licensed specialists suited to your needs, then coordinate next steps.
                </p>
              </div>
            <div className="step">
                <div className="step-number">2</div>
                <h3>Licensed Specialist Contacts You</h3>
                <p>An independent, licensed professional will reach out to perform assessment and discuss solutions.</p>
            </div>
            <div className="step">
                <div className="step-number">3</div>
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
              <strong>Regional Expertise:</strong> Specialists in our network understand local wildlife challenges, building codes, and regulatory requirements.
            </li>
            <li>
              <strong>Prevention-Focused:</strong> Our partners help identify entry points, seal vulnerabilities, and implement long-term exclusion solutions.
            </li>
            <li>
              <strong>Regulatory Support:</strong> For commercial clients, specialists provide all necessary compliance assessment and documentation.
            </li>
          </ul>
        </section>

        <div className="bottom-grid">
          <section className="professional-highlight">
            <h2>Local Professional Highlight</h2>
            <div className="highlight-content">
              <div className="highlight-image">
                <Image
                  src="/images/micahbuck.jpg"
                  alt="Micah Archer - Assessment and Removal Specialist"
                  width={400}
                  height={400}
                  style={{ borderRadius: '1rem', objectFit: 'cover' }}
                />
              </div>
              <div className="highlight-text">
                <h3>Micah Archer</h3>
                <p className="highlight-title">Top-Rated Assessment & Removal Specialist</p>
                <p>
                  Micah Archer is the top rated Assessment and Removal Specialist for the local franchise of Critter Control, which has been in operation since 1983. As a Central Texas homeowner, animal lover, and formerly a warehouse supervisor, he knows how important timely wildlife prevention and removal can be for the safety of people, pets, and property.
                </p>
                <p>
                  His attention to detail and commitment to customer safety have earned him consistent five-star feedback from clients across the region.
                </p>
              </div>
            </div>
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
        </div>
      </main>
    </>
  );
}
