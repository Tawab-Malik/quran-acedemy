export default function CurriculumSection() {
  return (
    <section id="curriculum" className="py-20  px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl !mx-auto">
        <div className="text-center !mb-16">
          <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 !mb-4">
            What Your Child Will <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Master</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl !mx-auto">
            A comprehensive curriculum designed for young learners, covering all essentials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: '📖', title: 'Noorani Qaida', desc: 'Foundation of Quranic reading with proper letter articulation' },
            { icon: '🎵', title: 'Proper Tajweed', desc: 'Correct pronunciation & Quranic rules of recitation' },
            { icon: '💭', title: 'Quran Memorization', desc: 'Surah-by-surah memory support & retention techniques' },
            { icon: '🤲', title: 'Daily Duas', desc: 'Essential Islamic supplications for daily life' },
            { icon: '👥', title: 'One-to-One Focus', desc: 'Personalized learning pace tailored to your child' },
            { icon: '🎯', title: 'Islamic Manners', desc: 'Adab & core Islamic values & character building' },
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div className="relative bg-white !p-5 rounded-2xl border-2 border-green-300 hover:border-green-400 shadow-lg hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="text-3xl !mb-4 group-hover:scale-105 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 !mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-100/20 rounded-full blur-xl group-hover:bg-green-200/40 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
