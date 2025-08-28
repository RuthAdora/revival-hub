import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white sticky top-0 z-50 shadow-md h-14 flex items-center pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="RevivalHub Logo"
              className="h-8 w-auto object-contain block"
            />
          </div>

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

          {/* Donate Button */}
          <div>
            <button className="bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded-md text-sm font-semibold shadow-md transition-colors">
              Donate
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
