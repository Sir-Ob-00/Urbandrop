import React from "react";
import BetaSignupForm from "../components/BetaSignupForm";

const BetaSignupPage = () => {
  return (
    <div className="w-full max-w-xl mx-auto py-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-dark tracking-tight mb-4">
          Join the UrbanDrop Beta Program
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
          Help shape the future of UrbanDrop. Join our beta program and get early access to test the platform before the public release.
        </p>
      </div>

      {/* Form Section */}
      <BetaSignupForm />
    </div>
  );
};

export default BetaSignupPage;
