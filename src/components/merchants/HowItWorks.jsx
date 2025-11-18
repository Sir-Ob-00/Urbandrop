import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Package, Truck, Wallet, BarChart } from 'lucide-react';
import listProducts from '../../assets/images/merchants/list-products.jpg';
import receiveFulfill from '../../assets/images/merchants/receive-fulfill.jpg';
import deliverEarn from '../../assets/images/merchants/deliver-earn.jpg';
import merchantSignup from '../../assets/images/merchants/merchant-signup.jpg';

const steps = [
  {
    id: 1,
    title: 'List Your Products',
    text: 'Easily upload and showcase your unique products to a vast audience.',
    imageUrl: listProducts,
  },
  {
    id: 2,
    title: 'Receive Orders',
    text: 'Get instant notifications for new orders and manage them efficiently.',
    imageUrl: receiveFulfill,
  },
  {
    id: 3,
    title: 'Earn & Grow',
    text: 'Process payments securely and watch your earnings grow with every sale.',
    imageUrl: deliverEarn,
  },
  {
    id: 4,
    title: 'Analyze Performance',
    text: 'Access detailed analytics to understand your sales and customer behavior.',
    imageUrl: merchantSignup,
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto md:px-12">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 leading-tight">
          How It <span className="text-[#00b36b]">Works</span>
        </h2>

        <div className="relative" style={{ height: '450vh' }}>
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#00b36b] h-full hidden md:block"></div>

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={step.id} className="relative flex items-center justify-center mb-20">
                {/* Card */}
                <div
                  className={`group w-full md:max-w-xl h-[80vh] rounded-xl shadow-2xl cursor-pointer absolute left-1/2 transform -translate-x-1/2 ${isLeft ? 'md:left-4 md:translate-x-0' : 'md:right-4 md:translate-x-0'}`}
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
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-lg">{step.text}</p>
                  </div>
                </div>

                {/* Badge */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-20 md:w-16 md:h-16 md:text-2xl bg-gradient-to-br from-[#00b36b] to-[#00d4aa] shadow-[0_0_20px_rgba(0,179,107,0.5)] md:hidden"
                  style={{ top: `${index * 100 + 10}vh` }}
                >
                  {step.id}
                </div>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-20 md:w-16 md:h-16 md:text-2xl bg-gradient-to-br from-[#00b36b] to-[#00d4aa] shadow-[0_0_20px_rgba(0,179,107,0.5)] md:block"
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
  );
};

export default HowItWorks;