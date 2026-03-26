import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Sun, Zap } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

function CTABanner() {
  const scrollToContact = () => {
    const contact = document.querySelector('#contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickContactSubmit = (e) => {
    e.preventDefault();
    trackEvent('lead_intent', {
      source: 'cta_banner_quick_form',
      action: 'request_callback',
    });
    scrollToContact();
  };

  return (
    <section className="relative section-space-compact overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/90 to-navy-light/95" />

      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(246, 185, 59, 0.1) 10px,
            rgba(246, 185, 59, 0.1) 20px
          )`,
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 text-orange/20"
        animate={{ 
          rotate: 360,
          y: [0, 20, 0],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <Sun size={80} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 right-10 text-orange/20"
        animate={{ 
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <Zap size={60} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-orange/20 text-orange rounded-full text-sm font-semibold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Start Your Solar Journey
            </motion.span>
            
            <h2 className="heading-display text-white mb-6">
              Ready to Switch to <span className="text-orange">Solar Energy?</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Join over 100+ satisfied clients who have already made the switch. 
              Get a free consultation and site assessment from our expert team. 
              Start saving on energy costs while contributing to a sustainable future.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Free Consultation', 'Expert Assessment', '25yr Warranty', 'O&M Support'].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="badge-pill-soft bg-white/10 backdrop-blur-sm border-white/20 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-orange rounded-full" />
                  <span className="text-white text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => {
                  trackEvent('cta_click', {
                    cta_name: 'banner_request_quote',
                    cta_location: 'cta_banner',
                  });
                  scrollToContact();
                }}
                className="group btn-cta-main btn-cta-main-dark-offset"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              
              <motion.a
                href="tel:+92511234567"
                onClick={() => {
                  trackEvent('contact_click', {
                    contact_method: 'phone',
                    source: 'cta_banner',
                  });
                }}
                className="btn-cta-outline-light"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                Call Now
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Contact Quick Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 rounded-bl-full" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange rounded-xl mb-6 shadow-lg shadow-orange/30">
                  <Mail className="text-navy" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Quick Contact
                </h3>
                <p className="text-gray-600 mb-6">
                  Fill out a quick form and our team will get back to you within 24 hours.
                </p>

                {/* Quick Contact Form */}
                <form className="space-y-4" onSubmit={handleQuickContactSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/40 transition-colors"
                    aria-label="Your Name"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/40 transition-colors"
                    aria-label="Phone Number"
                  />
                  <select className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/40 transition-colors text-gray-600" aria-label="Select Project Type">
                    <option value="">Select Project Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="government">Government</option>
                  </select>
                  <motion.button
                    type="submit"
                    className="w-full btn-cta-main btn-cta-main-light-offset bg-navy text-white hover:bg-navy-light"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Callback
                  </motion.button>
                </form>

                <p className="text-center text-gray-400 text-sm mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange/30 rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
