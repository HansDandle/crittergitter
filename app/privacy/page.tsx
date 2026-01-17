import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy | SiteShield',
  description: 'Privacy policy for SiteShield wildlife exclusion referral platform.',
};

export default function PrivacyPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Privacy Policy</h1>
        <p>Last Updated: January 2025</p>
      </div>

      <section className="content-section">
        <article>
          <h2>Overview</h2>
          <p>
            SiteShield ("we," "us," "our") operates a wildlife exclusion referral platform. This Privacy Policy
            explains how we collect, use, and protect your information.
          </p>

          <h2>Information We Collect</h2>

          <h3>Form Data</h3>
          <p>When you submit a residential or enterprise assessment form, we collect:</p>
          <ul>
            <li>Name, email address, phone number</li>
            <li>Property address (street, city, state, ZIP)</li>
            <li>Wildlife issue details</li>
            <li>Preferred contact method</li>
          </ul>

          <h3>Technical Data</h3>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited</li>
            <li>Form submission timestamps</li>
          </ul>

          <h2>How We Use Your Information</h2>

          <h3>Primary Purpose</h3>
          <ul>
            <li>
              <strong>Specialist Matching</strong>: To connect you with licensed wildlife specialists suited to your
              needs
            </li>
            <li>
              <strong>Lead Coordination</strong>: To facilitate communication between you and specialist partners
            </li>
            <li>
              <strong>Service Delivery</strong>: To enable specialists to contact you and provide assessments
            </li>
          </ul>

          <h3>Secondary Purposes</h3>
          <ul>
            <li>Improving our referral matching process</li>
            <li>Analyzing usage patterns</li>
            <li>Preventing fraud and abuse</li>
          </ul>

          <h2>Sharing Your Information</h2>

          <h3>With Licensed Specialists</h3>
          <p>
            We share your assessment information with independent, licensed wildlife specialists in our partner network
            who:
          </p>
          <ul>
            <li>Are licensed in their respective jurisdictions</li>
            <li>Have professional liability insurance</li>
            <li>Have agreed to our data handling terms</li>
          </ul>

          <h3>With Consent</h3>
          <p>We will not share your information beyond our specialist network without your explicit consent.</p>

          <h3>Legal Requirements</h3>
          <p>We may disclose information if required by law or legal process.</p>

          <h2>Data Retention</h2>
          <ul>
            <li>
              <strong>Active Leads</strong>: Retained for 12 months for coordination purposes
            </li>
            <li>
              <strong>Archived Leads</strong>: Deleted after 3 years unless legally required to retain
            </li>
            <li>
              <strong>Technical Logs</strong>: Retained for 90 days
            </li>
          </ul>

          <h2>Data Security</h2>
          <ul>
            <li>HTTPS encryption for all data transmission</li>
            <li>Parameterized database queries to prevent injection</li>
            <li>Access limited to authorized personnel only</li>
            <li>No credit card or sensitive financial data collected</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>
              <strong>Access</strong>: Request a copy of your data
            </li>
            <li>
              <strong>Deletion</strong>: Request removal of your information (subject to legal holds)
            </li>
            <li>
              <strong>Correction</strong>: Request corrections to inaccurate data
            </li>
          </ul>

          <p>To exercise these rights, contact us at privacy@siteshield.com.</p>

          <h2>California Privacy Rights (CCPA)</h2>
          <p>California residents have additional rights:</p>
          <ul>
            <li>Right to know what personal information is collected</li>
            <li>Right to know whether your personal information is sold or disclosed</li>
            <li>Right to delete personal information</li>
            <li>Right to opt-out of the sale of your personal information</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our platform is not intended for individuals under 18 years old. We do not knowingly collect information
            from children.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their privacy practices.
            Review their privacy policies separately.
          </p>

          <h2>Policy Changes</h2>
          <p>
            We may update this Privacy Policy periodically. Changes become effective upon posting. We will notify you of
            material changes by email or prominent website notice.
          </p>

          <h2>Contact Us</h2>
          <p>For privacy questions or to exercise your rights:</p>
          <ul>
            <li>Email: privacy@siteshield.com</li>
            <li>Mailing Address: [Your Address]</li>
          </ul>

          <div className="compliance-note">
            <p>
              <strong>Data Protection Notice</strong>: We comply with applicable privacy laws including GDPR (where
              applicable) and CCPA. All data subjects have the right to lodge a complaint with their local data
              protection authority.
            </p>
          </div>

          <div className="cta-group">
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
