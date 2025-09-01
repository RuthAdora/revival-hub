import React from "react";
import {
  Calendar,
  BookOpen,
  Facebook,
  Instagram,
  Youtube,
  Play,
  Repeat,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // TikTok icon from react-icons
import "./Teachings.css";

const LatesTeachings = () => {
  const dailyTeachings = [
    {
      id: 1,
      title: "Faith that Moves Mountains",
      verse: "Matthew 17:20",
      date: "September 1, 2025",
      content:
        "Jesus teaches us that even faith as small as a mustard seed has the power to move mountains. Believe and do not doubt.",
    },
    {
      id: 2,
      title: "God's Perfect Peace",
      verse: "Isaiah 26:3",
      date: "August 31, 2025",
      content:
        "Those who trust in the Lord will enjoy perfect peace. Keep your heart and mind fixed on Him.",
    },
    {
      id: 3,
      title: "The Lord is My Shepherd",
      verse: "Psalm 23:1",
      date: "August 30, 2025",
      content:
        "David reminds us that in God's care, we lack nothing. His guidance and provision are constant.",
    },
  ];

  return (
    <div className="py-12 px-6 md:px-12 bg-gray-50 min-h-screen">
      {/* Header */}

      {/* Daily Teachings List */}
      <div className="space-y-8 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            Daily Reflections
          </h2>
          <p className="text-gray-600">
            Fresh word from God for your daily walk
          </p>
        </div>

        {dailyTeachings.map((teaching) => (
          <div
            key={teaching.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {teaching.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
              <span className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>{teaching.verse}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{teaching.date}</span>
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{teaching.content}</p>
          </div>
        ))}
      </div>

      {/* Social Media Footer Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          You can watch more and feel blessed
        </h3>
        <p className="text-gray-600 mb-6">
          Follow us on our social media platforms for more teachings, videos,
          and encouragement.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://www.facebook.com/profile.php?id=61579206504792"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
          >
            <Facebook className="w-5 h-5" />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/apostlestevemm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md shadow-md transition"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@revivalhubglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md transition"
          >
            <Youtube className="w-5 h-5" />
            YouTube
          </a>
          <a
            href="https://www.tiktok.com/@apostlesteve001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md shadow-md transition"
          >
            <FaTiktok className="w-5 h-5" />
            TikTok
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatesTeachings;
