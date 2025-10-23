import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dish1 from "../../assets/images/hero/food.png";
import dish2 from "../../assets/images/hero/wele.png";
import dish3 from "../../assets/images/hero/bag.png";
import dish4 from "../../assets/images/hero/food.png";

const HeroSection = () => {
  const menuItems = [
    {
      title: "CAVIAR EXPRESS",
      desc: "Norem ipsum dolor sit amet",
      img: dish1,
    },
    {
      title: "BLUE BERRY",
      desc: "Norem ipsum dolor sit amet",
      img: dish2,
    },
    {
      title: "BEEF STEAK",
      desc: "Norem ipsum dolor sit amet",
      img: dish3,
    },
    {
      title: "STRAWBERRY FINX",
      desc: "Norem ipsum dolor sit amet",
      img: dish4,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [mainImage, setMainImage] = useState(menuItems[0].img);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % menuItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [menuItems.length]);

  useEffect(() => {
    setMainImage(menuItems[current].img);
  }, [current, menuItems]);

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 py-10 md:py-16 space-y-10 lg:space-y-0 bg-[#f2f5f9]" style={{paddingTop: '140px'}}>
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md space-y-6 text-center lg:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-[#5CB35E]">Discover </span>
          <br />
          <span className="text-[#183A37]">the rich Ethnic</span>
          <br />
          <span className="text-[#5CB35E]">Flavors</span>
        </h1>
        <p className="text-[#183A37]">
          Savor the bold, authentic flavours of Asia, Africa, Eastern Europe, and the Caribbean with every bite, delivered fresh and fast to your home. From the savannas to the coasts, experience the diverse Ethnic tastes, all just a click away.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a href="/404" className="bg-[#5CB35E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4a954d] transition-all">
            Order Now
          </a>
          <a href="/become-merchant" className="px-6 py-3 rounded-full border border-[#5CB35E] text-[#5CB35E] hover:bg-[#5CB35E] hover:text-white transition-all">
            Become a Merchant
          </a>
        </div>
      </motion.div>

      {/* Center Image */}
      <div className="relative flex justify-center items-center">
        <div className="absolute w-64 h-64 md:w-[450px] md:h-[450px] rounded-full bg-[#5CB35E8C] opacity-30"></div>
        <img
          src={mainImage}
          alt="Main Dish"
          className="relative w-60 h-60 md:w-[420px] md:h-[420px] object-cover rounded-full shadow-lg z-10 transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Right Section - Menu */}
      <div className="w-full max-w-sm">
        <div className="relative space-y-5">
          {menuItems.map((item, index) => (
            <div
              key={item.title}
              onClick={() => setCurrent(index)}
              className={`flex items-center rounded-l-full cursor-pointer transition-all duration-300 ease-in-out pr-5 py-3 md:py-4 ${
                current === index
                  ? "bg-[#5CB35E] text-white shadow-lg -translate-x-6 md:-translate-x-10"
                  : "bg-white text-[#183A37] hover:shadow-md"
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full ml-3 flex-shrink-0 ${
                  current === index ? "border-2 border-white" : ""
                }`}
              />
              <div className="ml-4">
                <h3 className={`font-bold ${current === index ? "text-white" : "text-[#183A37]"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${current === index ? "text-white/90" : "text-[#879EA4]"}`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
