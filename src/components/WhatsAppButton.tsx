'use client';

import Link from "next/link";

interface WhatsAppButtonProps {
  variant?: 'primary' | 'secondary' | 'sticky';
  text?: string;
  className?: string;
}

export default function WhatsAppButton({ 
  variant = 'primary',
  text = 'Chat on WhatsApp',
  className = ''
}: WhatsAppButtonProps) {
  const phoneNumber = '+923089699905'; // Replace with actual WhatsApp number
  const message = encodeURIComponent(
    "Assalamu Alaikum, I want to book a free trial Quran class for my child."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-all rounded-lg whitespace-nowrap';
  
  const variants = {
    primary: `${baseClasses} px-6 py-3 bg-green-600 text-white hover:bg-green-700 active:scale-95`,
    secondary: `${baseClasses} px-6 py-3 bg-white text-green-600 border-2 border-green-600 hover:bg-green-50 active:scale-95`,
    sticky: `${baseClasses} px-4 py-2.5 bg-green-600 text-white shadow-lg hover:bg-green-700 text-sm md:text-base`,
  };

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variants[variant]} ${className}`}
    >
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.649 2.554-2.8 4.244-.151 1.69.29 3.35 1.243 4.689l-1.324 4.84 4.96-1.3c1.231.746 2.605 1.14 4.001 1.142h.004c5.452 0 9.885-4.433 9.885-9.885 0-2.65-1.032-5.139-2.905-7.009C17.534 2.034 15.17.949 12.52.949" />
      </svg>
      {text}
    </Link>
  );
}
