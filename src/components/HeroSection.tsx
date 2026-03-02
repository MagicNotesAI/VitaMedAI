import { ArrowRight, Search } from 'lucide-react'
import DemoGate from './DemoGate/demogate'

export function HeroSection() {
  const avatars = [
    'https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3RhZmYlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA2NzMyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1674450371215-550d33a2d81e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvdmlkZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzA2NzMyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758691461884-ff702418afde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNjY5MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  ]

  const PRIVATE_BETA_FORM_URL =
    'https://wtf-forms-1-xe5g.onrender.com/98467255-27d7-4957-b40b-e8ffe259121a'

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-medium mb-6 md:mb-8">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
            Now in Private Beta
          </div>

          <h1 className="mb-4 md:mb-6">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-1 md:mb-2">
              Intelligence at
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-1 md:mb-2">
              the
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight">
              Point of Care.
            </div>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl">
            <span className="font-semibold text-gray-900">Introducing Vitamed AI</span>: A medical revolution to
            streamline patient care, improve patient outcomes, and facilitate communication between patients and doctors
            using automation and cutting edge AI technology.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <a
              href={PRIVATE_BETA_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Join the Private Beta
              <ArrowRight className="w-4 h-4" />
            </a>

            <DemoGate buttonText="Watch Demo" />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Healthcare provider ${index + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">
                5+
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">500+</span> healthcare providers joined
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 relative">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-6 aspect-square flex items-center justify-center relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9uJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzcwNTYyMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Doctor Consultant"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <span className="text-xs sm:text-sm text-gray-600 font-medium relative z-10">Doctor Consultant</span>
          </div>

          <div className="bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden aspect-square">
            <img
              src="https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9uJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzcwNTYyMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Doctor with patient"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-col justify-between aspect-square overflow-hidden relative">
            <div className="absolute top-3 right-3 md:top-4 md:right-4 w-20 h-16 md:w-32 md:h-24 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwRU1SJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDY3MzUwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="EMR Interface"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-white relative z-10 mt-auto">
              <div className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">Your Mini-EMR,</div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">Everywhere.</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-fuchsia-500 rounded-2xl md:rounded-3xl overflow-hidden aspect-square relative">
            <img
              src="https://images.unsplash.com/photo-1758691461884-ff702418afde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwNjY5MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Healthcare professional"
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
            />
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg">
              <div className="flex items-center gap-2 md:gap-3">
                <Search className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
                <div className="flex-1 h-1.5 md:h-2 bg-gray-200 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}