import type { Metadata } from 'next';
import { ResidentialForm } from '@/components/ResidentialForm';
import React from 'react';

export const metadata: Metadata = {
  title: 'Request Wildlife Assessment | Critter Getter',
  description:
    'Connect with licensed wildlife specialists for residential wildlife issues. Serving squirrels, raccoons, rats, bats, and more.',
};

export default function ResidentialPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Wildlife Issue Assessment</h1>
        <p>
          We connect you with licensed professionals in your area to assess and address residential wildlife issues.
        </p>
      </div>

      <section className="content-section">
        <div className="form-container">
          <ResidentialForm />
        </div>

        <aside className="info-panel">
          <h2>Why Choose This Path?</h2>
          <ul>
            <li>
              <strong>Fast Assessment:</strong> Licensed specialists evaluate your specific situation.
            </li>
            <li>
              <strong>Coordinated Solution:</strong> We connect you with qualified professionals in your area.
            </li>
            <li>
              <strong>Transparent Pricing:</strong> Get estimates before work begins.
            </li>
            <li>
              <strong>Prevention Focus:</strong> Specialists help identify and seal entry points.
            </li>
          </ul>

          <h3>Common Issues We Help With</h3>
          <ul>
            <li>Squirrels in attics and walls</li>
            <li>Raccoons on roofs and decks</li>
            <li>Rats in basements and crawl spaces</li>
            <li>Bat exclusions and prevention</li>
            <li>Other residential wildlife concerns</li>
          </ul>

          <div className="compliance-note">
            <p>
              <strong>Note:</strong> All services are provided by independent, licensed professionals.
              We do not perform services directly but coordinate assessments and specialist referrals.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
