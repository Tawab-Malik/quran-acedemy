import Link from "next/link";

export default function PricingSection() {
  const phoneNumber = "+923089699905";
  const message = encodeURIComponent(
    "Assalamu Alaikum, I want to enroll my child in online Quran classes. Please share details about class plans and payment options."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white  rounded-3xl" id="pricing">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-6xl font-bold !mb-2 leading-tight">
          Class Plans & <span className="text-green-500">Payments</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-xl">
          Flexible learning plans designed for Muslim children living abroad.
          Payment details are shared personally to ensure clarity and trust.
        </p>
      </div>

      {/* Information Cards */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <div className="border border-green-200 rounded-2xl p-5 text-center">
          <p className="text-lg font-semibold text-gray-900">
            Flexible Class Plans
          </p>
          <p className="text-base text-gray-500 mt-2">
            Customized lesson schedules based on age, level, and learning goals.
          </p>
        </div>

        <div className="border-2 border-green-400 rounded-2xl p-5 text-center bg-green-50">
          <p className="text-lg font-semibold text-gray-900">
            Secure Payments
          </p>
          <p className="text-base text-gray-500 mt-2">
            International debit card payments supported through trusted gateways.
          </p>
        </div>

        <div className="border border-green-200 rounded-2xl p-5 text-center">
          <p className="text-lg font-semibold text-gray-900">
            Personal Assistance
          </p>
          <p className="text-base text-gray-500 mt-2">
            Our team guides parents step-by-step during enrollment and payment.
          </p>
        </div>
      </div>

      {/* Payment Info */}
      <p className="text-gray-600 text-sm leading-relaxed mb-8 text-center max-w-3xl mx-auto">
        We offer personalized guidance for class plans and accept secure debit
        card payments (Visa, MasterCard, Maestro). All transactions are encrypted
        and receipts are provided after successful enrollment. Final details are
        confirmed after direct contact.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href={whatsappUrl}
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
        >
          Contact on WhatsApp for Details
        </Link>
      </div>
    </section>
  );
}
