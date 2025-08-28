import React from "react";
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
      name: "Online",
      icon: CreditCard,
      description: "Credit/Debit card payments",
      buttonText: "Give Online",
      color: "bg-blue-600",
    },
    {
      id: 3,
      name: "Bank Transfer",
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
    <div className="py-12 ">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Giving / Partner
      </h3>

      {/* Scripture Quote */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
        <blockquote className="text-gray-700 mb-3 italic text-center">
          "Each one must give as he has decided in his heart, not reluctantly or
          under compulsion, for God loves a cheerful giver."
        </blockquote>
        <div className="flex justify-center items-center py-6">
          <cite className="text-lg font-bold text-gray-800 text-center">
            2 Corinthians 9:7
          </cite>
        </div>
      </div>

      {/* Giving Types */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {givingOptions.map((option, index) => {
          const IconComponent = option.icon;
          return (
            <div
              key={index}
              className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <IconComponent className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">
                {option.type}
              </h4>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
          );
        })}
      </div>

      {/* Giving Methods */}
      <div className="space-y-4 mb-6 text-center">
        <h4 className="text-lg font-semibold text-gray-800 ">
          Choose Your Giving Method
        </h4>

        <div className="grid md:grid-cols-2 gap-4">
          {givingMethods.slice(0, 2).map((method) => {
            const IconComponent = method.icon;
            return (
              <button
                key={method.id}
                className={`${method.color} hover:opacity-90  p-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-3`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{method.buttonText}</span>
              </button>
            );
          })}
        </div>

        <button className="w-full bg-purple-600 hover:bg-purple-700  p-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-3">
          <Building2 className="w-5 h-5" />
          <span>Bank Transfer</span>
        </button>
      </div>

      {/* Partnership Information */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          Become a Partner
        </h4>
        <p className="text-gray-600 mb-4">
          Join our ministry partners who are making a significant impact in
          advancing God's kingdom through regular giving and prayer support.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-orange-500 hover:bg-orange-600  px-6 py-3 rounded-md font-semibold transition-colors">
            Partner With Us
          </button>
          <button className="text-orange-600 hover:text-orange-800 font-semibold px-6 py-3">
            Learn More About Partnership
          </button>
        </div>
      </div>

      {/* Bank Details (Hidden by default, can be toggled) */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h5 className="font-semibold text-gray-800 mb-2">
          Bank Transfer Details
        </h5>
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-medium">Bank:</span> Example Bank
          </p>
          <p>
            <span className="font-medium">Account Name:</span> RevivalHub Global
            Center
          </p>
          <p>
            <span className="font-medium">Account Number:</span> 1234567890
          </p>
          <p>
            <span className="font-medium">Reference:</span> Your Name + Purpose
            (e.g. Tithe/Offering)
          </p>
        </div>
      </div>
    </div>
  );
};

export default GivingSection;
