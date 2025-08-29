import React from "react";
import {
  User,
  Users,
  UserCheck,
  Music,
  Megaphone,
  GraduationCap,
  Heart,
  Globe,
} from "lucide-react";

const MinistriesOverview = () => {
  const ministries = [
    {
      id: 1,
      name: "Youth",
      icon: Users,
      description: "Empowering young people for God's purpose",
      color: "bg-blue-600",
    },
    {
      id: 2,
      name: "Women",
      icon: User,
      description: "Building godly women of influence",
      color: "bg-pink-600",
    },
    {
      id: 3,
      name: "Men",
      icon: UserCheck,
      description: "Raising men of honor and integrity",
      color: "bg-green-600",
    },
    {
      id: 4,
      name: "Worship",
      icon: Music,
      description: "Leading people into God's presence",
      color: "bg-purple-600",
    },
    {
      id: 5,
      name: "Evangelism",
      icon: Megaphone,
      description: "Taking the Gospel to the world",
      color: "bg-orange-600",
    },
    {
      id: 6,
      name: "Training",
      icon: GraduationCap,
      description: "Equipping believers for ministry",
      color: "bg-indigo-600",
    },
    {
      id: 7,
      name: "Children",
      icon: Heart,
      description: "Nurturing the next generation",
      color: "bg-yellow-600",
    },
    {
      id: 8,
      name: "Missions",
      icon: Globe,
      description: "Global outreach and missions",
      color: "bg-red-600",
    },
  ];

  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Our Ministries</h3>
        <button className="text-blue-600 hover:text-blue-800 font-semibold">
          View All
        </button>
      </div>

      {/* Ministry Icons Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 drop-shadow-md">
        {ministries.map((ministry) => {
          const IconComponent = ministry.icon;
          return (
            <div key={ministry.id} className="text-center group cursor-pointer">
              <div
                className={`w-16 h-16 ${ministry.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-gray-700 font-medium mb-1">
                {ministry.name}
              </h4>
              <p className="text-xs text-gray-500 px-2">
                {ministry.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          Get Involved
        </h4>
        <p className="text-gray-600 mb-4">
          Every believer is called to serve in the body of Christ. Find your
          place and make a difference in God's kingdom.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-slate-800 hover:bg-slate-900  px-6 py-3 rounded-md font-semibold transition-colors">
            Explore All Ministries
          </button>
          <button className="border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-6 py-3 rounded-md font-semibold transition-colors">
            Join a Ministry
          </button>
        </div>
      </div>
    </div>
  );
};

export default MinistriesOverview;
