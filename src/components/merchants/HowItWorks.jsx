import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Package, Truck, Wallet, BarChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import listProducts from '../../assets/images/merchants/list-products.jpg';
import receiveFulfill from '../../assets/images/merchants/receive-fulfill.jpg';
import deliverEarn from '../../assets/images/merchants/deliver-earn.jpg';
import merchantSignup from '../../assets/images/merchants/merchant-signup.jpg';
import marketWoman from '../../assets/images/merchants/market-woman.jpg';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      title: t('merchants.howItWorks.steps.list.title'),
      text: t('merchants.howItWorks.steps.list.desc'),
      imageUrl: listProducts,
    },
    {
      id: 2,
      title: t('merchants.howItWorks.steps.receive.title'),
      text: t('merchants.howItWorks.steps.receive.desc'),
      imageUrl: receiveFulfill,
    },
    {
      id: 3,
      title: t('merchants.howItWorks.steps.earn.title'),
      text: t('merchants.howItWorks.steps.earn.desc'),
      imageUrl: deliverEarn,
    },
    {
      id: 4,
      title: t('merchants.howItWorks.steps.analyze.title'),
      text: t('merchants.howItWorks.steps.analyze.desc'),
      imageUrl: merchantSignup,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(-10%, 10%); }
            100% { transform: translate(0, 0); }
          }
          @keyframes float-reverse {
            0% { transform: translate(0, 0); }
            50% { transform: translate(10%, -10%); }
            100% { transform: translate(0, 0); }
          }
          .blob-animate-1 {
            animation: float 30s ease-in-out infinite;
          }
          .blob-animate-2 {
            animation: float-reverse 25s ease-in-out infinite;
          }
          .blob-animate-3 {
            animation: float 20s ease-in-out infinite;
          }
        `}
      </style>
      <section
        className="relative py-20 bg-gray-200 text-gray-800 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
            url(${marketWoman})
          `,
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Animated Decorative Blobs */}
        <div className="blob-animate-1 absolute top-[-10rem] left-[-15rem] w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="blob-animate-2 absolute bottom-[-5rem] right-[-10rem] w-96 h-96 bg-teal-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="blob-animate-3 absolute top-[25%] left-[20%] w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 leading-tight">
            {t('merchants.howItWorks.title')} <span className="text-[#00b36b]">{t('merchants.howItWorks.titleHighlight')}</span>
          </h2>

          {/* The backdrop-filter and bg-opacity will apply the glass effect to this container */}
          <div
            className="relative rounded-2xl border border-white/30 bg-cover bg-center shadow-2xl backdrop-blur-lg"
            style={{
              height: '450vh',
              willChange: 'transform',
              backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
              url(${marketWoman})
            `,
            }}
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#00b36b] h-full hidden md:block"></div>

            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={step.id} className="relative flex items-center justify-center mb-20">
                  {/* Card */}
                  <div
                    className={`group w-full md:max-w-xl h-[80vh] rounded-xl shadow-2xl cursor-pointer absolute ${isLeft ? 'md:left-4' : 'md:right-4'}`}
                    style={{ top: `${index * 100 + 10}vh` }}
                    data-aos={isLeft ? 'fade-right' : 'fade-left'}
                    data-aos-duration="1000"
                    data-aos-delay={index * 200}
                  >
                    <img
                      src={step.imageUrl}
                      alt={step.title}
                      className="absolute inset-0 w-full h-full object-contain object-top"
                    />
                    <div className="absolute inset-0 bg-white transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-gray-700 p-6 transition-all duration-700 ease-in-out group-hover:top-3/4 z-10">
                      {index === 0 && <Package size={48} className="text-[#00b36b] mb-4" />}
                      {index === 1 && <Truck size={48} className="text-[#00b36b] mb-4" />}
                      {index === 2 && <Wallet size={48} className="text-[#00b36b] mb-4" />}
                      {index === 3 && <BarChart size={48} className="text-[#00b36b] mb-4" />}
                      <h3 className="text-5xl lg:text-7xl font-bold mb-4 transition-all duration-700 ease-in-out group-hover:text-3xl group-hover:lg:text-5xl">
                        {step.title}
                      </h3>
                      <p className="text-lg">{step.text}</p>
                    </div>
                  </div>

                  {/* Badge */}
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-20 bg-gradient-to-br from-[#00b36b] to-[#00d4aa] shadow-[0_0_20px_rgba(0,179,107,0.5)] md:hidden"
                    style={{ top: `${index * 100 + 8}vh` }}
                  >
                    {step.id}
                  </div>
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full hidden md:flex items-center justify-center text-white font-bold z-20 text-2xl bg-gradient-to-br from-[#00b36b] to-[#00d4aa] shadow-[0_0_20px_rgba(0,179,107,0.5)]"
                    style={{ top: `${index * 100 + 40}vh` }}
                  >
                    {step.id}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;