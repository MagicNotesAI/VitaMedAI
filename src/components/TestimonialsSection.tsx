import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. James Mitchell',
    role: 'Emergency Medicine Physician',
    hospital: 'Yale New Haven Hospital',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtYWxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzQwNTg2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'Med-A has revolutionized how I work. The AI-powered documentation saves me at least <span class="text-blue-600 font-semibold">2 hours per shift</span>, allowing me to focus on what truly matters - my patients.',
    rating: 5,
  },
  {
    name: 'Dr. Lisa Thompson',
    role: 'Chief Medical Officer',
    hospital: 'Kaiser Permanente',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NDA1ODYwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote: 'The <span class="text-blue-600 font-semibold">clinical decision support</span> is exceptional. Med-A integrates seamlessly with our EMR system and has significantly reduced cognitive load for our entire care team.',
    rating: 5,
  },
  {
    name: 'Dr. Marcus Rodriguez',
    role: 'Director of Clinical Informatics',
    hospital: 'Duke Health',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc0MDU4NjAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    quote: "From a technical standpoint, Med-A's <span class=\"text-blue-600 font-semibold\">interoperability and security standards</span> are best-in-class. It's exactly what modern healthcare needs.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50/30 py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            What Healthcare Professionals Say
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading Clinicians
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of healthcare providers who are transforming their practice with Med-A
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p 
                className="text-gray-700 text-base leading-relaxed mb-6 relative z-10 flex-grow"
                dangerouslySetInnerHTML={{ __html: `"${testimonial.quote}"` }}
              />

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Join over <span className="font-bold text-blue-600">500+ healthcare providers</span> using Med-A
          </p>
          <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            See More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}