import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle, Target, Leaf, Users, Zap } from 'lucide-react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Target,
      title: 'Our Mission',
      text: 'To provide innovative, reliable, and cost-effective solar energy solutions while fostering sustainable development for Pakistan.',
    },
    {
      icon: Leaf,
      title: 'Our Vision',
      text: 'To be the leading solar energy company in Pakistan, driving the transition to clean, renewable energy for a sustainable future.',
    },
  ];

  return (
    <section id="about" className="section-space section-bg-light-a section-divider-soft" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-orange/10 text-orange rounded-full text-sm font-semibold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Us
            </motion.span>
            
            <h2 className="heading-display text-navy mb-6">
              Welcome to <span className="text-orange">Fortecon</span>
            </h2>
            
            <p className="text-lg text-body-light-strong mb-6 leading-relaxed">
              <span className="font-bold text-navy">FORTECON Engineering & Development (Pvt) Ltd</span> is 
              certified by the{' '}
              <span className="font-bold text-orange">Pakistan Engineering Council (PEC)</span>. Established 
              to support Pakistan&apos;s evolving multi-sector needs, the company is committed to delivering 
              sustainable and eco-friendly engineering solutions, with a strong focus on solar energy.
            </p>

            <p className="text-lg text-body-light-strong mb-6 leading-relaxed">
              Guided by our tagline, <span className="text-orange font-bold italic">&ldquo;Choose Your Life,&rdquo;</span> 
              we empower clients with energy independence through complete turnkey solutions, from design 
              and installation to commissioning and long-term maintenance.
            </p>

            <p className="text-lg text-body-light-strong mb-8 leading-relaxed">
              FORTECON delivers civil, electrical, and mechanical engineering works in full compliance 
              with government regulations, PEC standards, and industry best practices, ensuring quality, 
              efficiency, and reliability in every project.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-orange flex-shrink-0 mt-1" size={24} />
                <p className="text-body-light-strong">
                  <span className="font-semibold text-navy">Multi-Sector Engineering Capability</span> — Expertise across civil, electrical, and mechanical works
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-orange flex-shrink-0 mt-1" size={24} />
                <p className="text-body-light-strong">
                  <span className="font-semibold text-navy">PEC</span> — Quality and compliance guaranteed
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-orange flex-shrink-0 mt-1" size={24} />
                <p className="text-body-light-strong">
                  <span className="font-semibold text-navy">Turnkey Solar Solutions</span> — From design to maintenance
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-orange flex-shrink-0 mt-1" size={24} />
                <p className="text-body-light-strong">
                  <span className="font-semibold text-navy">Government & Enterprise Clients</span> — Trusted by major institutions
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-3 bg-navy px-6 py-4 rounded-lg">
                <Award className="text-orange" size={32} />
                <div>
                  <p className="text-sm text-gray-300">Certified By</p>
                  <p className="text-lg font-bold text-white">PEC</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 bg-orange/10 px-6 py-4 rounded-lg border border-orange/20">
                <Users className="text-orange" size={32} />
                <div>
                  <p className="text-sm text-body-light">Core Strength</p>
                  <p className="text-lg font-bold text-navy">Multi-Sector Delivery</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="media-frame group">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
                alt="Solar Installation"
                className="media-image h-[450px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 media-overlay-dark"></div>
              
              {/* Mission & Vision Cards */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                      >
                        <Icon className="text-orange mb-2" size={24} />
                        <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-body-dark text-xs leading-relaxed">{item.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border-l-4 border-orange"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="icon-chip-light">
                  <Zap className="text-orange" size={28} />
                </div>
                <div>
                  <p className="text-4xl font-bold text-navy">200+</p>
                  <p className="text-body-light text-sm">Projects Completed</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-orange/10 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-12 right-12 w-32 h-32 bg-navy/5 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
