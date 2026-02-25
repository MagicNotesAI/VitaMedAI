// src/features/contact/contact.tsx
import { Calendar, Mail, ArrowRight } from 'lucide-react'
import contactImg from '../../assets/contact.png'

export default function ContactPage() {
  return (
    <section className="bg-[#F7F9FC] py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top banner image across the top */}
        <div className="mb-14">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-white">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none" />
          </div>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold text-black mb-5">Send Us a Message</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have a question, feedback, or partnership inquiry? Fill out the form below and our team will get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-14 items-start relative">
          {/* Decorative Background Graphics */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-12 left-1/4 w-48 h-48 bg-blue-500 rounded-full opacity-15 blur-2xl" />
            <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-pink-500 rounded-full opacity-10 blur-3xl" />
            <div className="absolute top-12 right-12 w-2 h-2 bg-blue-400 rounded-full opacity-60" />
            <div className="absolute top-24 right-32 w-3 h-3 bg-cyan-400 rounded-full opacity-50" />
            <div className="absolute bottom-32 left-12 w-2 h-2 bg-pink-400 rounded-full opacity-50" />
          </div>

          {/* CONTACT FORM CARD */}
          <div className="rounded-3xl bg-white shadow-2xl border border-black/10 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-blue-600/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black leading-tight">Contact Form</h3>
                  <p className="text-sm text-gray-600">We typically respond within 1 to 2 business days.</p>
                </div>
              </div>

              <form
                className="space-y-5"
                action="https://formspree.io/f/xaqdogzg"
                method="POST"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  rows={6}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 resize-none"
                />

                <input type="hidden" name="_subject" value="New Contact Form Message | VitaMed AI" />
                <input type="hidden" name="_next" value="https://med-a-health.com/thank-you.html" />

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-gray-800 transition-colors"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-gray-600 leading-relaxed">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                    Terms & Conditions
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>

          {/* CALENDLY CARD */}
          <div className="rounded-3xl bg-white shadow-2xl border border-black/10 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-blue-600/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black leading-tight">Book a Call</h3>
                  <p className="text-sm text-gray-600">Quick support and onboarding help.</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Book a 15 minute support slot on Tuesdays and Fridays, 10am to 12pm.
              </p>

              <a
                href="https://calendly.com/med-a-health-support/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm text-gray-700">
                  Prefer email? Use the contact form and include your availability, we will coordinate a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}