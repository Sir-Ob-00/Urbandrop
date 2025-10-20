import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, User, Mail, MessageSquare, Tag, Phone } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'customer', label: 'Customer Support' },
    { value: 'merchant', label: 'Merchant Support' },
    { value: 'advertising', label: 'Advertising & Partnerships' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Send Us a <span className="text-primary">Message</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Have a question or need assistance? We'd love to hear from you.
            Fill out the form below and we'll get back to you shortly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl p-8 shadow-xl"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={20} className="text-muted" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={20} className="text-muted" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-dark mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Tag size={20} className="text-muted" />
                    </div>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white appearance-none"
                    >
                      {subjectOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <MessageSquare size={20} className="text-muted" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-darkGreen transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="bg-green-100 rounded-full p-6 w-fit mx-auto mb-6">
                  <CheckCircle size={48} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">Message Sent Successfully!</h3>
                <p className="text-muted">
                  Thanks for reaching out! We'll respond to your message within 2 hours.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-primary to-primaryLight rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Need Immediate Help?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <a href="tel:+441234567890" className="text-white/80 hover:text-white transition-colors">
                      +44 123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <a href="mailto:hello@urbandrop.co.uk" className="text-white/80 hover:text-white transition-colors">
                      hello@urbandrop.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-dark mb-4">Response Times</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted">Phone calls</span>
                  <span className="font-semibold text-primary">Immediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Emails</span>
                  <span className="font-semibold text-primary">&lt;2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Live chat</span>
                  <span className="font-semibold text-primary">Instant</span>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-background rounded-2xl p-6">
              <h4 className="font-bold text-dark mb-4">Looking for Quick Answers?</h4>
              <p className="text-muted mb-4">
                Check out our comprehensive FAQ section for instant answers to common questions.
              </p>
              <button className="text-primary font-semibold hover:text-darkGreen transition-colors">
                View FAQ →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;