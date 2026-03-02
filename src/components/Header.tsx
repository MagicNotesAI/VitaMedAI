import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import logo from '../assets/logo.jpg'

const REQUEST_ACCESS_FORM_URL =
  'https://wtf-forms-1-xe5g.onrender.com/98467255-27d7-4957-b40b-e8ffe259121a'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)

  return (
    <header className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="VitaMed AI" className="w-9 h-9 rounded-lg object-contain" />
            <span className="text-xl font-bold text-blue-600">VitaMed AI</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center gap-1">
                About
                <ChevronDown className="w-4 h-4" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    <Link
                      to="/team"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Team
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/service" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Service
            </Link>

            <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              How it works
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Contact Us
            </Link>

            <a
              href={REQUEST_ACCESS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Access
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="flex flex-col">
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2 flex items-center justify-between"
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="pl-4 mt-2">
                  <Link
                    to="/team"
                    className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Team
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/service"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Service
            </Link>

            <Link
              to="/how-it-works"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <a
              href={REQUEST_ACCESS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Access
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}