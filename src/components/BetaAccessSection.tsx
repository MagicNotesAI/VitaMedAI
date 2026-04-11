import abstractBg from 'figma:asset/29fe9bf4fe8d7bc645e152c63d7bfc471c8a8cc4.png'
import { REQUEST_ACCESS_FORM_URL } from '@/constants/urls'

export function BetaAccessSection() {
  return (
    <section className="bg-[#F7F9FC] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-white rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0 shadow-xl">
          <div className="p-12 lg:p-16 flex flex-col justify-center bg-[#3ff4f400]">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Request Private Beta Access
            </h2>
            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              Join our select group of healthcare pioneers and help shape the future of medical AI with intelligent
              automation at the point of care.
            </p>

            <a
              href={REQUEST_ACCESS_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors uppercase tracking-wide text-sm w-fit"
            >
              Request Access
            </a>
          </div>

          <div className="relative min-h-[400px] md:min-h-full">
            <img
              src={abstractBg}
              alt="Abstract blue flowing design"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}