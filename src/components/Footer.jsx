import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Tagline */}
          <div>
            <motion.h3
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              FORTECON
            </motion.h3>
            <p className="text-orange font-semibold text-lg mb-4">
              Choose Your Life
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Engineering & Development solutions for a sustainable future. 
              Pakistan's First Service Oriented Solar Company.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-navy-light rounded-full hover:bg-orange transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Offices */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange">Our Offices</h4>
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="text-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Rawalpindi</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      SA-1098, Service Road Sadiqabad
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-orange flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Islamabad</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Office #5, Icon1, Gulberg Greens
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-orange transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-orange">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-orange flex-shrink-0" size={20} />
                <a href="tel:+92511234567" className="text-gray-400 hover:text-orange transition-colors">
                  +92 (51) 123-4567
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="text-orange flex-shrink-0" size={20} />
                <a href="mailto:info@fortecon.com" className="text-gray-400 hover:text-orange transition-colors">
                  info@fortecon.com
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-white">PEC Certified</span>
                  <br />
                  C6 Category
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Fortecon Engineering & Development. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
