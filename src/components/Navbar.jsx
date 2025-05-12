import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/LOGO SRJC.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Faculty', href: '/faculty' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full border-b border-primary-100">
      <nav className="flex items-center justify-between w-full px-6 py-3 md:px-12">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="SRIDEA Logo" className="h-16 w-auto md:h-20 mr-2" />
            <span className="text-3xl font-extrabold text-primary-500 tracking-tight">SRIDEA</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-700 hover:text-primary-500 transition-colors duration-200 font-semibold text-lg"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/admissions" className="ml-4 px-6 py-2 rounded-full bg-primary-500 text-white font-bold shadow hover:bg-primary-600 transition-all duration-200">
            Apply Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700 hover:text-primary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-primary-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-md font-semibold text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="block mt-2 px-3 py-2 bg-primary-500 text-white rounded-full font-bold text-center shadow hover:bg-primary-600 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 