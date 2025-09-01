import React from "react";
import { Flame, Calendar, MapPin, Clock } from "lucide-react";
import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Apostolic & Prophetic Conference",
      date: "September 10, 2025",
      location: "Main Sanctuary + Online",
      time: "9:00 AM - 6:00 PM",
      description:
        "Join us for a powerful time of apostolic and prophetic impartation.",
      platform: "youtube",
      link: "https://www.youtube.com/@revivalhubglobal",
    },
    {
      id: 2,
      title: "Youth Revival Meeting",
      date: "September 18, 2025",
      location: "Youth Center + TikTok Live",
      time: "6:00 PM - 8:00 PM",
      description: "Special revival meeting for young people.",
      platform: "tiktok",
      link: "https://www.tiktok.com/@apostlesteve001",
    },
    {
      id: 3,
      title: "Intercessors WhatsApp Call",
      date: "September 25, 2025",
      location: "WhatsApp Group",
      time: "8:00 PM - 9:00 PM",
      description: "Join the intercessors on a WhatsApp call for prayer.",
      platform: "whatsapp",
      link: "https://chat.whatsapp.com/example",
    },
    {
      id: 4,
      title: "Instagram Live Bible Study",
      date: "October 2, 2025",
      location: "Instagram Live",
      time: "7:00 PM - 8:30 PM",
      description: "Bible study and Q&A session live on Instagram.",
      platform: "instagram",
      link: "https://instagram.com/revivalhub",
    },
    {
      id: 5,
      title: "Facebook Revival Service",
      date: "October 10, 2025",
      location: "Facebook Live",
      time: "5:00 PM - 7:00 PM",
      description:
        "Experience revival through worship and the Word on Facebook Live.",
      platform: "facebook",
      link: "https://www.facebook.com/profile.php?id=61579206504792",
    },
  ];

  // helper function to render the correct platform icon
  const renderIcon = (platform) => {
    switch (platform) {
      case "tiktok":
        return <FaTiktok className="w-5 h-5 text-black" />;
      case "youtube":
        return <FaYoutube className="w-5 h-5 text-red-600" />;
      case "facebook":
        return <FaFacebook className="w-5 h-5 text-blue-600" />;
      case "instagram":
        return <FaInstagram className="w-5 h-5 text-pink-500" />;
      case "whatsapp":
        return <FaWhatsapp className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="py-16 px-6 md:px-12 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">
          Upcoming Events
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay connected with Revival Hub through our upcoming events and live
          meetings.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            {/* Event Info */}
            <div>
              <div className="flex items-start space-x-4 mb-4">
                <Flame className="w-10 h-10 text-orange-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {event.title}
                  </h2>
                  <div className="grid gap-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{event.description}</p>
            </div>

            {/* Social Media Link */}
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline mt-4"
            >
              {renderIcon(event.platform)}
              <span>
                Join on{" "}
                {event.platform.charAt(0).toUpperCase() +
                  event.platform.slice(1)}
              </span>
            </a>
          </div>
        ))}
      </div>

      {/* One Register Button at the Bottom */}
      <div className="mt-12 text-center">
        <a
          href="https://wa.me/254111755539?text=Hello,%20I%20would%20like%20to%20register%20for%20Revival%20Hub%20events"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-[0_4px_15px_rgba(255,255,255,0.6)] font-semibold transition"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default UpcomingEvents;
