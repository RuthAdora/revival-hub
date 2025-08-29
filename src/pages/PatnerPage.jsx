import React from "react";
import { Link } from "react-router-dom";

const PartnerPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Partner With Us
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Join our ministry partners who are making a significant impact in
        advancing God's kingdom. Your partnership helps us fund programs,
        outreach, and church growth initiatives.
      </p>
      <div className="text-center">
        <Link
          to="/giving"
          className="text-blue-600 hover:underline font-semibold"
        >
          Back to Giving
        </Link>
      </div>
    </div>
  );
};

export default PartnerPage;
