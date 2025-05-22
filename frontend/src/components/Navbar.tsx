import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom'; // use this directly unless you’ve extended it

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">OvaCare</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/community" className="text-gray-700 hover:text-purple-600 transition-colors">
              Community Chat
            </Link>
            <Link to="/detection" className="text-gray-700 hover:text-purple-600 transition-colors">
              Detection
            </Link>
            <Link to="/diet-plans" className="text-gray-700 hover:text-purple-600 transition-colors">
              Diet Plans
            </Link>
            <Link to="/tracker" className="text-gray-700 hover:text-purple-600 transition-colors">
              Tracker
            </Link>
            <Link 
              to="/dashboard" 
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Icon (can be expanded later) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-purple-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
