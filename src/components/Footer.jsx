import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Heart,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    // { name: "Our Ministries", href: "/services" },
    { name: "Latest Teachings", href: "/services" },
    { name: "Events", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-[#0a192f] shadow-lg text-white !text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* About Section */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-slate-800 font-bold">R</span>
              </div>
              <div>
                <div className="font-bold text-lg">RevivalHub</div>
                <div className="text-xs">GLOBAL CENTER</div>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              An Apostolic & Prophetic Equipping Base with a Global Vision.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-slate-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[160px]">
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}

          {/* Contact Info */}
          <div className="flex-1 min-w-[220px]">
            <h4 className="font-semibold text-base mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>(+254) 111-755-539</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>info@revivalhub.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-700 mt-8 pt-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h4 className="font-semibold text-base mb-1">Stay Connected</h4>
              <p className="text-sm">
                Get the latest updates, teachings & events.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs mb-2 md:mb-0">
            © 2025 RevivalHub Global Center. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-xs">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500" />
            <span>for God's Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
