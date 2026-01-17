import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Critter Getter | Wildlife Exclusion Referrals',
  description: 'Learn about our referral platform connecting wildlife issues with licensed specialists.',
};

export default function AboutPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>About Critter Getter</h1>
        <p>Connecting wildlife issues with licensed professionals since 2025.</p>
      </div>

      <section className="content-section">
        <article>
          <h2>Our Mission</h2>
          <p>
            To provide a trusted intake and referral platform connecting homeowners and businesses with
            licensed, qualified wildlife exclusion specialists. We focus on education, assessment coordination,
            and specialist matching—never claiming to perform services ourselves.
          </p>

          <h2>How We Work</h2>
          <p>
            Critter Getter operates as a lead generation and referral platform. Here's what that means:
          </p>

          <ul>
            <li>
              <strong>We Are Not a Licensed Operator:</strong> We do not perform wildlife control, pest management,
              or exclusion services. We are not licensed to do so.
            </li>
            <li>
              <strong>We Assess and Coordinate:</strong> We gather information about your wildlife situation through
              our intake process, then coordinate with independent, licensed specialists.
            </li>
            <li>
              <strong>We Connect You with Licensed Professionals:</strong> Our network consists of independently
              licensed, insured wildlife exclusion specialists who perform all services.
            </li>
            <li>
              <strong>We Support Your Process:</strong> We help ensure you're connected with qualified professionals
              suited to your specific needs and location.
            </li>
          </ul>

          <h2>Our Expertise Includes</h2>

          <h3>Residential Services Coordination</h3>
          <p>
            For homeowners experiencing wildlife issues with squirrels, raccoons, rats, bats, and other animals,
            we connect you with licensed specialists who can assess damage, perform safe exclusion, and provide
            prevention recommendations.
          </p>

          <h3>Enterprise & Commercial Projects</h3>
          <p>
            For commercial facilities, industrial properties, food service establishments, and healthcare
            facilities, we coordinate comprehensive exclusion and prevention project planning with licensed
            specialists, including facility assessments, risk evaluation, and scope development.
          </p>

          <h2>What Sets Us Apart</h2>
          <ul>
            <li>
              <strong>Compliance Focus:</strong> We clearly communicate that services are performed by licensed
              partners, never creating confusion about who provides services.
            </li>
            <li>
              <strong>Transparent Process:</strong> You understand at every step that specialists are independent
              and licensed.
            </li>
            <li>
              <strong>Specialist Network:</strong> We work with carefully selected licensed professionals in
              wildlife exclusion and control.
            </li>
            <li>
              <strong>Local Expertise:</strong> We connect you with local specialists who understand your region's
              specific wildlife challenges.
            </li>
          </ul>

          <h2>Legal & Licensing</h2>
          <p>
            Critter Getter (the website and referral platform) is <strong>not</strong> a licensed pest or wildlife
            control operator. We do not hold any licenses related to pest management, wildlife removal, or similar
            services. All services are provided exclusively by independent, licensed professionals within our
            partner network.
          </p>

          <p>
            When you submit an inquiry through our platform, your information is used only to:
          </p>
          <ul>
            <li>Assess your situation for appropriate specialist matching</li>
            <li>Coordinate with licensed partners in your area</li>
            <li>Facilitate communication between you and specialist partners</li>
          </ul>

          <h2>Referral Model</h2>
          <p>
            Critter Getter operates on a referral revenue model. Licensed specialists in our network pay us
            referral fees for qualified leads we provide. This means:
          </p>
          <ul>
            <li>
              <strong>No Direct Charges to You:</strong> You do not pay us to submit your information. You only
              pay the licensed specialist for services rendered.
            </li>
            <li>
              <strong>Aligned Incentives:</strong> We benefit when we connect you with quality specialists, so we're
              motivated to make good matches.
            </li>
            <li>
              <strong>Specialist Accountability:</strong> All specialists are independently licensed and insured,
              holding their own professional liability.
            </li>
          </ul>

          <h2>Privacy & Data Protection</h2>
          <p>
            Your information is handled with care and used only for the purposes described above. We do not sell
            your data to third parties beyond our licensed specialist network. For full details, please review our{' '}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>

          <h2>Questions?</h2>
          <p>
            If you have questions about how we operate, our licensing, or how we match specialists to leads,
            please don't hesitate to contact us. Transparency is fundamental to how we serve you.
          </p>

          <div className="cta-group">
            <p>
              Ready to get your situation assessed by a licensed professional?
            </p>
            <Link href="/residential" className="btn btn-primary">
              Request a Residential Assessment
            </Link>
            <Link href="/enterprise" className="btn btn-primary">
              Request a Facility Assessment
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
