import Link from "next/link";

export default function Footer() {
  const phoneNumber = '+923089699905'; // Replace with actual WhatsApp number
  const message = encodeURIComponent(
    "Assalamu Alaikum, I want to book a free trial Quran class for my child."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const QuickLinks=[
    {
      name: 'Free Trial',
      href: '#cta',
    },
    {
      name: 'About Teacher',
      href: '#about', 
    },
    {
      name: 'Curriculum',
      href: '#curriculum',
    },
    {
      name: 'Pricing',
      href: '#pricing',
    },
    {
      name: 'FAQs',
      href: '#faqs',
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 !mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3! mb-4">
              <div className="text-4xl">🕌</div>
              <h3 className="text-2xl font-bold text-white">Quran Academy</h3>
            </div>
            <p className="text-lg mb-2">Online Quran Classes via Zoom</p>
            <p className="text-gray-400 !mb-6">
              Empowering Muslim children with Islamic education
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white !mb-6">Quick Links</h4>
            <ul className="!space-y-3">
              {QuickLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-gray-400 hover:text-green-400 transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h4 className="text-xl font-bold text-white !mb-6">
              Serving Muslim Students Worldwide
            </h4>

            <div className="space-y-2 !mb-8">
              {[
                'United Kingdom (UK)',
                'United States (USA)',
                'Canada',
                'Germany',
                'Other European & International Countries',
              ].map((area, idx) => (
                <p key={idx} className="text-gray-400">
                  ✓ {area}
                </p>
              ))}
            </div>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 hover:shadow-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.649 2.554-2.8 4.244-.151 1.69.29 3.35 1.243 4.689l-1.324 4.84 4.96-1.3c1.231.746 2.605 1.14 4.001 1.142h.004c5.452 0 9.885-4.433 9.885-9.885 0-2.65-1.032-5.139-2.905-7.009C17.534 2.034 15.17.949 12.52.949" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 !pt-8">
          <div className="grid md:grid-cols-2 gap-6 !mb-6">
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white !mb-2">Safe & Secure</p>
              <p>✓ Verified Teacher  |  ✓ Secure Zoom  |  ✓ Privacy Protected</p>
            </div>
            <div className="text-right text-sm text-gray-400">
              <p className="font-semibold text-white !mb-2">Certifications</p>
              <p>Hafiz-e-Quran Certified  |  Professional Educator</p>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 pt-6">
            <p>© 2025 Quran Academy. All rights reserved.</p>
            <p className="mt-2">Islamic Education for Young Learners | Online Classes for Foreign Muslim Students</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
