import React from "react";
import BetaSignupForm from "../components/BetaSignupForm";
import SEO from "../components/common/SEO";
import betaBackground from "../assets/images/beta/beta background.jpeg";

const BetaSignupPage = () => {
  return (
    <>
      <SEO
        title="Join UrbanDrop Beta | Early Access"
        description="Join the UrbanDrop beta program to get early access and exclusive deals on ethnic groceries and recipes. Sign up today!"
      />

      {/* Hidden headings for proper SEO document structure */}
      <h1 className="sr-only">Join UrbanDrop Beta | Early Access</h1>
      <h2 className="sr-only">Beta Signup Form</h2>

      <div 
        className="w-full min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat bg-fixed font-sans"
        style={{ backgroundImage: `url('${betaBackground}')` }}
      >
        {/* Form Section */}
        <div className="w-full max-w-xl pointer-events-auto">
          <BetaSignupForm source="beta-page" successMessageTitle="You're on the list 🚀" />
        </div>
      </div>
    </>
  );
};

export default BetaSignupPage;
