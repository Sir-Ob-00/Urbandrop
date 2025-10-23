import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Settings, Play, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: <Mail size={48} className="text-white" />,
    title: 'Submit Your Interest',
    description: 'Fill out our advertising form or contact our marketing team to express your interest.',
    details: ['Quick online form', 'Dedicated account manager', 'Custom consultation'],
    gradient: 'from-[#2c4d31] to-[#36b44a]',
    duration: '1-2 days',
  },
  {
    icon: <Settings size={48} className="text-white" />,
    title: 'Choose a Plan',
    description: 'Select your ad type and campaign duration that best fits your marketing goals.',
    details: ['Flexible packages', 'Custom campaigns', 'Budget optimization'],
    gradient: 'from-green-500 to-green-600',
    duration: '1 week',
  },
  {
    icon: <Play size={48} className="text-white" />,
    title: 'Launch & Track',
    description: 'Your ads go live and you can monitor performance in real-time through our dashboard.',
    details: ['Instant activation', 'Live monitoring', 'Performance alerts'],
    gradient: 'from-[#f1be21] to-[#a37c04]',
    duration: 'Ongoing',
  },
  {
    icon: <BarChart3 size={48} className="text-white" />,
    title: 'Optimize & Scale',
    description: 'Use campaign insights to optimize performance and scale successful campaigns.',
    details: ['Detailed analytics', 'A/B testing', 'Performance reports'],
    gradient: 'from-[#f1be21] to-[#2c4d31]',
    duration: 'Continuous',
  },
];

const AdvertiseProcess = () => {
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
            How It <span className="text-[#2c4d31]">Works</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Getting started with Urbandrop advertising is simple. Follow our streamlined process
            to launch your campaign and start reaching customers.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2c4d31] via-[#36b44a] to-[#f1be21]"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-[#2c4d31] rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg border-2 border-[#2c4d31] z-10">
                  {index + 1}
                </div>

                {/* Duration Badge */}
                <div className="absolute -top-4 -right-4 bg-[#2c4d31] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {step.duration}
                </div>

                {/* Icon */}
                <div className={`bg-gradient-to-br ${step.gradient} rounded-3xl p-8 w-32 h-32 mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-dark mb-4">{step.title}</h3>
                  <p className="text-muted mb-6 leading-relaxed">{step.description}</p>

                  {/* Details List */}
                  <ul className="text-left space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-muted">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient} mr-3`}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-8 flex justify-center">
                    <div className="w-8 h-0.5 bg-[#2c4d31]"></div>
                    <div className="w-0 h-0 border-l-4 border-l-[#2c4d31] border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#2c4d31] via-[#36b44a] to-[#f1be21] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Advertising?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the queue of successful brands that have transformed their business with Urbandrop.
              Your first campaign could launch within days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2c4d31] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Request Advertising Quote
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#2c4d31] transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvertiseProcess;