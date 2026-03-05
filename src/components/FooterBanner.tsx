// src/components/FooterBanner.tsx
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import logo from '../assets/logo.jpg'

export function FooterBanner() {
  return (
    <footer className="bg-[#0A0F1E] border-t border-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-900/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Vitamed AI"
                className="w-10 h-10 rounded-xl object-cover border border-white/10"
              />
              <div>
                <div className="text-white font-bold text-lg leading-tight">Vitamed AI</div>
                <div className="text-gray-400 text-sm">Intelligence at the point of care</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Introducing Vitamed AI, a medical revolution to streamline patient care, improve patient outcomes,
              and facilitate communication between patients and doctors using automation and cutting edge AI
              technology.
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:hello@vitamed.ai"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@vitamed.ai
              </a>

              <a
                href="tel:+10000000000"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (000) 000 0000
              </a>

              <div className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Amherst, MA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/service" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/vitamed-ai/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-2xl bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <p className="text-gray-500 text-xs mt-5 leading-relaxed">
              Follow us for product updates, private beta announcements, and new feature releases.
            </p>

            <a
              href="/contact"
              className="mt-5 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 px-4 py-2 text-sm font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-colors w-full"
            >
              Contact our team
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Vitamed AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700 text-xs">·</span>
            <a href="/terms" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">
              Terms & Conditions
            </a>
          </div>
          <p className="text-gray-600 text-xs">Built for clinicians and patients with privacy first design.</p>
        </div>
      </div>
    </footer>
  )
}