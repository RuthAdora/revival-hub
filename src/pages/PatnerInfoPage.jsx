import React from "react";
import { Link } from "react-router-dom";

const PartnerInfoPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Partnership Information
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Learn more about how to become a partner with our ministry. Partners
        receive updates, prayer support, and opportunities to engage in church
        projects.
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

export default PartnerInfoPage;
