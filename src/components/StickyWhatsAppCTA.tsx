'use client';
import
  Link from "next/link";
import Image from "next/image";
interface StickyWhatsAppCTAProps {
  show?: boolean;
}

import WhatsAppButton from './WhatsAppButton';

export default function StickyWhatsAppCTA({ show = true }: StickyWhatsAppCTAProps) {
  if (!show) return null;
  const phoneNumber = '+923089699905'; // Replace with actual WhatsApp number
  const message = encodeURIComponent(
    "Assalamu Alaikum, I want to book a free trial Quran class for my child."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <div className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8">
      <div className="animate-bounce">
        <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Image
        src="/images/whatsapp.png"
        alt="WhatsApp Icon"
        width={90}
        height={90}
      />
      {/* {text} */}
    </Link>
      </div>
    </div>
  );
}
