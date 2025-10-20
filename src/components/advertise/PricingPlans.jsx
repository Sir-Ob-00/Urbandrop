import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: <Star size={32} className="text-white" />,
    price: 'GHS 200',
    duration: 'per week',
    description: 'Perfect for small businesses testing advertising',
    gradient: 'from-blue-500 to-blue-600',
    features: [
      '1 week banner placement',
      'Basic targeting options',
      'Performance reports',
      'Email support',
      'Standard placement',
    ],
    popular: false,
    savings: null,
  },
  {
    name: 'Growth',
    icon: <Zap size={32} className="text-white" />,
    price: 'GHS 600',
    duration: 'per month',
    description: 'Ideal for growing brands expanding reach',
    gradient: 'from-green-500 to-green-600',
    features: [
      '1 month banner + featured listings',
      'Advanced targeting',
      'Real-time analytics',
      'Priority support',
      'Premium placement',
      'A/B testing',
    ],
    popular: true,
    savings: 'Save 15%',
  },
  {
    name: 'Premium',
    icon: <Crown size={32} className="text-white" />,
    price: 'GHS 1,500',
    duration: 'per 3 months',
    description: 'Complete solution for serious advertisers',
    gradient: 'from-purple-500 to-purple-600',
    features: [
      '3 months multiple placements',
      'Custom campaign strategy',
      'Dedicated account manager',
      'Advanced analytics dashboard',
      'VIP support',
      'Custom creative design',
      'Competitor analysis',
      'ROI optimization',
    ],
    popular: false,
    savings: 'Save 25%',
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="py-20 bg-gradient-to-br from-background via-white to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Pricing & <span className="text-primary">Plans</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Choose the perfect advertising package for your business goals and budget
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${billingCycle === 'weekly' ? 'text-primary font-semibold' : 'text-muted'}`}>
              Weekly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'weekly' : 'monthly')}
              className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors"
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                billingCycle === 'monthly' ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-primary font-semibold' : 'text-muted'}`}>
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
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Savings Badge */}
              {plan.savings && (
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {plan.savings}
                </div>
              )}

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
                  <div className="text-4xl font-black mb-1">{plan.price}</div>
                  <div className="text-white/80">{plan.duration}</div>
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
          <div className="bg-gradient-to-r from-primary via-primaryLight to-primary rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Have unique requirements or a larger campaign? Our team creates bespoke advertising solutions
              tailored to your specific business needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Get Custom Quote
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all">
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