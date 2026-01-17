import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Bird Exclusion Systems & Prevention | Commercial & Residential',
  description:
    'Professional bird exclusion systems and bird netting for warehouses, manufacturing, and commercial facilities. Licensed specialists assess and implement bird control solutions.',
};

export default function BirdExclusionPage() {
  return (
    <main className="page-container">
      <div className="page-header">
        <h1>Bird Exclusion Systems & Bird Control Solutions</h1>
        <p>
          Birds cause significant damage to commercial facilities, manufacturing plants, and warehouses. We coordinate with licensed specialists who design and implement bird exclusion systems, netting, and deterrent solutions tailored to your facility.
        </p>
      </div>

      <section className="content-section">
        <div className="image-gallery" style={{ margin: '2rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <Image
            src="/images/birdnet.jpg"
            alt="Bird netting on warehouse"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/bird-netting-under-canopy.webp"
            alt="Bird exclusion netting under canopy structure"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/bird-net-eaves.jpg"
            alt="Bird netting at eaves and roofline"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/birdnetting2.jpg"
            alt="Bird exclusion system installation"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/birdnets-substation.jpg"
            alt="Professional bird netting solution for industrial"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/images/birdnet3.webp"
            alt="Commercial bird control netting system"
            width={300}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className="info-panel">
          <h2>Why Bird Exclusion Matters</h2>
          <ul>
            <li><strong>Facility Damage:</strong> Bird droppings corrode equipment, contaminate products, and damage structural elements.</li>
            <li><strong>Health & Compliance:</strong> Birds carry pathogens affecting health code compliance and employee safety.</li>
            <li><strong>Sanitation Issues:</strong> Nesting and roosting create food contamination risks in warehouses and food service.</li>
            <li><strong>Long-Term Prevention:</strong> Professional exclusion systems prevent recurring infestations.</li>
          </ul>

          <h2>Bird Exclusion Solutions</h2>
          <ul>
            <li>Netting systems for warehouses, loading docks, and manufacturing areas</li>
            <li>Perimeter bird control and structural modifications</li>
            <li>Dome/ridge vent exclusion</li>
            <li>High-frequency deterrent systems</li>
            <li>Inspection and assessment for vulnerabilities</li>
          </ul>

          <h2>Facility Types Served</h2>
          <ul>
            <li>Industrial warehouses and distribution centers</li>
            <li>Manufacturing and processing plants</li>
            <li>Dock areas and loading facilities</li>
            <li>Commercial retail and office buildings</li>
            <li>Agricultural operations</li>
          </ul>

          <div className="cta-box">
            <h3>Need a Bird Exclusion Assessment?</h3>
            <p>We coordinate with licensed vertebrate pest management specialists experienced in bird exclusion systems.</p>
            <Link href="/enterprise" className="btn btn-primary">
              Request Enterprise Assessment
            </Link>
          </div>

          <div className="compliance-note">
            <p>
              <strong>Our Role:</strong> We coordinate assessments with licensed wildlife exclusion specialists. All bird control, exclusion systems, and prevention work are performed by independent, licensed professionals. We do not perform services directly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
