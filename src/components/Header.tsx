import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import logo from '@/assets/Vita-med_logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <header className="bg-[#0A0F1E] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="VitaMed" className="h-14 w-auto sm:h-16" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-blue-300 text-sm font-bold transition-colors">
              Home
            </Link>
            
            {/* About Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="text-white hover:text-blue-300 text-sm font-bold flex items-center gap-1 transition-colors">
                About
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
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
            
            <Link to="/service" className="text-white hover:text-blue-300 text-sm font-bold transition-colors">
              Service
            </Link>
            <Link to="/how-it-works" className="text-white hover:text-blue-300 text-sm font-bold transition-colors">
              How it works
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
              Request Access
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-blue-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-800 pt-4">
            <Link to="/" className="text-white hover:text-blue-300 text-sm font-bold py-2 transition-colors">
              Home
            </Link>
            <div className="flex flex-col">
              <button 
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="text-white hover:text-blue-300 text-sm font-bold py-2 flex items-center justify-between transition-colors"
              >
                About
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutDropdownOpen && (
                <div className="pl-4 mt-2">
                  <Link 
                    to="/team" 
                    className="text-white hover:text-blue-300 text-sm font-bold py-2 block transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Team
                  </Link>
                </div>
              )}
            </div>
            <Link to="/service" className="text-white hover:text-blue-300 text-sm font-bold py-2 transition-colors">
              Service
            </Link>
            <Link to="/how-it-works" className="text-white hover:text-blue-300 text-sm font-bold py-2 transition-colors">
              How it works
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors w-full">
              Request Access
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}