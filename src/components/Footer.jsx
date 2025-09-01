import React from "react";
import { Facebook, Instagram, Youtube, Mail, Phone, Heart } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // ✅ TikTok icon
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Latest Teachings", href: "/teachings" },
    { name: "Events", href: "/events" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61579206504792",
      name: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/YourHandle",
      name: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@revivalhubglobal",
      name: "YouTube",
    },
    {
      icon: FaTiktok, // ✅ React Icons TikTok
      href: "https://www.tiktok.com/@apostlesteve001",
      name: "TikTok",
    },
  ];

  return (
    <footer className="bg-[#0a192f] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* About Section */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/logo2.png"
                  alt="RevivalHub Logo"
                  className="logo cursor-pointer"
                />
              </Link>
            </div>

            <p className="mb-4 text-sm leading-relaxed">
              An Apostolic & Prophetic Equipping Base with a Global Vision.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, name }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label={name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[160px]">
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(({ name, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[220px]">
            <h4 className="font-semibold text-base mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:+254111755539" className="hover:underline">
                  (+254) 111-755-539
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <a
                  href="mailto:revivalhubglobalcenter@gmail.com"
                  className="hover:underline"
                >
                  revivalhubglobalcenter@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs mb-2 md:mb-0">
            © {new Date().getFullYear()} RevivalHub Global Center. All rights
            reserved.
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
