import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Critter Getter - Wildlife Exclusion Referrals',
  description:
    'Connect with licensed wildlife and varmint exclusion specialists. We coordinate assessments and specialist referrals for residential and enterprise properties.',
};

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>Professional Wildlife Exclusion Coordination</h1>
          <p>
            Connect with licensed specialists to assess and resolve your wildlife issues. Whether residential or
            enterprise, we coordinate solutions with qualified professionals in your area.
          </p>
          <div className="hero-cta">
            <Link href="/residential" className="btn btn-primary btn-lg">
              Residential Issues
            </Link>
            <Link href="/enterprise" className="btn btn-secondary btn-lg">
              Enterprise Assessment
            </Link>
          </div>
        </div>
      </header>

      <main className="page-container">
        <section className="how-it-works">
          <h2>How It Works</h2>
          <p>
            Critter Getter is a referral platform connecting property owners with licensed, independent
            wildlife exclusion specialists.
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
          <h2>What We Help With</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>🏠 Residential</h3>
              <ul>
                <li>Squirrels in attics</li>
                <li>Raccoon problems</li>
                <li>Rat and rodent issues</li>
                <li>Bat exclusion</li>
                <li>Other wildlife concerns</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>🏢 Commercial & Industrial</h3>
              <ul>
                <li>Facility vulnerability assessments</li>
                <li>Rodent prevention programs</li>
                <li>Perimeter hardening</li>
                <li>Regulatory compliance support</li>
                <li>Risk and sanitation assessment</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="why-choose">
          <h2>Why Choose Critter Getter</h2>
          <ul className="features">
            <li>
              <strong>Licensed Professionals:</strong> All services delivered by independently licensed,
              insured specialists.
            </li>
            <li>
              <strong>Transparent Process:</strong> We clearly communicate that specialists are independent
              and licensed.
            </li>
            <li>
              <strong>Local Expertise:</strong> We connect you with specialists familiar with your region's
              specific wildlife challenges.
            </li>
            <li>
              <strong>Education-Focused:</strong> Specialists help identify root causes and prevention opportunities.
            </li>
            <li>
              <strong>Compliance-Ready:</strong> Enterprise clients benefit from risk and compliance-aware assessment.
            </li>
          </ul>
        </section>

        <section className="compliance-statement">
          <h2>Important Legal Information</h2>
          <p>
            <strong>Critter Getter is not a licensed pest or wildlife control operator.</strong> We are a referral
            and coordination platform only. All services are provided by independent, licensed professionals. We do
            not perform wildlife removal, exclusion, control, or extermination services directly.
          </p>
          <p>
            When you submit an inquiry, you authorize us to coordinate with licensed specialists in your area. Learn
            more about how we operate: <Link href="/about">About Us</Link> | <Link href="/privacy">Privacy Policy</Link>
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
        </section>
      </main>
    </>
  );
}
