import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms of Service | SiteShield',
  description: 'Terms of Service for SiteShield wildlife exclusion referral platform.',
};

export default function TermsPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Terms of Service</h1>
        <p>Last Updated: January 2025</p>
      </div>

      <section className="content-section">
        <article>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using SiteShield (the "Platform"), you agree to be bound by these Terms of Service.
            If you do not agree to any part of these terms, do not use the Platform.
          </p>

          <h2>2. Platform Description</h2>
          <p>SiteShield is a <strong>referral platform only</strong>. We:</p>
          <ul>
            <li>Collect information about wildlife issues</li>
            <li>Connect you with independent, licensed wildlife specialists</li>
            <li>Do <strong>NOT</strong> perform wildlife control, removal, or exclusion services ourselves</li>
          </ul>

          <h2>3. We Are Not a Licensed Operator</h2>
          <p>
            <strong>Critical Disclosure</strong>: SiteShield is <strong>NOT</strong> a licensed pest control
            operator, wildlife removal service, or animal control agency.
          </p>
          <ul>
            <li>We do not hold licenses from any state or local authority for wildlife control or removal</li>
            <li>We do not perform any physical services</li>
            <li>We do not guarantee outcomes or results</li>
            <li>All services are provided exclusively by independent, licensed specialists</li>
          </ul>

          <h2>4. Specialist Partners</h2>

          <h3>Licensed & Independent</h3>
          <ul>
            <li>All specialists in our network are independently licensed in their respective jurisdictions</li>
            <li>Specialists maintain their own professional liability insurance</li>
            <li>Specialists are responsible for their own compliance with local regulations</li>
          </ul>

          <h3>No Endorsement or Guarantee</h3>
          <ul>
            <li>Partnership with SiteShield does not imply endorsement of quality</li>
            <li>We do not guarantee specialist availability, response time, or service quality</li>
            <li>You are responsible for verifying specialist credentials and qualifications</li>
          </ul>

          <h2>5. Your Responsibilities</h2>

          <h3>Accurate Information</h3>
          <ul>
            <li>You agree to provide truthful, accurate information in all forms</li>
            <li>Providing false information may result in account termination</li>
            <li>You are responsible for the accuracy of your property details</li>
          </ul>

          <h3>Communication</h3>
          <ul>
            <li>You authorize specialists to contact you using your provided contact information</li>
            <li>You agree to respond to specialist inquiries in a timely manner</li>
            <li>You understand specialists operate independently and set their own schedules</li>
          </ul>

          <h2>6. Limitation of Liability</h2>

          <h3>No Direct Services</h3>
          <p>
            SiteShield provides <strong>no services</strong> related to wildlife control, removal, exclusion, or
            treatment. Therefore, we assume no liability for:
          </p>
          <ul>
            <li>Wildlife-related injuries or property damage</li>
            <li>Service quality or timeliness</li>
            <li>Outcome of work performed by specialists</li>
            <li>Misrepresentation by specialists</li>
          </ul>

          <h3>Warranty Disclaimer</h3>
          <p>
            THE PLATFORM IS PROVIDED "AS-IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT:
          </p>
          <ul>
            <li>Availability or reliability of the platform</li>
            <li>Fitness for a particular purpose</li>
            <li>Absence of errors or defects</li>
            <li>That your information will result in specialist matching</li>
          </ul>

          <h3>Liability Cap</h3>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, SITESHIELD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR DATA.
          </p>
          <p>Our total liability shall not exceed the amount you paid us (if any).</p>

          <h2>7. Indemnification</h2>
          <p>You agree to indemnify and hold harmless SiteShield from any claims, damages, or costs arising from:</p>
          <ul>
            <li>Your use of the platform</li>
            <li>Breach of these terms</li>
            <li>Your violation of applicable laws</li>
            <li>Your interactions with specialist partners</li>
          </ul>

          <h2>8. Intellectual Property</h2>
          <ul>
            <li>All content on the Platform is owned by or licensed to SiteShield</li>
            <li>You may not reproduce, modify, or distribute content without permission</li>
            <li>Specialist information remains the property of individual specialists</li>
          </ul>

          <h2>9. Prohibited Uses</h2>
          <p>You agree <strong>not</strong> to:</p>
          <ul>
            <li>Provide false or misleading information</li>
            <li>Impersonate another person or entity</li>
            <li>Submit spam or malicious content</li>
            <li>Attempt to access the platform through unauthorized means</li>
            <li>Reverse-engineer or attempt to bypass security measures</li>
            <li>Violate any applicable laws</li>
          </ul>

          <h2>10. User Content</h2>
          <p>By submitting information through the Platform:</p>
          <ul>
            <li>You grant SiteShield a license to use, store, and share your information with specialist partners</li>
            <li>You represent that you own or have rights to the information you provide</li>
            <li>You agree that information may be used to improve our matching process</li>
          </ul>

          <h2>11. Termination</h2>
          <p>We may terminate your access to the Platform if you:</p>
          <ul>
            <li>Violate these Terms of Service</li>
            <li>Provide false or fraudulent information</li>
            <li>Engage in abusive behavior</li>
            <li>Violate applicable laws</li>
          </ul>

          <h2>12. Confidentiality</h2>
          <p>We will keep your personal information confidential. However:</p>
          <ul>
            <li>We share information with specialist partners for matching purposes</li>
            <li>We may disclose information if required by law</li>
            <li>We do not share information with non-specialist third parties</li>
          </ul>
          <p>
            See our <Link href="/privacy">Privacy Policy</Link> for complete details.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of your jurisdiction, without
            regard to its conflict of law principles.
          </p>

          <h2>14. Contact</h2>
          <p>For questions regarding these Terms of Service:</p>
          <ul>
            <li>Email: legal@siteshield.com</li>
            <li>Mailing Address: [Your Address]</li>
          </ul>

          <div className="compliance-note">
            <p>
              <strong>ACKNOWLEDGMENT</strong>: By using SiteShield, you acknowledge that you have read and
              understood these Terms of Service, and that you understand SiteShield does not perform services
              directly but operates exclusively as a referral platform connecting you with independent, licensed
              specialists.
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
