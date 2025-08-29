import React from "react";
import { useParams, Link } from "react-router-dom";
import { CreditCard, Smartphone, Building2 } from "lucide-react";

const givingMethodsData = {
  mpesa: {
    name: "M-Pesa",
    icon: Smartphone,
    description: "Quick and secure mobile payments via M-Pesa.",
    image: "/mpesa.png", // 👈 add your image path here
    instructions: [
      "Go to M-Pesa on your phone",
      "Select 'Lipa na M-Pesa'",
      "Enter Paybill Number: 123456",
      "Enter Account Number: Your Name or Purpose",
      "Enter Amount and Send",
    ],
    color: "bg-green-600",
  },

  online: {
    name: "Online Payment",
    icon: CreditCard,
    description: "Give securely using your credit or debit card online.",
    image: "/paypal.png", // 👈 add your image path here
    instructions: [
      "Click 'Proceed to Payment'",
      "Enter your card details",
      "Confirm the amount",
      "Submit and wait for confirmation",
    ],
    color: "bg-blue-600",
  },
  bank: {
    name: "Bank Transfer",
    icon: Building2,
    description: "Transfer directly to our bank account.",
    instructions: [
      "Go to your bank or online banking",
      "Add a new payee: RevivalHub Global Center",
      "Account Number: 1234567890",
      "Reference: Your Name + Purpose",
      "Complete the transfer",
    ],
    color: "bg-purple-600",
  },
};

const GivingDetails = () => {
  const { method } = useParams();
  const givingMethod = givingMethodsData[method];

  if (!givingMethod) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Giving Method Not Found
        </h2>
        <Link to="/" className="text-blue-600 hover:underline font-semibold">
          Go Back to Giving Section
        </Link>
      </div>
    );
  }

  /*const IconComponent = givingMethod.icon; */

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        {/* Show image if it exists */}
        {givingMethod.image && (
          <img
            src={givingMethod.image}
            alt={givingMethod.name}
            className="w-32 h-32 mx-auto mb-4 object-contain"
          />
        )}

        {/* Icon (optional, can keep or remove if you want only the image) */}
        {/*  <IconComponent
          className={`w-12 h-12 mx-auto ${givingMethod.color} mb-2`}
        />

        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {givingMethod.name}
        </h2> */}
        <p className="text-gray-600">{givingMethod.description}</p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Instructions:
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {givingMethod.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/giving"
          className="text-blue-600 hover:underline font-semibold"
        >
          Back to Giving Methods
        </Link>
      </div>
    </div>
  );
};

export default GivingDetails;
