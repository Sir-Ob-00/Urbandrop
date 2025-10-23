import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: <Star size={32} className="text-white" />,
    weeklyPrice: 'GHS 200',
    monthlyPrice: 'GHS 800',
    description: 'Perfect for small businesses testing advertising',
    gradient: 'from-[#2c4d31] to-[#36b44a]',
    features: [
      'Banner placement',
      'Basic targeting options',
      'Performance reports',
      'Email support',
      'Standard placement',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    icon: <Zap size={32} className="text-white" />,
    weeklyPrice: 'GHS 500',
    monthlyPrice: 'GHS 1,800',
    description: 'Ideal for growing brands expanding reach',
    gradient: 'from-[#f1be21] to-[#2c4d31]',
    features: [
      'Banner + featured listings',
      'Advanced targeting',
      'Real-time analytics',
      'Priority support',
      'Premium placement',
      'A/B testing',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    icon: <Crown size={32} className="text-white" />,
    weeklyPrice: 'GHS 1,200',
    monthlyPrice: 'GHS 4,200',
    description: 'Complete solution for serious advertisers',
    gradient: 'from-[#36b44a] to-[#f1be21]',
    features: [
      'Multiple placements',
      'Custom campaign strategy',
      'Dedicated account manager',
      'Advanced analytics dashboard',
      'VIP support',
      'Custom creative design',
      'Competitor analysis',
      'ROI optimization',
    ],
    popular: false,
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const getCurrentPrice = (plan) => {
    return billingCycle === 'weekly' ? plan.weeklyPrice : plan.monthlyPrice;
  };

  const getCurrentDuration = () => {
    return billingCycle === 'weekly' ? 'per week' : 'per month';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#fff5ea] via-[#fcf7de] to-[#ddeab9] relative overflow-hidden">
      {/* Grocery Pattern Background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232c4d31' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c4d31] mb-6">
            Pricing & <span className="text-[#2c4d31]">Plans</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Choose the perfect advertising package for your business goals and budget
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${billingCycle === 'weekly' ? 'text-[#2c4d31] font-semibold' : 'text-[#2c4d31]/70'}`}>
              Weekly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'weekly' : 'monthly')}
              className="relative w-14 h-7 bg-[#2c4d31]/20 rounded-full transition-colors"
            >
              <div className={`absolute top-1 w-5 h-5 bg-[#2c4d31] rounded-full shadow-md transition-transform ${
                billingCycle === 'monthly' ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-[#2c4d31] font-semibold' : 'text-[#2c4d31]/70'}`}>
              Monthly
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-[#2c4d31] scale-105' : ''
              }`}
            >

              {/* Header */}
              <div className={`bg-gradient-to-br ${plan.gradient} rounded-t-3xl p-8 text-white text-center relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <div className={`bg-white/20 rounded-2xl p-4 w-fit mx-auto mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-black mb-1">{getCurrentPrice(plan)}</div>
                  <div className="text-white/80">{getCurrentDuration()}</div>
                  <p className="text-white/90 text-sm mt-4">{plan.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`bg-gradient-to-r ${plan.gradient} rounded-full p-1`}>
                        <Check size={14} className="text-white" />
                      </div>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${plan.gradient} text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2`}>
                  Get Started
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#2c4d31] via-[#36b44a] to-[#f1be21] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Have unique requirements or a larger campaign? Our team creates bespoke advertising solutions
              tailored to your specific business needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2c4d31] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Get Custom Quote
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#2c4d31] transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
            <div className="flex items-center gap-3 text-muted">
              <div className="bg-green-100 rounded-full p-2">
                <Check size={20} className="text-green-600" />
              </div>
              <span className="font-medium">30-day money-back guarantee on all plans</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;