import Link from 'next/link';

export const metadata = {
  title: 'Service Areas | Austin & Central Texas | SiteShield',
  description: 'SiteShield connects you with licensed wildlife control specialists throughout Austin, Central Texas, and surrounding communities. View our coverage areas.',
  keywords: [
    'Austin pest control', 'Central Texas wildlife exclusion',
    'Round Rock bird control', 'Cedar Park wildlife removal',
    'Pflugerville pest management', 'Kyle exclusion services',
    'Leander animal control', 'Buda wildlife specialists',
    'Dripping Springs pest control', 'Bastrop exclusion',
    'Lockhart wildlife control', 'Hutto pest management',
    'Weir animal removal', 'Blanco wildlife services',
  ],
};

export default function ServiceAreas() {
  const areas = [
    { name: 'Austin', description: 'Capital city and metro core' },
    { name: 'Round Rock', description: 'North metro technology hub' },
    { name: 'Cedar Park', description: 'Northwest Austin suburbs' },
    { name: 'Pflugerville', description: 'Northeast growth corridor' },
    { name: 'Leander', description: 'North central communities' },
    { name: 'Kyle', description: 'South Austin expanding area' },
    { name: 'Buda', description: 'Southeast suburbs' },
    { name: 'Dripping Springs', description: 'Gateway to the Hill Country' },
    { name: 'Del Valle', description: 'Southeast Austin area' },
    { name: 'Blanco', description: 'North central Hill Country' },
    { name: 'Lockhart', description: 'South Central Texas' },
    { name: 'Bastrop', description: 'East central region' },
    { name: 'Hutto', description: 'Northeast commuter area' },
    { name: 'Elgin', description: 'East central corridor' },
    { name: 'Lago Vista', description: 'North Lake Travis area' },
    { name: 'Burnet', description: 'Far north Hill Country' },
    { name: 'Weir', description: 'East metro region' },
    { name: 'Walburg', description: 'Northeast frontier' },
    { name: 'Luling', description: 'Southeast industrial' },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Service Areas & Coverage</h1>
        <p>
          SiteShield connects property owners with licensed wildlife exclusion and pest management specialists throughout Austin, Central Texas, and surrounding communities within 50 miles of the Austin metro area.
        </p>
      </div>

      <section className="content-section" style={{ gridTemplateColumns: '1fr' }}>
        <article>
          <h2>Austin Metro & Core Service Areas</h2>
          <p>
            We maintain our strongest specialist network in and around Austin, servicing the capital region and immediate surrounding municipalities. Whether you own residential property in central Austin or manage commercial facilities in the growing suburbs, our licensed professionals are ready to help.
          </p>

          <div
            className="service-grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
          >
            {areas.map((area) => (
              <div key={area.name} className="service-card">
                <h3>{area.name}</h3>
                <p>{area.description}</p>
                <ul className="service-features" aria-hidden>
                  <li>Residential</li>
                  <li>Commercial</li>
                  <li>Enterprise</li>
                </ul>
              </div>
            ))}
          </div>

          <section className="how-it-works" style={{ marginTop: 'var(--spacing-3xl)' }}>
            <h2>How Service Area Coverage Works</h2>
            <p>
              SiteShield operates as a coordination platform connecting property owners with independent, licensed wildlife exclusion and pest management professionals. Our coverage area includes all communities within the Austin metro region and surrounding Central Texas areas.
            </p>

            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Submit Your Request</h3>
                <p>
                  Complete an assessment request for your specific property type and wildlife issue. Tell us your location and what you're experiencing.
                </p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>We Connect You</h3>
                <p>
                  We coordinate with qualified specialists in your area who have experience with your specific situation and local regulations.
                </p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Professional Service</h3>
                <p>
                  Licensed specialists contact you directly to discuss solutions, provide estimates, and implement exclusion or prevention services.
                </p>
              </div>
            </div>
          </section>

          <section className="compliance-statement">
            <h2>About Our Service Model</h2>
            <p>
              SiteShield is a referral and coordination platform—not a service provider. We do not perform wildlife removal, exclusion, or pest control services directly. Instead, we facilitate connections between property owners and independent, licensed wildlife control specialists and vertebrate pest management professionals in your area.
            </p>
            <p>
              All professionals in our network maintain their own insurance, licensure, and comply with local, state, and federal wildlife regulations. When you submit an assessment request, we work to match you with the most qualified specialist for your specific situation and location.
            </p>
          </section>

          <h2>Specialty Services by Area</h2>
          <p>
            Different regions within our coverage area have unique wildlife challenges based on local ecosystems, building styles, and commercial operations:
          </p>

          <ul className="features">
            <li>
              <strong>Residential Properties:</strong> Austin neighborhoods, suburban homes, and rural properties dealing with squirrels, raccoons, birds, bats, and other wildlife
            </li>
            <li>
              <strong>Commercial & Industrial:</strong> Warehouses, distribution centers, manufacturing facilities, and logistics operations requiring bird exclusion and rodent prevention
            </li>
            <li>
              <strong>Infrastructure:</strong> Electrical substations, utility facilities, and communications infrastructure across Central Texas requiring specialized bird and wildlife management
            </li>
            <li>
              <strong>Agricultural & Rural:</strong> Farmland, ranches, and rural operations in extended coverage areas needing wildlife exclusion and prevention strategies
            </li>
            <li>
              <strong>Compliance-Driven:</strong> FDA/USDA facilities, food handling operations, and regulated properties requiring documented pest prevention solutions
            </li>
          </ul>

          <h2>Coverage Area Boundaries</h2>
          <p>
            Our primary service area extends approximately 50 miles from downtown Austin, encompassing the greater Austin metro and Central Texas region. This includes:
          </p>

          <ul style={{ marginBottom: 'var(--spacing-lg)', paddingLeft: 'var(--spacing-lg)' }}>
            <li>North: Burnet, Walburg, Lago Vista, Leander</li>
            <li>Northeast: Pflugerville, Hutto, Weir</li>
            <li>East: Elgin, Bastrop</li>
            <li>Southeast: Lockhart, Luling, Kyle</li>
            <li>South: Buda, Dripping Springs, Blanco</li>
            <li>West: Hill Country communities</li>
          </ul>

          <p>
            If your location is near the edge of our coverage area or outside it, please still submit a request. We regularly expand partnerships and may be able to connect you with specialists even in adjacent regions.
          </p>
        </article>
      </section>

      <section className="cta-footer">
        <h2>Ready to Get Started?</h2>
        <p>Find the right licensed specialist for your area and property type.</p>
        <div className="footer-cta">
          <Link href="/residential" className="btn btn-primary btn-lg">
            Residential Assessment
          </Link>
          <Link href="/enterprise" className="btn btn-secondary btn-lg">
            Enterprise Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
