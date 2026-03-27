import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { trackEvent } from '../utils/analytics';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your EmailJS credentials
      const serviceID = 'YOUR_SERVICE_ID'; // Get from EmailJS dashboard
      const templateID = 'YOUR_TEMPLATE_ID'; // Get from EmailJS dashboard
      const publicKey = 'YOUR_PUBLIC_KEY'; // Get from EmailJS dashboard

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        to_name: 'Fortecon Team',
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      trackEvent('form_submit', {
        form_name: 'contact_form',
        form_status: 'success',
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      trackEvent('form_submit', {
        form_name: 'contact_form',
        form_status: 'error',
      });
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+92 339 8885505',
      link: 'tel:+923398885505',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@fortecon.com.pk',
      link: 'mailto:info@fortecon.com.pk',
    },
    {
      icon: MapPin,
      title: 'Head Office',
      content: 'Office #5, 4th Floor, Umer Plaza,\nNear Fresco Sweets, Main Blue Area, Islamabad',
      link: 'https://maps.google.com/?q=Office+%235,+4th+Floor,+Umer+Plaza,+Near+Fresco+Sweets,+Main+Blue+Area,+Islamabad',
    },
  ];

  return (
    <section id="contact" className="section-space-compact bg-navy">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading-shell"
        >
          <h2 className="heading-display text-white mb-4">
            Get In <span className="text-orange">Touch</span>
          </h2>
          <p className="section-subtitle-dark">
            Have a project in mind? Let's discuss how we can help you harness solar energy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're looking to reduce energy costs, increase sustainability, 
                or need expert consultation, we're here to help. Reach out to us today!
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  onClick={() => {
                    trackEvent('contact_click', {
                      contact_method: info.title.toLowerCase(),
                      source: 'contact_section',
                    });
                  }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-navy-light to-navy-light/50 rounded-xl hover:from-navy-light hover:to-navy border border-orange/20 hover:border-orange/50 hover:shadow-lg hover:shadow-orange/10 transition-all group"
                  whileHover={{ x: 12, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="p-3.5 bg-orange/10 rounded-lg group-hover:bg-orange group-hover:shadow-lg group-hover:shadow-orange/50 transition-all flex-shrink-0"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="text-orange group-hover:text-navy transition-colors duration-300" size={24} />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1 font-medium">{info.title}</p>
                    <p className="text-white font-semibold whitespace-pre-line group-hover:text-orange transition-colors duration-300">{info.content}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="contact-name" className="block text-sm text-gray-300 mb-2 font-medium">Name <span className="text-orange">*</span></label>
                <motion.input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-navy-light/50 text-white rounded-lg border border-gray-600/30 hover:border-gray-500/50 focus:border-orange focus:ring-2 focus:ring-orange/30 focus:outline-none transition-all placeholder-gray-500 font-medium"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <label htmlFor="contact-email" className="block text-sm text-gray-300 mb-2 font-medium">Email <span className="text-orange">*</span></label>
                <motion.input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-navy-light/50 text-white rounded-lg border border-gray-600/30 hover:border-gray-500/50 focus:border-orange focus:ring-2 focus:ring-orange/30 focus:outline-none transition-all placeholder-gray-500 font-medium"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="contact-phone" className="block text-sm text-gray-300 mb-2 font-medium">Phone</label>
                <motion.input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-navy-light/50 text-white rounded-lg border border-gray-600/30 hover:border-gray-500/50 focus:border-orange focus:ring-2 focus:ring-orange/30 focus:outline-none transition-all placeholder-gray-500 font-medium"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label htmlFor="contact-message" className="block text-sm text-gray-300 mb-2 font-medium">Message <span className="text-orange">*</span></label>
                <motion.textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-navy-light/50 text-white rounded-lg border border-gray-600/30 hover:border-gray-500/50 focus:border-orange focus:ring-2 focus:ring-orange/30 focus:outline-none transition-all resize-none placeholder-gray-500 font-medium"
                  whileFocus={{ scale: 1.01 }}
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-cta-main btn-cta-main-dark-offset group relative overflow-hidden font-semibold py-4 transition-all ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-orange text-navy hover:bg-orange-dark'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </motion.div>
                ) : (
                  <>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <motion.div whileHover={{ x: 4 }}>
                        <Send size={20} />
                      </motion.div>
                    </span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 font-medium backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle size={20} />
                  </motion.div>
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 font-medium backdrop-blur-sm"
                >
                  <AlertCircle size={20} />
                  <span>Failed to send message. Please try again or email us directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
