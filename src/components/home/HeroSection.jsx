import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#5CB35E] via-[#4a954d] to-[#3d7c40] text-white overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white rounded-full mix-blend-overlay animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay animation-delay-2000 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-blue-300 rounded-full mix-blend-overlay animation-delay-4000 animate-blob"></div>
      </div>

      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-8xl xl:text-9xl font-extrabold leading-tight mb-8">
          Discover <br />
          <span className="text-yellow-300">the rich Ethnic</span>
          Flavors
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="/order" className="bg-yellow-400 text-[#183A37] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg">
            Order Now
          </a>
          <a href="/become-merchant" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#183A37] transition-all shadow-lg">
            Become a Merchant
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
