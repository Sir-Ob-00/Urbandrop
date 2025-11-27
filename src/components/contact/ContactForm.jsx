import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, User, Mail, MessageSquare, Tag, Phone, MapPin, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const subjectOptions = [
    { value: '', label: '' },
    { value: 'customer', label: 'Customer Support' },
    { value: 'merchant', label: 'Merchant Support' },
    { value: 'advertising', label: 'Advertising & Partnerships' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <section className="py-24 bg-[#fff5ea] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Contact Info Sidebar */}
          <motion.div
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "Call Us", content: "+44 123 456 7890", link: "tel:+441234567890" },
                { icon: Mail, title: "Email Us", content: "hello@urbandrop.co.uk", link: "mailto:hello@urbandrop.co.uk" },
                { icon: MapPin, title: "Visit Us", content: "123 Urban Street, London, UK", link: "#" },
                { icon: Clock, title: "Working Hours", content: "Mon - Fri: 9am - 6pm", link: null }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all ${item.link ? 'hover:bg-white hover:shadow-lg cursor-pointer' : ''}`}
                  whileHover={item.link ? { scale: 1.02 } : {}}
                >
                  <div className="bg-white p-3 rounded-full shadow-sm text-[#5CB35E]">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Decorative Background Blob */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#5CB35E]/5 rounded-full blur-3xl" />

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name ? '-top-2.5 text-xs bg-white px-2 text-[#5CB35E]' : 'top-4 text-gray-400'}`}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#5CB35E] focus:border-transparent focus:bg-white outline-none transition-all"
                      />
                      <User className="absolute right-4 top-4 text-gray-400" size={20} />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email ? '-top-2.5 text-xs bg-white px-2 text-[#5CB35E]' : 'top-4 text-gray-400'}`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#5CB35E] focus:border-transparent focus:bg-white outline-none transition-all"
                      />
                      <Mail className="absolute right-4 top-4 text-gray-400" size={20} />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'subject' || formData.subject ? '-top-2.5 text-xs bg-white px-2 text-[#5CB35E]' : 'top-4 text-gray-400'}`}>
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#5CB35E] focus:border-transparent focus:bg-white outline-none transition-all appearance-none"
                    >
                      {subjectOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <Tag className="absolute right-4 top-4 text-gray-400" size={20} />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message ? '-top-2.5 text-xs bg-white px-2 text-[#5CB35E]' : 'top-4 text-gray-400'}`}>
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#5CB35E] focus:border-transparent focus:bg-white outline-none transition-all resize-none"
                    />
                    <MessageSquare className="absolute right-4 top-4 text-gray-400" size={20} />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1a1a1a] text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all transform hover:scale-[1.01] shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 flex flex-col items-center justify-center h-full"
                >
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={48} className="text-[#5CB35E]" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 max-w-md">
                    Thank you for reaching out. We've received your message and will get back to you shortly.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;