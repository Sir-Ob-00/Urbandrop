import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';

import instantOrdersImg from '../../assets/images/merchants/instant order.jpg';
import fastDeliveryImg from '../../assets/images/merchants/faster delivery.jpg';
import realTimeEarningsImg from '../../assets/images/merchants/real-time-earnings.jpg';
import analyticsImg from '../../assets/images/merchants/analytic.jpg';
import securePaymentsImg from '../../assets/images/merchants/Secure-payment.jpg';
import customerSupportImg from '../../assets/images/merchants/customer support.jpg';

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
              <h3 className="text-4xl md:text-8xl lg:text-9xl font-extrabold text-center tracking-tight drop-shadow-2xl">
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
