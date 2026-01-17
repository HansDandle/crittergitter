import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Attic Wildlife Removal & Animal Exclusion | Professional Specialists',
  description:
    'Attic wildlife removal and animal exclusion services. Licensed specialists remove squirrels, raccoons, bats, and rodents from attics and implement exclusion systems to prevent return.',
};

export default function AtticWildlifeRemovalPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Attic Wildlife Removal & Exclusion</h1>
        <p>
          Attics provide shelter for squirrels, raccoons, bats, rats, and other wildlife. Beyond the immediate problem, infestations cause insulation damage, contamination, and structural damage. Professional removal followed by exclusion prevents recurrence. We coordinate with licensed specialists who handle animal removal humanely and implement permanent exclusion systems.
        </p>
      </div>

      <section className="content-section">
        <div className="info-panel">
          <h2>Common Attic Wildlife Problems</h2>
          <ul>
            <li><strong>Squirrels:</strong> Damage insulation, chew wiring, create fire hazards, scratch and run in walls creating noise disturbances.</li>
            <li><strong>Raccoons:</strong> Tear apart insulation for nesting, leave droppings creating disease risk, damage roof and soffit access points.</li>
            <li><strong>Bats:</strong> Create health risks through guano accumulation, may carry rabies, require humane exclusion approaches.</li>
            <li><strong>Rats & Mice:</strong> Contaminate insulation and stored items, chew wiring creating fire hazards, create odor and disease concerns.</li>
            <li><strong>Other Wildlife:</strong> Opossums, squirrel flying types, and other animals seeking warm shelter in attic spaces.</li>
          </ul>

          <h2>The Removal & Exclusion Process</h2>
          <ol>
            <li><strong>Inspection:</strong> Licensed specialist identifies animal type, entry points, extent of damage, and nesting areas.</li>
            <li><strong>Removal:</strong> Humane removal or one-way door exclusion to safely remove animals without harming them.</li>
            <li><strong>Cleanup & Decontamination:</strong> Remove droppings, contaminated insulation, and decontaminate affected areas.</li>
            <li><strong>Entry Point Sealing:</strong> Seal all entry points with heavy materials to prevent re-entry.</li>
            <li><strong>Damage Repair:</strong> Restore insulation, repair structural damage, address any wiring issues.</li>
            <li><strong>Verification:</strong> Follow-up inspection ensures exclusion integrity and no remaining animals.</li>
          </ol>

          <h2>Why Professional Attic Wildlife Removal Matters</h2>
          <ul>
            <li><strong>Health & Safety:</strong> Proper handling of animal droppings and contamination reduces disease risk.</li>
            <li><strong>Humane Approach:</strong> Licensed specialists use methods that don't harm animals while eliminating problems.</li>
            <li><strong>Permanent Solutions:</strong> Exclusion prevents costly recurring infestations and damage.</li>
            <li><strong>Liability Protection:</strong> Licensed professionals carry insurance and follow regulations.</li>
            <li><strong>Property Damage Prevention:</strong> Proper removal and exclusion prevent wiring damage, insulation loss, and structural harm.</li>
          </ul>

          <h2>Warning Signs of Attic Animals</h2>
          <ul>
            <li>Scratching, running, or movement sounds in attic or walls</li>
            <li>Odors (urine, feces, or dead animal smell)</li>
            <li>Visible entry holes or damaged soffit/fascia</li>
            <li>Droppings or nesting material visible</li>
            <li>Damage to insulation or stored items</li>
            <li>Daytime or nighttime animal activity around roof line</li>
          </ul>

          <div className="cta-box">
            <h3>Get Professional Attic Assessment</h3>
            <p>Describe what you've noticed. A licensed specialist will assess the situation and discuss humane removal and exclusion options.</p>
            <Link href="/residential" className="btn btn-primary btn-lg">
              Request Residential Assessment
            </Link>
          </div>

          <div className="compliance-note">
            <p>
              <strong>Our Role:</strong> We coordinate assessments with licensed wildlife specialists experienced in humane animal removal and attic exclusion. All removal, exclusion, cleanup, and repair work are performed by independent, licensed professionals. We do not perform services directly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
