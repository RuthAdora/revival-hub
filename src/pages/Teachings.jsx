import React from "react";
import { Play, FileText, Calendar } from "lucide-react";

const LatestTeachings = () => {
  const teachings = [
    {
      id: 1,
      title: "The Anointing That Breaks Yokes",
      scripture: "Isaiah 19:27",
      date: "August 25, 2025",
      description:
        "Discover the power of God's anointing to break every yoke of bondage in your life.",
      videoUrl: "#",
      transcriptUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "The Power of Forgiveness",
      scripture: "Matthew 3:14-15",
      date: "August 18, 2025",
      description:
        "Learn how forgiveness releases God's power in your life and relationships.",
      videoUrl: "#",
      transcriptUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Walking in Divine Authority",
      scripture: "Luke 10:19",
      date: "August 11, 2025",
      description:
        "Understanding your authority as a believer in Christ Jesus.",
      videoUrl: "#",
      transcriptUrl: "#",
      featured: false,
    },
  ];

  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Latest Teachings</h3>
        <button className="text-blue-600 hover:text-blue-800 font-semibold">
          View All
        </button>
      </div>

      <div className="space-y-6">
        {teachings.map((teaching) => (
          <div
            key={teaching.id}
            className={`border-b border-gray-200 pb-6 ${
              teaching.featured ? "bg-blue-50 p-4 rounded-lg border-none" : ""
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {teaching.title}
                </h4>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span className="font-medium">{teaching.scripture}</span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{teaching.date}</span>
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{teaching.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition-colors">
                <Play className="w-4 h-4" />
                <span>Watch</span>
              </button>
              <button className="flex items-center space-x-2 border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md font-semibold transition-colors">
                <FileText className="w-4 h-4" />
                <span>Read</span>
              </button>
              <button className="text-blue-600 hover:text-blue-800 font-semibold px-4 py-2">
                Share
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-md font-semibold transition-colors">
        View All Teachings
      </button>
    </div>
  );
};

export default LatestTeachings;
