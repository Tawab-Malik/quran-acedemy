import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20  px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-100/40 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="!text-center !mb-16">
          <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 !mb-4">
            Meet Your <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Quran Teacher</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl !mx-auto text-center">
            An experienced educator dedicated to your child's Islamic learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Teacher Image Card */}
            <Image
              src="/images/about.png"
              height={300}
              width={500}
              alt="Certified Quran Teacher"
              className="relative object-cover w-full h-full xl:h-[800px] rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-2"
            />
        
          {/* Teacher Info */}
          <div className="">
            <h3 className="!text-3xl md:!text-4xl font-bold text-gray-900 !mb-4">
              Experienced & Certified
            </h3>
            <p className="text-lg text-gray-600 !mb-8 leading-relaxed">
              With years of experience teaching children the Quran, bringing patience, discipline, and passion to every class. Our teacher is dedicated to creating a supportive learning environment.
            </p>

            <div className="space-y-5">
              {[
                { icon: '🏆', text: 'Certified Hafiz-e-Quran' },
                { icon: '👶', text: 'Expert in teaching children (ages 4-16)' },
                { icon: '❤️', text: 'Patient, friendly, and disciplined approach' },
                { icon: '🌍', text: 'Fluent in Urdu & English' },
                { icon: '📚', text: 'Personalized learning plans for each child' },
                { icon: '⭐', text: '4.9/5 average rating from parents' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 !p-4 bg-green-50 rounded-xl hover:bg-green-100 transform duration-300 transition-all hover:translate-x-2">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-lg font-medium text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
