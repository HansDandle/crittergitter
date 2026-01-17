import type { Metadata } from 'next';
import './globals.css';
import React from 'react';

export const metadata: Metadata = {
  title: 'SiteShield - Wildlife Exclusion Referrals',
  description: 'Connect with licensed wildlife and varmint exclusion specialists.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Connect with licensed wildlife and varmint exclusion specialists." />
        <meta property="og:title" content="SiteShield - Wildlife Exclusion Referrals" />
        <meta property="og:description" content="Professional wildlife exclusion coordination with licensed specialists." />
        <meta name="theme-color" content="#2c5f2d" />
      </head>
      <body>
        <nav className="navigation">
          <div className="nav-container">
            <a href="/" className="logo">
              🛡️ SiteShield
            </a>
            <ul className="nav-links">
              <li>
                <a href="/residential">Residential</a>
              </li>
              <li>
                <a href="/enterprise">Enterprise</a>
              </li>
              <li>
                <a href="/services/warehouse-bird-control">Warehouse Bird Control</a>
              </li>
              <li>
                <a href="/services/substation-bird-control">Substation Control</a>
              </li>
              <li>
                <a href="/services/compliance-pest-management">Compliance</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>SiteShield</h3>
              <p>
                Wildlife exclusion referral platform connecting property owners with licensed specialists.
              </p>
              <p className="legal-notice">
                <strong>Not a licensed operator.</strong> All services provided by independent, licensed professionals.
              </p>
            </div>

            <div className="footer-section">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="/residential">Residential Assessment</a>
                </li>
                <li>
                  <a href="/enterprise">Enterprise Assessment</a>
                </li>
                <li>
                  <a href="/service-areas">Service Areas</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms of Service</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: info@siteshield.com</p>
              <p>Phone: [Your Phone]</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 SiteShield. All rights reserved.</p>
            <p className="disclaimer">
              SiteShield is a referral platform connecting property owners with licensed wildlife specialists.
              We do not perform services directly.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
