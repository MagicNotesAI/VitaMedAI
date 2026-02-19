import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { FooterBanner } from '../../../components/FooterBanner';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1770364020204-102331b625ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwQ0VPJTIwZm91bmRlcnxlbnwxfHx8fDE3NzEwMzkxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Dr. Chen is a board-certified physician with over 15 years of experience in emergency medicine. She founded MED-A to address the critical gap in healthcare AI solutions that truly understand clinical workflows. She holds an MD from Stanford University and an MBA from Harvard Business School.',
    linkedin: '#'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Co-Founder & CTO',
    image: 'https://images.unsplash.com/photo-1763598461615-610264129bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGNvZm91bmRlciUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzEwMzkxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Michael brings over 20 years of experience in healthcare technology and AI development. Previously, he led engineering teams at Epic Systems and built machine learning platforms for healthcare data analytics. He holds a PhD in Computer Science from MIT with a focus on natural language processing.',
    linkedin: '#'
  },
  {
    name: 'Emily Nakamura',
    role: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvcGVyYXRpb25zJTIwbWFuYWdlciUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTAzOTE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Emily has a proven track record of scaling healthcare operations and building high-performing teams. She previously served as VP of Operations at a leading health tech startup and helped them expand from 50 to 500+ hospital partners. She holds an MBA from Wharton and a BS in Healthcare Management.',
    linkedin: '#'
  }
];

export function Team() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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

      {/* Team Members */}
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
                {/* Image */}
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h2>
                      <p className="text-xl text-blue-600 font-semibold mb-4">
                        {member.role}
                      </p>
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">Connect on LinkedIn</span>
                      </a>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterBanner />
    </div>
  );
}