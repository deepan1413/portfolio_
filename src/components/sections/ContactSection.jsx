import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionTitle } from '../SectionTitle';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const ContactSection = ({ contact }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'from-cyan-500 to-cyan-400',
      bgColor: 'from-cyan-500/20 to-cyan-400/10',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
      color: 'from-cyan-500 to-cyan-400',
      bgColor: 'from-cyan-500/20 to-cyan-400/10',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/deepan1413',
      href: contact.github,
      color: 'from-cyan-500 to-cyan-400',
      bgColor: 'from-cyan-500/20 to-cyan-400/10',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/deepan-l',
      href: contact.linkedin,
      color: 'from-cyan-500 to-cyan-400',
      bgColor: 'from-cyan-500/20 to-cyan-400/10',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      value: 'deepan_wolfie',
      href: contact.Instagram,
      color: 'from-cyan-500 to-cyan-400',
      bgColor: 'from-cyan-500/20 to-cyan-400/10',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData(e.target);
      formDataToSend.append("access_key", "e8442b3d-d6f4-4af9-b243-2797e84ec5a2");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
        setTimeout(() => setError(''), 3000);
      }
    } catch (err) {
      setError('Network error. Please try again later.');
      setTimeout(() => setError(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      {/* Decorative background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle 
            title="Let's Create Something Amazing" 
            centered={true} 
          />
          
          <p className="text-center text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create digital experiences that make an impact.
          </p>

          {/* Two Column Layout */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Methods */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
              
              <motion.div
                variants={containerVariants}
                className="space-y-4"
              >
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  
                  // Special rendering for Phone card with communication options
                  if (method.label === 'Phone') {
                    return (
                      <motion.div
                        key={method.label}
                        variants={itemVariants}
                        className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <motion.div
                              className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-dark-950 flex-shrink-0"
                              whileHover={{ rotate: 10 }}
                            >
                              <Icon size={24} />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-white mb-1">
                                {method.label}
                              </h4>
                              <p className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                                {method.value}
                              </p>
                            </div>
                          </div>
                          
                          {/* Phone/WhatsApp Action Buttons */}
                          <div className="flex gap-2 flex-shrink-0">
                            <motion.a
                              href={`tel:${contact.phone}`}
                              onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `tel:${contact.phone}`;
                              }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 rounded-lg bg-cyan-500/40 border border-cyan-500/60 text-cyan-300 hover:bg-cyan-500/60 transition-all"
                              title="Call"
                            >
                              <FaPhone size={18} />
                            </motion.a>
                            
                            <motion.a
                              href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 rounded-lg bg-cyan-500/40 border border-cyan-500/60 text-cyan-300 hover:bg-cyan-500/60 transition-all"
                              title="WhatsApp"
                            >
                              <FaWhatsapp size={18} />
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    );
                  }
                  
                  return (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={method.label === 'Email' || method.label === 'Phone' ? '_self' : '_blank'}
                      rel={method.label !== 'Email' && method.label !== 'Phone' ? 'noopener noreferrer' : ''}
                      variants={itemVariants}
                      whileHover={{ x: 8, boxShadow: '0 0 30px rgba(34, 211, 238, 0.15)' }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-6 rounded-xl bg-gradient-to-br ${method.bgColor} border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 group cursor-pointer block`}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-r ${method.color} text-dark-950 flex-shrink-0`}
                          whileHover={{ rotate: 10 }}
                        >
                          <Icon size={24} />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white mb-1">
                            {method.label}
                          </h4>
                          <p className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors truncate">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 rounded-lg bg-black border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3 rounded-lg bg-black border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-6 py-3 rounded-lg bg-black border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: loading ? 1 : 1.02, boxShadow: '0 0 40px rgba(34, 211, 238, 0.4)' }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
                >
                  <FaPaperPlane size={20} />
                  {loading ? 'Sending...' : submitted ? 'Message Sent! ✨' : 'SEND MESSAGE'}
                </motion.button>

                {/* Success Message */}
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center text-cyan-400 text-sm font-semibold"
                  >
                    Thank you! I'll get back to you soon.
                  </motion.p>
                )}

                {/* Error Message */}
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center text-red-400 text-sm font-semibold"
                  >
                    {error}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
