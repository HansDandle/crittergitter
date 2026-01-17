import type { Metadata } from 'next';
import './globals.css';
import React from 'react';

export const metadata: Metadata = {
  title: 'Critter Getter - Wildlife Exclusion Referrals',
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
        <meta property="og:title" content="Critter Getter - Wildlife Exclusion Referrals" />
        <meta property="og:description" content="Professional wildlife exclusion coordination with licensed specialists." />
        <meta name="theme-color" content="#2c5f2d" />
      </head>
      <body>
        <nav className="navigation">
          <div className="nav-container">
            <a href="/" className="logo">
              🦌 Critter Getter
            </a>
            <ul className="nav-links">
              <li>
                <a href="/residential">Residential</a>
              </li>
              <li>
                <a href="/enterprise">Enterprise</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/privacy">Privacy</a>
              </li>
            </ul>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Critter Getter</h3>
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
              <p>Email: info@crittergetter.com</p>
              <p>Phone: [Your Phone]</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Critter Getter. All rights reserved.</p>
            <p className="disclaimer">
              Critter Getter is a referral platform connecting property owners with licensed wildlife specialists.
              We do not perform services directly.
            </p>
          </div>
        </footer>

        <style jsx>{`
          .navigation {
            background: var(--color-dark);
            color: white;
            padding: var(--spacing-md) 0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--spacing-xl);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            font-size: var(--font-size-xl);
            font-weight: 700;
            color: white;
            text-decoration: none;
          }

          .logo:hover {
            color: #ddd;
          }

          .nav-links {
            list-style: none;
            display: flex;
            gap: var(--spacing-lg);
          }

          .nav-links a {
            color: white;
            text-decoration: none;
            transition: color var(--transition);
          }

          .nav-links a:hover {
            color: #ddd;
            text-decoration: underline;
          }

          .footer {
            background: var(--color-dark);
            color: #ccc;
            padding: var(--spacing-2xl) var(--spacing-xl);
            margin-top: var(--spacing-2xl);
          }

          .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: var(--spacing-2xl);
            margin-bottom: var(--spacing-2xl);
          }

          .footer-section h3,
          .footer-section h4 {
            color: white;
            margin-bottom: var(--spacing-md);
          }

          .footer-section p {
            margin-bottom: var(--spacing-sm);
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .footer-section ul {
            list-style: none;
          }

          .footer-section ul li {
            margin-bottom: var(--spacing-sm);
          }

          .footer-section a {
            color: #aaa;
          }

          .footer-section a:hover {
            color: white;
          }

          .legal-notice {
            background: rgba(255, 193, 7, 0.1);
            padding: var(--spacing-md);
            border-left: 3px solid #ffc107;
            margin-top: var(--spacing-md);
            font-size: 0.85rem;
          }

          .footer-bottom {
            border-top: 1px solid #444;
            padding-top: var(--spacing-lg);
            text-align: center;
            font-size: 0.9rem;
          }

          .disclaimer {
            color: #999;
            font-size: 0.8rem;
            margin-top: var(--spacing-sm);
          }

          @media (max-width: 768px) {
            .nav-container {
              flex-direction: column;
              gap: var(--spacing-lg);
            }

            .nav-links {
              flex-direction: column;
              gap: var(--spacing-md);
              text-align: center;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
