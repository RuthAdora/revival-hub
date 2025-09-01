import React from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Smartphone,
  Building2,
  Heart,
  Gift,
  DollarSign,
} from "lucide-react";

const GivingSection = () => {
  const givingMethods = [
    {
      id: 1,
      name: "mpesa",
      icon: Smartphone,
      description: "Quick and secure mobile payments",
      buttonText: "Give via M-Pesa",
      color: "bg-green-600",
    },
    {
      id: 2,
      name: "online",
      icon: CreditCard,
      description: "Credit/Debit card payments",
      buttonText: "Give Online",
      color: "bg-blue-600",
    },
    {
      id: 3,
      name: "bank",
      icon: Building2,
      description: "Direct bank account transfer",
      buttonText: "Bank Transfer",
      color: "bg-purple-600",
    },
  ];

  const givingOptions = [
    {
      type: "Tithes",
      description: "Honor God with the first 10% of your income",
      icon: Heart,
    },
    {
      type: "Offerings",
      description: "Give over and above your tithe",
      icon: Gift,
    },
    {
      type: "Special Projects",
      description: "Support specific church initiatives",
      icon: DollarSign,
    },
  ];

  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
        Giving / Partner
      </h3>

      {/* Scripture Quote */}
      <div className="bg-orange-50 p-6 rounded-xl shadow-md mb-10">
        <blockquote className="text-blue-800 mb-3 italic text-center">
          "Each one must give as he has decided in his heart, not reluctantly or
          under compulsion, for God loves a cheerful giver."
        </blockquote>
        <div className="flex justify-center items-center py-4">
          <cite className="text-lg font-bold text-blue-900 text-center">
            2 Corinthians 9:7
          </cite>
        </div>
      </div>

      {/* Giving Types */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {givingOptions.map((option, index) => {
          const IconComponent = option.icon;
          return (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <IconComponent className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="font-semibold text-blue-900 mb-2">
                {option.type}
              </h4>
              <p className="text-sm text-blue-800">{option.description}</p>
            </div>
          );
        })}
      </div>

      {/* Giving Methods */}
      <div className="space-y-6 mb-10 text-center">
        <h4 className="text-lg font-semibold text-blue-900">
          Choose Your Giving Method
        </h4>

        <div className="grid md:grid-cols-2 gap-4">
          {givingMethods.slice(0, 2).map((method) => {
            const IconComponent = method.icon;
            return (
              <Link
                key={method.id}
                to={`/giving/${method.name}`}
                className={`${method.color} hover:opacity-90 p-4 rounded-xl shadow-md font-semibold transition-all duration-200 flex items-center justify-center space-x-3 text-white`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{method.buttonText}</span>
              </Link>
            );
          })}
        </div>

        <Link
          to="/giving/bank"
          className="w-full bg-purple-600 hover:bg-purple-700 p-4 rounded-xl shadow-md font-semibold transition-colors flex items-center justify-center space-x-3 text-white"
        >
          <Building2 className="w-5 h-5" />
          <span>Bank Transfer</span>
        </Link>
      </div>

      {/* Partnership Information */}
      <div className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h4 className="text-lg font-semibold text-blue-900 mb-3">
          Become a Partner
        </h4>
        <p className="text-blue-800 mb-4">
          Join our ministry partners who are making a significant impact in
          advancing God's kingdom through regular giving and prayer support.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/giving/partner"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold transition-colors text-white shadow-md"
          >
            Partner With Us
          </Link>
          <a
            href="https://wa.me/+254111755539?text=Hello%20I%20would%20like%20to%20learn%20more%20about%20partnership"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-800 font-semibold px-6 py-3"
          >
            Learn More About Partnership
          </a>
        </div>
      </div>
    </div>
  );
};

export default GivingSection;
