import type { Metadata } from 'next';
import './globals.css';
import { PhoneLink } from '@/components/PhoneLink';
import { MobileNav } from '@/components/MobileNav';

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
        <MobileNav />

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
              <p>Phone: <PhoneLink /></p>
            </div>
          </div>

          <div className="footer-compliance">
            <h4>Regulatory Compliance & Disclaimer</h4>
            <p>
              <strong>Licensed Professionals Only:</strong> All wildlife exclusion, animal removal, and pest prevention services are provided exclusively by independent, licensed wildlife control specialists and vertebrate pest management professionals in our network. Each licensed partner maintains their own insurance and licensure.
            </p>
            <p>
              <strong>Important:</strong> We are a coordination and referral platform only—not a licensed wildlife control or pest management operator. We do not perform wildlife removal, exclusion, trapping, control, or prevention services. We do not handle, transport, or deal with animals.
            </p>
            <p>
              When you submit an assessment request, we coordinate with qualified specialists to facilitate referrals. Specialists will contact you directly to discuss your specific situation, scope work, and provide estimates. Learn more: <a href="/about">About Our Service Model</a> | <a href="/privacy">Privacy Policy</a>
            </p>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 SiteShield. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
