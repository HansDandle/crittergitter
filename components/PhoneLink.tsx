'use client';

import { useEffect, useState } from 'react';

interface PhoneLinkProps {
  className?: string;
}

// Phone number parts are separated to prevent simple regex scraping
const PHONE_PARTS = ['512', '418', '6881'];

export function PhoneLink({ className }: PhoneLinkProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render on client side to prevent bots from seeing the number in SSR HTML
  if (!mounted) {
    return <span className={className}>Call for assistance</span>;
  }

  const phoneNumber = PHONE_PARTS.join('-');
  const phoneDisplay = `(${PHONE_PARTS[0]}) ${PHONE_PARTS[1]}-${PHONE_PARTS[2]}`;
  const telHref = `tel:${phoneNumber}`;

  return (
    <a href={telHref} className={className}>
      {phoneDisplay}
    </a>
  );
}

export function PhoneText({ className }: PhoneLinkProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={className}>Call for assistance</span>;
  }

  const phoneDisplay = `(${PHONE_PARTS[0]}) ${PHONE_PARTS[1]}-${PHONE_PARTS[2]}`;

  return <span className={className}>{phoneDisplay}</span>;
}
