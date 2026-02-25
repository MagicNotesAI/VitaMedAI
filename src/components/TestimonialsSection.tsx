import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Priya Nair',
    role: 'Hospitalist',
    hospital: 'Large Academic Medical Center',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRvY3RvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDY3NTgxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    quote:
      'VitaMed AI helps me finish notes before I leave. I spend less time clicking and more time talking to patients. The best part is that it fits into our existing workflow without adding extra steps.',
    rating: 5
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Emergency Medicine Physician',
    hospital: 'Regional Trauma Center',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtYWxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzQwNTg2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    quote:
      'During busy shifts, VitaMed AI keeps documentation from piling up. The summaries are clear, and I can quickly review and sign without feeling like I am rewriting everything from scratch.',
    rating: 5
  },
  {
    name: 'Dr. Sofia Alvarez',
    role: 'Director of Clinical Informatics',
    hospital: 'Integrated Health System',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NDA1ODYwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    quote:
      'From an implementation standpoint, VitaMed AI is thoughtful about security and integration. Our clinicians adopted it quickly because it actually reduces friction instead of creating more.',
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50/30 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            What Healthcare Professionals Say
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading Clinicians
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear how teams are improving documentation, communication, and decision support with VitaMed AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group flex flex-col"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-blue-600" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-base leading-relaxed mb-6 relative z-10 flex-grow">
                {`"${testimonial.quote}"`}
              </p>

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

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Join over <span className="font-bold text-blue-600">500+ healthcare providers</span> exploring VitaMed AI
          </p>
          <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            See More Success Stories
          </button>
        </div>
      </div>
    </section>
  )
}