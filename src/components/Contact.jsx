import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
      content: '+92 (51) 123-4567',
      link: 'tel:+92511234567',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@fortecon.com',
      link: 'mailto:info@fortecon.com',
    },
    {
      icon: MapPin,
      title: 'Rawalpindi Office',
      content: 'SA-1098, Service Road Sadiqabad',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-orange">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
                  className="flex items-start gap-4 p-6 bg-navy-light rounded-xl hover:bg-navy-light/80 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-orange/10 rounded-lg group-hover:bg-orange transition-colors">
                    <Icon className="text-orange group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{info.title}</p>
                    <p className="text-white font-semibold">{info.content}</p>
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
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-navy-light text-white rounded-lg border border-gray-700 focus:border-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-navy-light text-white rounded-lg border border-gray-700 focus:border-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-navy-light text-white rounded-lg border border-gray-700 focus:border-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-navy-light text-white rounded-lg border border-gray-700 focus:border-orange focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 group ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-orange text-navy hover:bg-orange-light'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500"
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500"
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
