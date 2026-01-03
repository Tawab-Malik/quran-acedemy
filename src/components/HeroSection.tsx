import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton';
import Link from 'next/link';

export default function HeroSection() {
    const phoneNumber = '+923089699905'; // Replace with actual WhatsApp number
    const message = encodeURIComponent(
        "Assalamu Alaikum, I want to book a free trial Quran class for my child."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    return (
        <section id="hero" className="relative md:-mt-20 min-h-screen bg-[url('/images/herobg.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 px-4 sm:px-6 lg:px-8 pb-20 overflow-hidden">
            
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

            <div className="relative max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left animate-fade-in">
                        <div className="inline-block mb-6 px-4 py-2 bg-green-100 rounded-full border border-green-300">
                            <span className="text-green-700 font-semibold text-sm">✨ Trusted by 500+ Families</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 md:!mb-6 leading-tight">
                            Quran Classes for <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Your Child</span>
                        </h1>

                        <h2 className="text-xl sm:text-3xl text-green-600 font-semibold mb-3 md:mb-6 leading-relaxed">
                            Learn with a Certified Hafiz-e-Quran
                        </h2>

                        <p className="text-lg text-gray-600 !mb-8 leading-relaxed max-w-xl">
                            High-quality online Quran education for Muslim children across the
                            <span className="font-semibold"> UK, USA, Canada, Europe & other countries</span>. Qualified teachers, flexible timings, and a secure learning experience. Begin with a
                            <span className="font-bold text-green-600"> free 3-day trial</span>.
                        </p>


                        <div className="flex flex-col sm:flex-row gap-4 !mb-8 justify-center lg:justify-start">
                            <WhatsAppButton
                                variant="primary"
                                text="🚀 Start Free Trial"
                                className="px-8 py-4 text-lg"
                            />
                            <Link href={whatsappUrl} className="group text-lg inline-flex items-center justify-center gap-2 !px-8 !py-4 bg-white !text-green-600 !border-2 !border-green-600 font-bold rounded-lg hover:bg-green-50 active:scale-95 transition-all shadow-lg">
                                <span>📹</span> Book Zoom Class
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl text-green-600">✓</span>
                                <span className="!text-gray-900 font-semibold">No Payment Needed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl text-green-600">✓</span>
                                <span className="text-gray-900 font-semibold">Flexible Hours</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl text-green-600">✓</span>
                                <span className="text-gray-900 font-semibold">Certified Hafiz</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Image */}
                    <div className="hidden lg:flex relative h-full items-center justify-center">
                        <div className="relative w-full h-full">
                            {/* Animated gradient card */}
                            {/* <Image
                                src="/images/hero.jpg"
                                alt="Online Quran Classes"
                                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                                height={1500}
                                width={1500}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div> */}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 pt-5">
                    {[
                        { number: '20+', label: 'Happy Families' },
                        { number: '4.9★', label: 'Average Rating' },
                        { number: '5+', label: 'Countries' }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center !p-4 rounded-xl bg-gray-50 border-2 border-green-600/20 hover:bg-green-50 transition-colors">
                            <div className="text-3xl font-bold text-green-600">{stat.number}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
