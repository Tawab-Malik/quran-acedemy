export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 via-white to-emerald-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl !mx-auto">
        <div className="text-center !mb-16">
          <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 !mb-4">
            Why <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Parents Trust</span> Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl !mx-auto">
            Your child's safety, progress, and Islamic education are our top priorities
          </p>
        </div>

        {/* Trust Factors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 !mb-16">
          {[
            { icon: '👁️', title: 'One-to-One Attention', desc: 'Your child receives undivided focus from the teacher every class' },
            { icon: '🔒', title: 'Safe Online Environment', desc: 'Secure Zoom classes with professional, vetted instruction' },
            { icon: '📊', title: 'Regular Progress Updates', desc: 'Monthly reports on your child\'s learning and improvement' },
            { icon: '😊', title: 'Child-Friendly Approach', desc: 'Patience, encouragement, and positive reinforcement always' },
            { icon: '🆓', title: 'Free Trial First', desc: '3 days free—no credit card or commitment required' },
            { icon: '🌍', title: 'Global Community', desc: 'Trusted by 500+ families across UK, USA & Canada' },
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div className="h-full bg-white !p-5 rounded-2xl border-2 border-green-300 hover:border-green-500 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl !mb-4 group-hover:scale-115 transition-transform duration-300 inline-block">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 !mb-3 group-hover:text-green-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-green-200/40 rounded-full blur-xl group-hover:bg-green-300/50 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8">
          {[
            {
              text: "My daughter loves her Quran classes! The teacher is so patient and she's made real progress in just 2 months.",
              author: "Fatima Ahmed",
              location: "London, UK",
              rating: 5
            },
            {
              text: "Best investment for my son's Islamic education. The flexibility with US timings is perfect for our schedule.",
              author: "Hassan Khan",
              location: "New York, USA",
              rating: 5
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-green-200 hover:border-green-400 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
