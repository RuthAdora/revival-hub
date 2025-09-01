import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Book,
  Award,
  Clock,
  MapPin,
} from "lucide-react";

const AboutPage = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Love & Unity",
      description:
        "We are committed to loving God and loving people, creating a community where everyone belongs.",
    },
    {
      icon: Book,
      title: "Biblical Truth",
      description:
        "We stand firmly on the Word of God as our foundation for faith and practice.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Our vision extends beyond our local community to impact nations for Christ.",
    },
    {
      icon: Users,
      title: "Empowerment",
      description:
        "We believe in raising, equipping, and releasing believers to fulfill their divine purpose.",
    },
  ];

  const leadership = [
    {
      name: "Apostle Steve",
      role: "President and Founder",
      description: "Leading with apostolic grace and prophetic insight.",
      image: "/president1.jpg",
    },
  ];

  const milestones = [
    {
      year: "1. School of Revival & Equipping",

      description:
        "Training and activating believers in apostolic, prophetic, and leadership dimensions.",
    },
    {
      year: "2. Intercession Watch & Worship Altar",

      description:
        "Continuous prayer and prophetic worship for territorial transformation.",
    },
    {
      year: "3. Healing & Deliverance Rooms",

      description:
        "A place of inner healing, spiritual freedom, and supernatural restoration.",
    },
    {
      year: "4. Prophetic Counsel & Mentorship",

      description:
        "Interpretation of dreams, prophetic direction, and mentorship for spiritual growth.",
    },
    {
      year: "5. Outreach & Missions",

      description:
        "Street evangelism, church planting, and cross-border missions.",
    },
    {
      year: "6. Media & Digital Impact",

      description:
        " Spreading the fire through YouTube, TikTok, live broadcasts, and podcasts.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-600  py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-200">
            RevivalHub Global Center is an apostolic and prophetic equipping
            base, mandated by God to host His presence, raise Kingdom
            ambassadors, and transform nations through the power of the Holy
            Spirit. We are a center for revival fire, discipleship, healing, and
            global influence.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We exist to: <br /> • Host God's tangible presence through
                worship and intercession • Train and activate the fivefold
                ministry gifts • Provide healing, deliverance, and prophetic
                guidance • Equip the saints for Kingdom exploits • Raise and
                release apostolic hubs across the nations
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To ignite and sustain revival by equipping believers, empowering
                leaders, and transforming nations through the power of the Holy
                Spirit.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Values
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Biblical integrity, prophetic accuracy, apostolic authority, and
                passionate love for God and His people guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These fundamental principles shape our ministry and guide our
              decisions as we pursue God's heart for revival.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <IconComponent className="w-12 h-12 text-orange-500 mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              God has placed an anointed leader who carries His heart for
              revival and transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="text-center bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="leader-img"
                />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {leader.name}
                </h4>
                <p className="text-orange-600 font-medium mb-3">
                  {leader.role}
                </p>
                <p className="text-gray-600 mb-4">{leader.description}</p>

                {/* 👇 Add More button */}
                {leader.role.toLowerCase().includes("president") && (
                  <Link
                    to="/president"
                    className="inline-block bg-orange-500  px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors"
                  >
                    More
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              CORE DEPARTMENTS
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2 md:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center mb-3">
                        <Clock className="w-5 h-5 text-orange-500 mr-2" />
                        <span className="font-bold text-orange-600">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        {milestone.event}
                      </h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-md relative z-10"></div>

                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Join Our Family
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Whether you're seeking spiritual growth, looking for a church home,
            or feeling called to ministry, we believe God has a place for you in
            His kingdom purposes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#000080] text-white px-6 py-3 rounded-full hover:bg-blue-900 transition text-center shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
