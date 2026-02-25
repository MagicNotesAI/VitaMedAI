import { ImageWithFallback } from '../../../components/figma/ImageWithFallback'
import { FooterBanner } from '../../../components/FooterBanner'
import { Linkedin } from 'lucide-react'
import janu from '../../../assets/janu.png'
import leejoe from '../../../assets/leejoe.png'
import norinne from '../../../assets/norinne.png'

const teamMembers = [
  {
    name: 'Janu Subramanian PhD',
    role: 'CEO/CTO',
    image: janu,
    linkedin: '#',
    bio:
      'Seasoned industry professional with 15+ yrs of experience in finance (hedge funds raised 20 Mil), management consulting (United and KLM airlines) and machine learning & AI across various industries including media (consumer), venture capital, education and healthcare (VitaMed AI). PhD Operations Research, UNC Chapel Hill. BEngg Mechanical, IIT Delhi.'
  },
  {
    name: 'Leejoe Pallickal',
    role: 'President, CMO',
    image: leejoe,
    linkedin: '#',
    bio:
      'Pulmonary and critical care physician with 15+ years leading ICU programs and clinics across Southern California. Founder of two intensivist groups and CMO of VitaMed AI, combining frontline insight with user centered design to reduce provider burnout. Known educator and speaker with a focus on simplifying complex medical topics. Trained at Drexel and USC Keck after earning an M.D. from Ross University.'
  },
  {
    name: 'Norinne Gilles',
    role: 'Strategic Operations Support',
    image: norinne,
    linkedin: '#',
    bio:
      'Norinne brings experience in healthcare operations and administrative compliance, supporting VitaMed AI with early organizational processes, record keeping and workflow organization to ensure smooth company operations during the early growth phase.'
  }
]

export function Team() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A diverse team of healthcare and technology experts dedicated to transforming patient care through AI innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10"></div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">{member.name}</h2>
                      <p className="text-xl text-blue-600 font-semibold mb-4">{member.role}</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">Connect on LinkedIn</span>
                      </a>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterBanner />
    </div>
  )
}