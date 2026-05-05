import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sun, Zap, Shield, Sparkles, Award, Users, Building2, Wrench, Cpu } from 'lucide-react';
import forteLogo from '../../pictures/forte_logo-removebg-preview.png';
import { trackEvent } from '../utils/analytics';

// Scroll Reveal Hook
function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

// Floating Particle Component
function FloatingParticle({ delay, duration, size, left, top }) {
  return (
    <motion.div
      className="absolute rounded-full bg-orange/20"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
    />
  );
}

// Typewriter Effect Hook
function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return currentText;
}

function Hero() {
  const words = ['SUSTAINABILITY', 'INNOVATION', 'EXCELLENCE', 'RELIABILITY'];
  const typedWord = useTypewriter(words, 120, 80, 2500);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);

  // Generate particles with useMemo to ensure consistent values
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: (i * 0.3) % 5,
      duration: 4 + (i % 3) * 2,
      size: 4 + (i % 4) * 3,
      left: (i * 5) % 100,
      top: (i * 7) % 100,
    })), []
  );

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Building2, text: 'Civil Engineering Works' },
    { icon: Zap, text: 'Electrical Engineering Works' },
    { icon: Sun, text: 'Solar Energy Solutions' },
    { icon: Wrench, text: 'Mechanical Works' },
    { icon: Shield, text: 'Infrastructure Developments' },
    { icon: Users, text: 'Project Management & Consultancy' },
    { icon: Award, text: 'Renovation & Maintenance' },
    { icon: Cpu, text: 'IT Solutions' },
    { icon: Shield, text: 'Automation & Surveillance System' },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy-light/90 dark:from-gray-900/95 dark:via-gray-800/85 dark:to-gray-700/90" />
        
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(246, 185, 59, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(246, 185, 59, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <FloatingParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-orange/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left Content - Main Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {/* Subtle Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex flex-col items-start gap-2 mb-6"
              >
                <div className="inline-flex items-center gap-3">
                  <motion.div 
                    className="h-px w-12 bg-gradient-to-r from-transparent to-orange"
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/15 shadow-lg shadow-black/25 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <img
                      src={forteLogo}
                      alt="Forte Energy logo"
                      className="w-[92%] h-[92%] object-contain"
                      loading="eager"
                    />
                  </div>
                  <div className="inline-flex items-center gap-2.5 flex-wrap">
                    <span className="relative inline-flex px-3 py-1 rounded-full text-white text-xs sm:text-sm font-bold tracking-wide uppercase overflow-hidden ring-1 ring-white/5">
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand to-[#022a20]"></span>
                      <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></span>
                      <span className="relative z-10 shadow-sm shadow-black/40">Forte Energy</span>
                    </span>
                    <span className="text-orange text-sm font-semibold tracking-widest uppercase">
                      Solar Energy Experts
                    </span>
                  </div>
                </div>
                <span className="text-white/75 text-xs sm:text-sm font-medium pl-[3.75rem]">
                  A project of Fortecon Engineering &amp; Development
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.22 }}
              >
                <span className="block">Build a Better Tomorrow</span>
                <span className="block mt-2 text-[0.88em] sm:text-[0.92em]">
                  <span className="inline-flex items-baseline whitespace-nowrap">
                    With
                    <span className="text-orange relative inline-block min-w-[4ch] ml-2">
                      {typedWord}
                      <motion.span
                        className="inline-block w-[3px] h-[0.9em] bg-orange ml-1 align-middle"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                      />
                    </span>
                  </span>
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.32 }}
              >
                Fortecon delivers turnkey solar and engineering services, from survey and design to installation, net metering, and long-term support.
                <span className="text-white font-medium block mt-2">See what your project can save from day one.</span>
              </motion.p>

              {/* Primary CTA */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4 }}
              >
                <motion.button
                  onClick={() => {
                    trackEvent('cta_click', {
                      cta_name: 'hero_explore_services',
                      cta_location: 'hero',
                    });
                    scrollToSection('#services');
                  }}
                  className="group relative btn-cta-main btn-cta-main-dark-offset rounded-xl overflow-hidden hover:shadow-orange/50 transition-shadow"
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Services
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-light to-orange"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <button
                  onClick={() => {
                    trackEvent('cta_click', {
                      cta_name: 'hero_view_recent_projects',
                      cta_location: 'hero',
                    });
                    scrollToSection('#projects');
                  }}
                  className="text-white/80 hover:text-orange font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded"
                >
                  View Recent Projects
                </button>
              </motion.div>

              {/* Service Pills - Responsive Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.5 }}
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="group flex items-center gap-2.5 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange/50 hover:bg-white/15 hover:shadow-lg hover:shadow-orange/10 transition-all min-h-[52px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.01, x: 2 }}
                    >
                      <motion.div
                        className="shrink-0"
                        whileHover={{ rotate: 6, scale: 1.06 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                      >
                        <Icon className="text-orange" size={16} />
                      </motion.div>
                      <span className="text-white/90 text-sm leading-snug">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="lg:col-span-5 hidden lg:flex justify-center" ref={statsRef}>
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              animate={statsVisible ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: -15 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Floating Stats Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange/20 via-transparent to-orange/20 rounded-3xl blur-xl opacity-50" />
                
                <div className="relative space-y-6">
                  {/* Header Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="text-orange" size={20} />
                    <span className="text-white font-semibold">Why Choose Us</span>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: '200+', label: 'Projects Done' },
                      { value: '10MW+', label: 'Installed' },
                      { value: '98%', label: 'Client Retention' },
                      { value: '11+', label: 'Years Experience' }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-orange/50 hover:bg-white/10 transition-all"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={statsVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(246, 185, 59, 0.5)' }}
                      >
                        <div className="text-3xl font-bold text-orange mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Certifications */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { icon: Award, label: 'PEC Registered' },
                        { icon: Shield, label: 'FBR Registered' },
                        { icon: Users, label: 'Engineers Owned' },
                        { icon: Sparkles, label: 'SECP Registered' }
                      ].map((cert, index) => {
                        const CertIcon = cert.icon;
                        return (
                          <motion.div 
                            key={index}
                            className="flex items-center gap-2 px-3 py-2 bg-orange/10 rounded-lg border border-orange/20 hover:border-orange/50 hover:bg-orange/20 transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            animate={statsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                          >
                            <CertIcon className="text-orange" size={18} />
                            <span className="text-white text-sm font-medium">{cert.label}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange rounded-full flex items-center justify-center">
                  <Sun className="text-navy" size={16} />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-orange/20 rounded-2xl backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Zap className="text-orange" size={24} />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 right-8 w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Shield className="text-orange" size={20} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={() => scrollToSection('#about')}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2 hover:border-orange/50 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-orange rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
