import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-slate-800 font-bold text-base">R</span>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-lg">RevivalHub</div>
              <div className="text-[10px] text-gray-300 uppercase tracking-wide">
                Global Center
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-orange-400 transition-colors">
              Home
            </a>
            <a
              href="/about"
              className="hover:text-orange-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="/ministries"
              className="hover:text-orange-400 transition-colors"
            >
              Ministries
            </a>
            <a
              href="/teachings"
              className="hover:text-orange-400 transition-colors"
            >
              Teachings
            </a>
            <a
              href="/events"
              className="hover:text-orange-400 transition-colors"
            >
              Events
            </a>
            <a
              href="/giving"
              className="hover:text-orange-400 transition-colors"
            >
              Giving
            </a>
          </div>

          {/* Donate Button (Desktop only) */}
          <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold shadow-md transition-colors">
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a href="/" className="hover:text-orange-400 transition-colors">
              Home
            </a>
            <a
              href="/about"
              className="hover:text-orange-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="/ministries"
              className="hover:text-orange-400 transition-colors"
            >
              Ministries
            </a>
            <a
              href="/teachings"
              className="hover:text-orange-400 transition-colors"
            >
              Teachings
            </a>
            <a
              href="/events"
              className="hover:text-orange-400 transition-colors"
            >
              Events
            </a>
            <a
              href="/giving"
              className="hover:text-orange-400 transition-colors"
            >
              Giving
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold shadow-md transition-colors w-fit">
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
