import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white sticky top-0 z-50 flex items-center shadow-md h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/">
            <img
              src="/logo2.png"
              alt="RevivalHub Logo"
              className="logo cursor-pointer"
            />
          </Link>

          {/* Navigation Items - evenly spread */}
          <div className="flex-1 flex justify-around mx-8 text-sm font-bold text-blue-900">
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
            <a
              href="/president"
              className="hover:text-orange-400 transition-colors"
            >
              President
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
