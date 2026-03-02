// src/features/contact/contact.tsx
import { Calendar, Mail, ArrowRight } from 'lucide-react'
import contactImg from '../../assets/contact.png'

export default function ContactPage() {
  return (
    <section className="bg-[#F7F9FC] py-28">
      <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-20">
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
            <img
              src={contactImg}
              alt="Contact"
              className="h-60 w-full object-cover sm:h-72 md:h-80 lg:h-96"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
          </div>
        </div>

        <div className="max-w-2xl">
          <h2 className="mb-6 text-5xl font-bold text-black">Send Us a Message</h2>
          <p className="text-lg leading-8 text-gray-700">
            Have a question, feedback, or partnership inquiry? Fill out the form below and our team will get back to you.
          </p>
        </div>

        <div className="relative mt-16 grid items-start gap-16 lg:grid-cols-2">
          {/* CONTACT FORM CARD */}
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
            <div className="p-12 sm:p-14 lg:p-16">
              <div className="mb-10 flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold leading-tight text-black">Contact Form</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    We typically respond within 1 to 2 business days.
                  </p>
                </div>
              </div>

              <form
                className="space-y-7"
                action="https://formspree.io/f/xaqdogzg"
                method="POST"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  rows={7}
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-gray-800 sm:w-auto"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="pt-1 text-sm leading-relaxed text-gray-600">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="font-medium text-blue-600 hover:text-blue-700">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="font-medium text-blue-600 hover:text-blue-700">
                    Terms & Conditions
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>

          {/* BOOK A CALL CARD */}
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
            <div className="p-12 sm:p-14 lg:p-16">
              <div className="mb-10 flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold leading-tight text-black">Book a Call</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    Quick support and onboarding help.
                  </p>
                </div>
              </div>

              <p className="text-base leading-8 text-gray-700">
                Book a 15 minute support slot on Tuesdays and Fridays, 10am to 12pm.
              </p>

              <a
                href="https://calendly.com/med-a-health-support/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1000 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-blue-600"
              >
                Book a Call
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}