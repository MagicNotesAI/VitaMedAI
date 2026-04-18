import { Link } from 'react-router-dom'
import { Video, MessageCircle, Bug, HelpCircle, Clock, Users, ArrowRight, Calendar } from 'lucide-react'
import { OFFICE_HOURS_BOOKING_URL } from '../../../../constants/urls'

export function OfficeHours() {
  return (
    <section className="overflow-hidden bg-[#F7F9FC] py-24">
      <div className="mx-auto max-w-5xl px-8">

        {/* ── Hero ─────────────────────────────────────────── */}
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1.5 text-sm font-semibold text-blue-600">
            <Video className="h-4 w-4" />
            Live Office Hours
          </div>
          <h1 className="mb-5 text-5xl font-bold leading-tight text-black">
            Got questions? Join us live.
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-8 text-gray-500">
            Open sessions for new and existing users to ask questions, get help, and learn how to
            get the most out of VitaMed AI — directly from our team.
          </p>
        </div>

        {/* ── Register Card ────────────────────────────────── */}
        <div className="mb-8 rounded-3xl border border-black/10 bg-white px-16 py-10 text-center shadow-xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10">
            <Calendar className="h-7 w-7 text-blue-600" />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-black">Reserve Your Spot</h2>
          <p className="mx-auto mb-8 max-w-lg text-base leading-7 text-gray-500">
            Book in advance through HubSpot so our team knows to expect you.
          </p>

          <a
            href={OFFICE_HOURS_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="mb-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-blue-700"
          >
            Book through HubSpot
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* ── Session Details (3 cards in a row) ───────────── */}
        <div className="mb-16 grid grid-cols-2 gap-4 lg:grid-cols-2">
          {[
            {
              icon: Clock,
              label: 'Schedule',
              text: 'Every Friday, 3:30 PM - 4:30 PM ET',
            },
            {
              icon: Users,
              label: 'Who should attend',
              text: 'Anyone using or evaluating VitaMed AI — new users especially welcome.',
            },
          ].map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="rounded-2xl border border-black/10 bg-white px-6 py-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10">
                <Icon className="h-4 w-4 text-blue-600" />
              </div>
              <p className="mb-1 text-base font-semibold text-black">{label}</p>
              <p className="mb-4 text-base leading-6 text-gray-500">{text}</p>
            </div>
          ))}
        </div>

        {/* ── What to bring ────────────────────────────────── */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-black">What to bring</h2>
          <p className="text-base text-gray-500">
            Come with whatever is on your mind — sessions are open and unstructured.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2" style={{ marginBottom: '3rem' }}>
          {[
            {
              icon: HelpCircle,
              title: 'General Questions',
              description:
                'Ask anything about how VitaMed AI works, its features, and how to get the most out of it.',
            },
            {
              icon: Bug,
              title: 'Troubleshooting & Debugging',
              description:
                "Running into an issue? Bring it to office hours and we'll help you debug and resolve it live.",
            },
            {
              icon: MessageCircle,
              title: 'Onboarding Help',
              description:
                "New to the platform? We'll walk you through setup and answer any questions along the way.",
            },
            {
              icon: Users,
              title: 'Workflow Guidance',
              description:
                'Learn best practices for integrating VitaMed AI smoothly into your clinical workflow.',
            },
          ].map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/10">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-black">{title}</h3>
              <p className="text-sm leading-7 text-gray-500">{description}</p>
            </div>
          ))}
        </div>

        {/* ── CTA Banner ───────────────────────────────────── */}
        <div style={{ height: '3rem' }} />
        <div className="rounded-3xl bg-blue-600 px-10 text-center shadow-xl" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <h2 className="mb-6 text-3xl font-bold text-white">Still have questions?</h2>
          <p className="mb-6 text-xl leading-8 text-blue-100">
            Can't make it to office hours? Reach out to us directly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-md transition-colors hover:bg-blue-50"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
