import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/banner.jpg')", // replace with your actual banner
      }}
    >
      {/* Dark overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content on top of banner */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to <br />
          RevivalHub Global Center
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          An Apostolic & Prophetic Equipping Base with a Global Vision
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition-colors">
            Join Us This Sunday
          </button>
          <button className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-md font-semibold transition-colors">
            Watch Live
          </button>
          <button className="bg-white text-slate-800 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
