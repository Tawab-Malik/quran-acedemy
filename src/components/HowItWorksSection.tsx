import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl !mx-auto">
        <div className="text-center !mb-16">
          <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 !mb-4">
            How <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Classes Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl !mx-auto">
            Simple, flexible, and designed for your child's convenience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {[
              { num: '1', title: 'Free Trial Class on Zoom', desc: 'Book a complimentary class to assess your child\'s level and learning style' },
              { num: '2', title: 'One-to-One Live Sessions', desc: 'Personalized classes via Zoom with the same teacher for consistency' },
              { num: '3', title: 'Flexible Timings', desc: 'Classes arranged around your schedule—UK, USA & Canada time zones' },
              { num: '4', title: 'Monthly Affordable Fee', desc: 'Transparent, reasonable pricing with no hidden charges' },
            ].map((step, idx) => (
              <div key={idx} className="group">
                <div className="flex gap-6 items-start !p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 transform hover:translate-x-2">
                  <div className="flex-shrink-0 mt-2 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 !mb-2 group-hover:text-green-600 transition-colors">{step.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-600 rounded-3xl blur-2xl opacity-30"></div>
            <Image 
              src="/images/howitwork.png"
              alt="How Classes Work"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl select-none"
              height={1500}
              width={1500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
