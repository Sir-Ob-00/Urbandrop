import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Shield, Receipt, RotateCcw, Wallet, Zap, Globe, CheckCircle } from 'lucide-react';

const SeamlessPayments = () => {
  const paymentMethods = [
    {
      icon: <CreditCard size={32} className="text-white" />,
      title: 'Credit & Debit Cards',
      description: 'Visa, Mastercard, American Express accepted worldwide',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Smartphone size={32} className="text-white" />,
      title: 'Mobile Money',
      description: 'MTN Mobile Money, Airtel Money, and other local wallets',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: <Wallet size={32} className="text-white" />,
      title: 'Digital Wallets',
      description: 'Apple Pay, Google Pay, PayPal, and more',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Receipt size={32} className="text-white" />,
      title: 'Instant Receipts',
      description: 'Digital receipts sent immediately to your email and app',
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  const securityFeatures = [
    {
      icon: <Shield size={32} className="text-white" />,
      title: 'Bank-Level Security',
      description: '256-bit SSL encryption protects all transactions',
    },
    {
      icon: <RotateCcw size={32} className="text-white" />,
      title: 'Easy Refunds',
      description: 'Quick refund processing for any issues',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full font-semibold mb-6">
            <Shield size={16} />
            <span>Secure & Simple</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-dark mb-6">
            Multiple Payment
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              Options
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Pay your way with our comprehensive payment system. Secure, fast, and transparent
            transactions with instant receipts and easy refunds when needed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >

                  <div className={`bg-gradient-to-br ${method.gradient} rounded-2xl p-4 w-fit mb-4`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{method.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{method.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Security Features */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-dark mb-6">Security & Trust</h3>
              <div className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-3 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{feature.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                <div className="text-muted text-sm">Success Rate</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary mb-1">&lt;2min</div>
                <div className="text-muted text-sm">Processing</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-muted text-sm">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {/* Payment Interface Mockup */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-dark">Choose Payment Method</h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Secure
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border-2 border-primary rounded-2xl bg-primary/5">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-2">
                          <CreditCard size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-dark">•••• •••• •••• 4242</div>
                          <div className="text-muted text-sm">Expires 12/25</div>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:border-primary transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-2">
                          <Smartphone size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-dark">MTN Mobile Money</div>
                          <div className="text-muted text-sm">+233 XX XXX XXXX</div>
                        </div>
                      </div>
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:border-primary transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-2">
                          <Wallet size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-dark">Apple Pay</div>
                          <div className="text-muted text-sm">•••• •••• •••• 1234</div>
                        </div>
                      </div>
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted">Subtotal</span>
                      <span className="font-semibold">£24.99</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted">Delivery</span>
                      <span className="font-semibold text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold border-t border-gray-200 pt-2">
                      <span>Total</span>
                      <span>£24.99</span>
                    </div>
                  </div>

                  {/* Pay Button */}
                  <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105">
                    Pay Securely
                  </button>
                </div>
              </div>

              {/* Floating Security Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-green-500 text-white rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <Shield size={24} className="mx-auto mb-1" />
                  <div className="text-sm font-medium">SSL Secured</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-dark text-center mb-12">
            Trusted by Millions Worldwide
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">
                <Shield size={32} className="text-primary" />
              </div>
              <div className="font-bold text-dark mb-1">PCI DSS Compliant</div>
              <div className="text-muted text-sm">Highest security standards</div>
            </div>
            <div>
              <div className="text-4xl mb-4">
                <Zap size={32} className="text-primary" />
              </div>
              <div className="font-bold text-dark mb-1">Instant Processing</div>
              <div className="text-muted text-sm">No waiting, no delays</div>
            </div>
            <div>
              <div className="text-4xl mb-4">
                <Globe size={32} className="text-primary" />
              </div>
              <div className="font-bold text-dark mb-1">Global Support</div>
              <div className="text-muted text-sm">Available in 50+ countries</div>
            </div>
            <div>
              <div className="text-4xl mb-4">
                <CheckCircle size={32} className="text-primary" />
              </div>
              <div className="font-bold text-dark mb-1">Zero Hidden Fees</div>
              <div className="text-muted text-sm">Transparent pricing always</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SeamlessPayments;