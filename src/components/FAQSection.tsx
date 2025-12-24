"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FAQSection() {
  const faqs = [
    {
      q: "How do I pay with my debit card?",
      a: "After you contact us, we will send you a secure payment link. You can pay using Visa, MasterCard, or Maestro. The process is fully encrypted and safe.",
    },
    {
      q: "Can I get a payment receipt?",
      a: "Yes, a receipt is automatically emailed after successful payment. If you need it sent to another email, just let us know.",
    },
    {
      q: "Is my card information secure?",
      a: "Absolutely. We do not store any card details. All payments are handled securely by trusted payment processors.",
    },
    {
      q: "What if I need help during payment?",
      a: "You can contact us instantly via WhatsApp. Our support team will guide you step by step.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const phoneNumber = "+923089699905";
  const message = encodeURIComponent(
    "Assalamu Alaikum, I need help with payment for Quran classes."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="max-w-5xl mx-auto px-6 py-20" id="faqs">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl sm:text-6xl font-bold !mb-2 leading-tight">
          Frequently Asked <span className="text-green-400">Questions</span>
        </h3>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-xl">
          Everything parents need to know about payments, security, and support.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((f, idx) => {
          const open = openIndex === idx;

          return (
            <div
              key={idx}
              className="border border-green-400 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(open ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-base md:text-xl text-gray-900">
                  {f.q}
                </span>

                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-green-400"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="px-5 pb-5"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* WhatsApp CTA */}
      <div className="mt-10 text-center">
        <Link
          href={whatsappUrl}
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-400 text-white font-semibold hover:bg-green-500 transition"
        >
          Contact Support on WhatsApp
        </Link>
      </div>
    </section>
  );
}
