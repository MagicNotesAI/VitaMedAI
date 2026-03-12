import { Quote } from 'lucide-react'
import pp from '../assets/unnamed-1.png'
import lee from '../assets/leejoe.png'

const testimonials = [
  {
    name: 'Dr. Shalini Sethi',
    role: 'Pediatrician',
    hospital: '',
    image: pp,
    quote:
      'As a physician, I have been extremely impressed with VitaMed AI and the thoughtful design behind its AI-based EMR. The platform is streamlined and intuitive, making documentation faster and significantly reducing the administrative burden of daily workflows. Its user-friendly features truly set it apart from traditional EMR systems. I strongly encourage clinics looking to enhance efficiency and modernize their practice to explore what VitaMed AI has to offer.',
  },
  {
    name: 'Dr. Pallickal',
    role: 'Pulmonary Physician',
    hospital: 'Foothill Pulmonary Clinic, Pasadena, CA',
    image:lee,  
    quote:
      'During busy shifts, VitaMed AI keeps documentation from piling up. The summaries are clear, and I can quickly review and sign notes without feeling like I am rewriting everything from scratch.',
  },
  {

    name: 'Norinne Gilles',
    role: 'Strategic Operations Support',
    hospital: 'Foothill Pulmonary Clinic, Pasadena, CA',
    image: pp,
    quote:
      'Using the app has made creating patient charts much easier for me. It helps capture and organize information from previous visits so charts come together faster. I spend less time worrying about formatting and more time focusing on accuracy. It has been a really helpful tool during busy days.',
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
                  {testimonial.hospital && (
                    <p className="text-sm text-blue-600">{testimonial.hospital}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}