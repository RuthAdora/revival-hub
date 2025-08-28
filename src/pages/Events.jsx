import React from "react";
import { Flame, Calendar, MapPin, Clock } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Apostolic & Prophetic Conference",
      date: "August 2025",
      location: "Main Sanctuary",
      time: "9:00 AM - 6:00 PM",
      description:
        "Join us for a powerful time of apostolic and prophetic impartation.",
      registrationOpen: true,
    },
    {
      id: 2,
      title: "Youth Revival Meeting",
      date: "September 2025",
      location: "Youth Center",
      time: "6:00 PM - 8:00 PM",
      description: "Special revival meeting for young people.",
      registrationOpen: true,
    },
  ];

  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>

      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Flame className="w-8 h-8 text-orange-500" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {event.title}
                </h4>

                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 md:col-span-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{event.description}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  {event.registrationOpen && (
                    <button className="bg-blue-600 hover:bg-blue-700  px-4 py-2 rounded-md font-semibold transition-colors">
                      Register Now
                    </button>
                  )}
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
