import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Hassan',
      role: 'Project Director',
      company: 'Government Institution',
      quote: 'Fortecon delivered an exceptional 500KW solar installation for our headquarters. Their professionalism, technical expertise, and commitment to quality exceeded our expectations. The system has been running flawlessly since installation.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Dr. Fatima Malik',
      role: 'Vice Chancellor',
      company: 'Educational Institution',
      quote: 'The team at Fortecon demonstrated remarkable expertise in designing and implementing our campus-wide solar solution. They understood our unique requirements and delivered a system that has significantly reduced our energy costs.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Khalid Mahmood',
      role: 'Chief Engineer',
      company: 'Federal Authority',
      quote: 'Working with Fortecon was a pleasure from start to finish. Their attention to detail during the installation process and ongoing maintenance support has been outstanding. Highly recommended for any solar project.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Bilal Ahmed',
      role: 'General Manager',
      company: 'Industrial Group',
      quote: 'Fortecon\'s comprehensive approach to our solar energy project was impressive. From initial assessment to final commissioning, they provided exceptional service. The energy savings have been substantial.',
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    }),
  };

  const navigate = (newDirection) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return (prev + 1) % testimonials.length;
      }
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="section-space section-bg-light-a section-divider-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading-shell"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-orange/10 text-orange rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Client Success Stories
          </motion.span>
          <h2 className="heading-display text-navy mb-4">
            What Our <span className="text-orange">Clients Say</span>
          </h2>
          <p className="section-subtitle-light">
            Trusted by leading organizations across Pakistan for quality solar solutions
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main Card */}
          <div className="relative h-[340px] md:h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden border border-gray-100">
                  {/* Background Quote Icon */}
                  <Quote 
                    className="absolute top-6 right-6 text-orange/10" 
                    size={120}
                    fill="currentColor"
                  />

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-full max-w-3xl text-center">
                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-5">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="text-orange"
                            size={20}
                            fill="currentColor"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-body-light-strong text-lg md:text-2xl leading-relaxed mb-8 italic">
                        "{testimonials[currentIndex].quote}"
                      </p>

                      {/* Author */}
                      <div className="inline-flex flex-col items-center border-t border-gray-200 pt-5 px-4">
                        <h4 className="text-xl font-bold text-navy">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-orange font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-body-light-soft text-sm">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy hover:text-orange hover:scale-110 transition-all z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy hover:text-orange hover:scale-110 transition-all z-20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 p-2 bg-white/90 border border-gray-200 rounded-full shadow-sm">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className="group relative w-4 h-4 rounded-full"
                >
                  {index === currentIndex && (
                    <motion.span
                      layoutId="activeTestimonialDot"
                      className="absolute inset-0 rounded-full bg-orange shadow-md shadow-orange/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                    />
                  )}
                  <span
                    className={`absolute inset-[3px] rounded-full transition-colors duration-300 ${
                      index === currentIndex
                        ? 'bg-navy/90'
                        : 'bg-gray-300 group-hover:bg-gray-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
            <p className="text-center text-navy text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] px-4 py-2 rounded-full border border-gray-200 bg-white/80">
              TRUSTED CLIENTS (GOVERNMENT &amp; PUBLIC SECTOR)
            </p>
            <div className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              'UNHCR',
              'CDA',
              'Pak Data Com',
              'OGDCL',
              'MOFA',
              'Classic Flour Mill',
              'FBR',
              'Pakistan Post',
              'NHA',
              'PAK Flour Mill',
              'COMSATS',
              'HDIP',
              'PRIMACO',
              'Telecom Foundation',
              'PNCA',
              '5G Group',
            ].map((client, index) => (
              <motion.div
                key={index}
                className="text-xl sm:text-2xl font-bold text-slate-400 hover:text-orange transition-colors cursor-default"
                whileHover={{ scale: 1.04 }}
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
