import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  { title: "Instant Orders", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" },
  { title: "Fast Delivery", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" },
  { title: "Real-time Earnings", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop" },
  { title: "Analytics Dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { title: "Secure Payments", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop" },
  { title: "Customer Support", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" },
];

const MerchantFeatures = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panelsArr = gsap.utils.toArray(".panel");
      let totalPanels = panelsArr.length;

      gsap.to(panelsArr, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalPanels - 1),
          start: "top top",
          end: () => "+=" + (sliderRef.current.offsetWidth - window.innerWidth),
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gray-900 text-white">
      {/* Header Overlay */}
      <div className="absolute top-0 left-0 w-full z-20 pt-12 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center drop-shadow-lg">
          Merchant <span className="text-[#00b36b]">Features</span>
        </h2>
      </div>

      {/* Horizontal Slider */}
      <div ref={sliderRef} className="flex h-screen" style={{ width: `${panels.length * 100}%` }}>
        {panels.map((p, i) => (
          <div key={i} className="panel w-screen h-screen relative flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex items-center justify-center h-full px-6">
              <h3 className="text-4xl md:text-7xl font-extrabold text-center tracking-tight">
                {p.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchantFeatures;
