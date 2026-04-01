import React from "react";
import BetaSignupForm from "../components/BetaSignupForm";
import SEO from "../components/common/SEO";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import betaBackground from "../assets/images/beta/beta background.jpeg";

const BetaSignupPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Join UrbanDrop Beta | Early Access"
        description="Join the UrbanDrop beta program to get early access and exclusive deals on ethnic groceries and recipes. Sign up today!"
      />

      <Navbar />

      {/* Hidden headings for proper SEO document structure */}
      <h1 className="sr-only">Join UrbanDrop Beta | Early Access</h1>
      <h2 className="sr-only">Beta Signup Form</h2>

      <div 
        className="flex-grow w-full flex items-center justify-center p-4 pt-28 pb-12 bg-cover bg-center bg-no-repeat bg-fixed font-sans"
        style={{ backgroundImage: `url('${betaBackground}')` }}
      >
        {/* Form Section */}
        <div className="w-full max-w-xl pointer-events-auto">
          <BetaSignupForm source="beta-page" successMessageTitle="You've Been Added!" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BetaSignupPage;
