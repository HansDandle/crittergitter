'use client';

import { useState } from 'react';
import Link from 'next/link';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link href="/" className="logo" onClick={closeMenu}>
          🛡️ SiteShield
        </Link>
        
        <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
          <li>
            <Link href="/residential" onClick={closeMenu}>Residential</Link>
          </li>
          <li>
            <Link href="/enterprise" onClick={closeMenu}>Enterprise</Link>
          </li>
          <li>
            <Link href="/services/warehouse-bird-control" onClick={closeMenu}>Warehouse Bird Control</Link>
          </li>
          <li>
            <Link href="/services/substation-bird-control" onClick={closeMenu}>Substation Control</Link>
          </li>
          <li>
            <Link href="/services/compliance-pest-management" onClick={closeMenu}>Compliance</Link>
          </li>
          <li>
            <Link href="/blog" onClick={closeMenu}>Blog</Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
