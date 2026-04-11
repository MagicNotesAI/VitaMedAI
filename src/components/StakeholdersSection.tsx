import { useState } from 'react'
import { Stethoscope, Shield, FileText, Heart, Activity, Clock } from 'lucide-react'

const cliniciansFeatures = [
  {
    icon: Stethoscope,
    title: 'Clinical Decision Support',
    description:
      'Empowering clinicians with real-time AI insights that reduce cognitive load and enhance decision-making at the point of care.'
  },
  {
    icon: Shield,
    title: 'Interoperable Security',
    description:
      'Seamlessly connect with existing EMRs while maintaining industry-leading encryption and HIPAA compliance.'
  },
  {
    icon: FileText,
    title: 'Streamlined Documentation',
    description:
      'Automate medical note-taking and administrative tasks so your team can focus on what matters most: the patient.'
  }
]

const patientFeatures = [
  {
    icon: Heart,
    title: 'Personalized Care',
    description:
      'Receive tailored treatment recommendations based on your unique health profile and medical history.'
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description:
      'Track your health metrics and get instant insights with AI-powered analysis that keeps you informed.'
  },
  {
    icon: Clock,
    title: 'Faster Diagnoses',
    description:
      'Benefit from AI-assisted diagnostics that help your care team identify issues quickly and accurately.'
  }
]

export function StakeholdersSection() {
  const [activeTab, setActiveTab] = useState<'clinicians' | 'patient'>('clinicians')
  const features = activeTab === 'clinicians' ? cliniciansFeatures : patientFeatures

  return (
    <section className="bg-[#F7F9FC] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-black mb-12 max-w-xl">
          Designed for Every Stakeholder in Care.
        </h2>

        <div className="flex gap-8 mb-16 border-b border-gray-400">
          <button
            onClick={() => setActiveTab('clinicians')}
            className={`pb-4 px-2 font-semibold text-lg transition-colors relative ${
              activeTab === 'clinicians' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Clinicians
            {activeTab === 'clinicians' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('patient')}
            className={`pb-4 px-2 font-semibold text-lg transition-colors relative ${
              activeTab === 'patient' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Patients
            {activeTab === 'patient' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-12 left-1/4 w-48 h-48 bg-blue-500 rounded-full opacity-15 blur-2xl"></div>
            <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute top-12 right-12 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
            <div className="absolute top-24 right-32 w-3 h-3 bg-cyan-400 rounded-full opacity-50"></div>
            <div className="absolute bottom-32 left-12 w-2 h-2 bg-pink-400 rounded-full opacity-50"></div>
          </div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex gap-6 p-6 rounded-xl hover:bg-black/5 transition-all duration-300"
              >
                <div className="w-[2px] h-24 bg-black flex-shrink-0"></div>

                <div>
                  <h3 className="font-bold text-2xl text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-800 text-base leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-pink-400 to-pink-500 shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600 rounded-bl-full opacity-90"></div>

              <img
                src={
                  activeTab === 'clinicians'
                    ? 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwY2xpbmljaWFuJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzcwNjc1ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080'
                    : 'https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwaGVhbHRoY2FyZSUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NzA2NzU4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
                }
                alt={activeTab === 'clinicians' ? 'Male clinician with stethoscope' : 'Smiling patient receiving healthcare'}
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}