import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, Bug, Sparkles, Heart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReportBugModal from './ReportBugModal';

const AIChat = () => {
  const COLORS = {
    primary: '#00b36b',
    primaryDark: '#009356',
    accent: '#11b981',
    accentBright: '#34d399',
    lightAccent: '#d1fae5',
    background: '#f0fdf4',
    cardBg: '#ffffff',
    textDark: '#111827',
    border: '#e5e7eb',
    gradientStart: '#00b36b',
    gradientEnd: '#11b981',
  };

  const carouselImages = ['/images/image1.png', '/images/image2.png', '/images/image3.png'];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: 'Hey there! 👋 Welcome to UrbanDrop Support. How can I help you today?', 
      sender: 'ai', 
      timestamp: new Date() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBugModal, setShowBugModal] = useState(false);
  const messagesEndRef = useRef(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatMessageTime = (date) => {
    const now = new Date();
    const messageDate = new Date(date);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const messageDay = new Date(messageDate.getFullYear(), messageDate.getMonth(), messageDate.getDate());

    const timeStr = messageDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    if (messageDay.getTime() === today.getTime()) {
      return `Today ${timeStr}`;
    } else if (messageDay.getTime() === yesterday.getTime()) {
      return `Yesterday ${timeStr}`;
    } else {
      return messageDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) + ` ${timeStr}`;
    }
  };



  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('https://urbanchat.kantatech.io/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const aiMessage = {
        id: messages.length + 2,
        text: data.message || data.response || 'Sorry, I could not understand that.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: messages.length + 2,
        text: `Error: Unable to get response. Please try again. (${error.message})`,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <ReportBugModal isOpen={showBugModal} onClose={() => setShowBugModal(false)} />

      {/* Container for Chat Button and Bug Button */}
      <div className="fixed right-6 bottom-6 z-40">
        {/* Bug Report Button - On Top */}
        <motion.div
          className="absolute -top-20 right-0"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.85 }}
        >
          <motion.button
            onClick={() => setShowBugModal(true)}
            className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-3.5 rounded-full shadow-lg transition-all"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            title="Report a bug"
            aria-label="Report bug"
          >
            <Bug className="w-5 h-5" strokeWidth={2.5} />
          </motion.button>
        </motion.div>

        {/* Floating Chat Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative focus:outline-none w-16 h-16"
          whileHover={{ scale: 1.15, rotate: 8 }}
          whileTap={{ scale: 0.88 }}
        >
          <motion.div
            className="relative w-16 h-16 rounded-full shadow-2xl overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})` }}
            animate={{ boxShadow: ['0 8px 30px rgba(0, 179, 107, 0.3)', '0 12px 40px rgba(0, 179, 107, 0.5)', '0 8px 30px rgba(0, 179, 107, 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Animated Background Carousel */}
            <AnimatePresence mode="wait">
              <motion.img
                key={carouselIndex}
                src={carouselImages[carouselIndex]}
                alt="carousel"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Icon with Pulse - Changes based on isOpen */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="chevron"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Sparkle Accent */}
            <motion.div
              className="absolute top-0 right-0 text-yellow-300"
              animate={{ rotate: 360, scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>

            {/* Indicator Dots */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
              {carouselImages.map((_, idx) => (
                <motion.div
                  key={idx}
                  className="w-2 h-2 rounded-full bg-white"
                  animate={{ 
                    opacity: idx === carouselIndex ? 1 : 0.3, 
                    scale: idx === carouselIndex ? 1.3 : 0.9 
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              ))}
            </div>
          </motion.div>
        </motion.button>
      </div>

      {/* Chat Drawer - Modern Playful Design */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40, y: 40, scale: 0.88 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, y: 40, scale: 0.88 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed right-4 bottom-24 left-4 z-50 sm:left-auto sm:right-4 sm:bottom-24 md:right-6 md:bottom-28 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px] h-[60vh] sm:h-[480px] md:h-[520px] max-h-[80vh] rounded-3xl shadow-2xl bg-white overflow-hidden flex flex-col border-2"
            style={{ borderColor: COLORS.lightAccent }}
          >
            {/* Header - Vibrant Gradient */}
            <div className="relative h-28 overflow-hidden pt-3">
              {/* Gradient Background */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                }}
              ></div>

              {/* Carousel Background with Overlay */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={`header-${carouselIndex}`}
                  src={carouselImages[carouselIndex]}
                  alt="carousel"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-25"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.25, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Decorative Sparkles */}
              <motion.div
                className="absolute top-3 right-5 text-yellow-300 opacity-60"
                animate={{ rotate: 360, y: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>

              {/* Header Content with Better Positioning */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 z-10">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-white font-bold text-2xl leading-tight"
                  >
                    Chat with Us
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-white/85 text-sm mt-2 font-medium"
                  >
                    Get instant support 💚
                  </motion.p>
                </div>

                {/* Close Button Hidden - Users can use the chat icon or click outside */}
              </div>

              {/* Floating Carousel Indicators in Header */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                {carouselImages.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="h-2 rounded-full"
                    animate={{ 
                      width: idx === carouselIndex ? 24 : 8, 
                      opacity: idx === carouselIndex ? 1 : 0.5 
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ background: idx === carouselIndex ? 'white' : 'rgba(255, 255, 255, 0.6)' }}
                  ></motion.div>
                ))}
              </div>
            </div>

            {/* Messages Area - Subtle Gradient Background */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 scroll-smooth"
              style={{
                background: `linear-gradient(to bottom, ${COLORS.background}, rgba(240, 253, 244, 0.5))`,
              }}
            >
              <div className="space-y-4">
                {messages.map((message, idx) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, x: message.sender === 'user' ? 30 : -30, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.06, ease: 'easeOut' }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} gap-2.5`}
                  >
                    {/* Avatar SVG */}
                    <motion.div
                      className={`w-8 h-8 rounded-full flex-shrink-0 shadow-sm flex-center flex items-center justify-center ${
                        message.sender === 'user' ? 'order-last' : ''
                      }`}
                      whileHover={{ scale: 1.12 }}
                    >
                      {message.sender === 'ai' ? (
                        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="15" fill={COLORS.primary} />
                          <circle cx="10" cy="13" r="2" fill="white" />
                          <circle cx="22" cy="13" r="2" fill="white" />
                          <path d="M10 20 Q16 24 22 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M14 10 Q16 8 18 10" stroke="white" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="16" r="15" fill={COLORS.primary} />
                          <circle cx="16" cy="11" r="4" fill="white" />
                          <path d="M8 24 Q8 20 16 20 Q24 20 24 24" fill="white" />
                        </svg>
                      )}
                    </motion.div>

                    {/* Message Container */}
                    <div className={`flex flex-col gap-1 max-w-xs ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                      {/* Message Bubble */}
                      <motion.div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm font-medium ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-br from-green-500 to-green-600 text-white rounded-br-none'
                            : 'bg-white text-gray-800 rounded-bl-none border-2'
                        }`}
                        style={
                          message.sender === 'ai'
                            ? { borderColor: COLORS.lightAccent }
                            : {}
                        }
                        whileHover={{ scale: 1.02, translateY: -1 }}
                      >
                        {message.text}
                      </motion.div>
                      {/* Timestamp */}
                      <span className="text-xs text-gray-500 px-2 font-semibold">
                        {formatMessageTime(message.timestamp)}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {/* Loading Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-8 h-8 rounded-full flex-shrink-0 shadow-sm flex items-center justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="15" fill={COLORS.primary} />
                        <circle cx="10" cy="13" r="2" fill="white" />
                        <circle cx="22" cy="13" r="2" fill="white" />
                        <path d="M10 20 Q16 24 22 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M14 10 Q16 8 18 10" stroke="white" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none px-4 py-3 border-2" 
                         style={{ borderColor: COLORS.lightAccent }}>
                      <div className="flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ background: COLORS.primary }}
                            animate={{ y: [0, -6, 0], scale: [0.8, 1.1, 0.8] }}
                            transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area - Clean & Modern */}
            <div
              className="px-4 py-3 border-t-2 flex gap-2"
              style={{ borderColor: COLORS.lightAccent, background: '#fafafa' }}
            >
              <motion.input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Say something... 💭"
                className="flex-1 px-4 py-2.5 bg-white border-2 rounded-full focus:outline-none text-sm font-medium shadow-sm transition-all"
                style={{
                  borderColor: COLORS.lightAccent,
                  color: COLORS.textDark,
                }}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.88 }}
                className="text-white p-2.5 rounded-full transition-all font-bold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: inputValue.trim() 
                    ? `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})` 
                    : '#d1d5db',
                }}
              >
                <Send className="w-5 h-5" strokeWidth={2.5} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
