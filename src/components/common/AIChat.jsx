import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot } from 'lucide-react';

const initialMessages = [];

const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [showBubble, setShowBubble] = useState(false);
    const chatContainerRef = useRef(null);

  // Auto-scroll to the latest message
    useEffect(() => {
        if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    // Fetch welcome message on component mount
    useEffect(() => {
        fetch('https://urbanchat-xy7h.onrender.com/welcome')
            .then(res => res.json())
            .then(data => {
                const welcomeText = data.message || data;
                setWelcomeMessage(welcomeText);
                setMessages([{ id: Date.now(), sender: 'ai', text: welcomeText }]);
            })
            .catch(err => {
                console.error('Error fetching welcome message:', err);
                const fallback = 'Welcome to Urbandrop AI Assistant!';
                setWelcomeMessage(fallback);
                setMessages([{ id: Date.now(), sender: 'ai', text: fallback }]);
            });
    }, []);

    // Show bubble only on home page first visit
    useEffect(() => {
        if (window.location.pathname === '/' && !localStorage.getItem('welcomeBubbleShown')) {
            setShowBubble(true);
            localStorage.setItem('welcomeBubbleShown', 'true');
        }
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '' || isLoading) return;

        const userMessage = {
            id: Date.now(),
            sender: 'user',
            text: inputValue,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        fetch('https://urbanchat-xy7h.onrender.com/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: inputValue }),
        })
            .then(res => res.json())
            .then(data => {
                const aiResponse = {
                    id: Date.now(),
                    sender: 'ai',
                    text: data.reply || 'Sorry, I couldn\'t process your request.',
                };
                setMessages((prev) => [...prev, aiResponse]);
            })
            .catch(err => {
                console.error('Error sending message:', err);
                const errorResponse = {
                    id: Date.now(),
                    sender: 'ai',
                    text: 'Error: Unable to get response. Please try again.',
                };
                setMessages((prev) => [...prev, errorResponse]);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const drawerVariants = {
        closed: { y: '100%' },
        open: { y: '0%' },
    };

    const messageVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
    <>
      {/* Welcome Message Bubble */}
      {showBubble && welcomeMessage && !isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-24 right-6 bg-white text-gray-800 p-3 rounded-lg shadow-lg max-w-xs text-sm z-40"
        >
          {welcomeMessage} How may I help you?
          <div className="absolute bottom-0 right-6 transform translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </motion.div>
      )}

      {/* Floating Chat Icon */}
        <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-[#00b36b] rounded-full flex items-center justify-center text-white shadow-lg z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open AI Chat"
        >
        <MessageSquare size={32} />
        </motion.button>

        <AnimatePresence>
                {isOpen && (
            < >
                {/* Backdrop */}
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/30 z-40"
                />

                {/* Chat Drawer */}
            <motion.div
                variants={drawerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed bottom-0 right-0 h-3/4 w-3/4 md:w-1/2 bg-gray-50 flex flex-col shadow-2xl z-50"
            >
              {/* Header */}
                <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                        <div className="flex items-center gap-3">
                            <h2 className="font-bold text-lg text-gray-800">AI Assistant</h2>
                        </div>
                    <motion.button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        aria-label="Close Chat"
                    >
                        <X size={24} />
                        </motion.button>
                </header>

              {/* Chat Area */}
                <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg) => (
                        <motion.div
                                key={msg.id}
                                variants={messageVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.3 }}
                                className={`flex items-end gap-2 ${
                                msg.sender === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                        >
                        {msg.sender === 'ai' && (
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center self-start">
                                <Bot size={20} className="text-gray-500" />
                            </div>
                        )}
                        <div
                            className={`max-w-xs md:max-w-sm p-3 rounded-2xl ${
                                msg.sender === 'user'
                                ? 'bg-[#00b36b] text-white rounded-br-lg'
                                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-lg'
                            }`}
                        >
                            <p className="text-sm">{msg.text}</p>
                        </div>
                        </motion.div>
                    ))}
                    {isLoading && (
                        <motion.div
                            variants={messageVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.3 }}
                            className="flex items-end gap-2 justify-start"
                        >
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center self-start">
                                <Bot size={20} className="text-gray-500" />
                            </div>
                            <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-lg p-3 max-w-xs md:max-w-sm">
                                <p className="text-sm">Typing...</p>
                            </div>
                        </motion.div>
                    )}
                </div>

              {/* Input Bar */}
                <footer className="p-4 bg-white border-t border-gray-200">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                            <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 w-full px-4 py-2 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-[#00b36b]"
                            />
                            <motion.button
                                    type="submit"
                                    className="w-10 h-10 flex-shrink-0 bg-[#00b36b] text-white rounded-full flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Send Message"
                            >
                                <Send size={20} />
                            </motion.button>
                        </form>
                </footer>
                </motion.div>
            </>
        )}
        </AnimatePresence>
    </>
    );
};

export default AIChat;
