import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';

const instantOrdersImg = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219739/instant_order_nvpq6b.avif';
const fastDeliveryImg = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219738/faster_delivery_fysb3l.jpg';
const realTimeEarningsImg = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219732/real-time-earnings_rsctgs.avif';
const analyticsImg = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219735/analytic_qbue0n.jpg';
const securePaymentsImg = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219735/Secure-payment_s2g6c7.avif';
const customerSupportImg = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777219736/customer_support_x6yhx8.jpg';

gsap.registerPlugin(ScrollTrigger);

const MerchantFeatures = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  const panels = [
    { title: t('merchants.features.instantOrders'), image: instantOrdersImg },
    { title: t('merchants.features.fastDelivery'), image: fastDeliveryImg },
    { title: t('merchants.features.realTimeEarnings'), image: realTimeEarningsImg },
    { title: t('merchants.features.analytics'), image: analyticsImg },
    { title: t('merchants.features.securePayments'), image: securePaymentsImg },
    { title: t('merchants.features.customerSupport'), image: customerSupportImg },
  ];

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
          // snap removed for manual control
          start: "top top",
          // Increase scroll distance to 3x the width for slower, smoother movement
          end: () => "+=" + (sliderRef.current.offsetWidth - window.innerWidth) * 3,
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gray-900 text-white">
      {/* Horizontal Slider */}
      <div ref={sliderRef} className="flex h-screen" style={{ width: `${panels.length * 100}%` }}>

        {/* Content Panels */}
        {panels.map((p, i) => (
          <div key={i} className="panel w-screen h-screen relative flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex items-center justify-center h-full px-6">
              <h2 className="text-center drop-shadow-2xl lg:text-8xl xl:text-9xl">
                {p.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchantFeatures;
