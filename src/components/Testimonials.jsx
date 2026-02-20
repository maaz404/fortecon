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
      company: 'OGDCL',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      quote: 'Fortecon delivered an exceptional 500KW solar installation for our headquarters. Their professionalism, technical expertise, and commitment to quality exceeded our expectations. The system has been running flawlessly since installation.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Dr. Fatima Malik',
      role: 'Vice Chancellor',
      company: 'COMSATS University',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      quote: 'The team at Fortecon demonstrated remarkable expertise in designing and implementing our campus-wide solar solution. They understood our unique requirements and delivered a system that has significantly reduced our energy costs.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Khalid Mahmood',
      role: 'Chief Engineer',
      company: 'NHA',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      quote: 'Working with Fortecon was a pleasure from start to finish. Their attention to detail during the installation process and ongoing maintenance support has been outstanding. Highly recommended for any solar project.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Bilal Ahmed',
      role: 'General Manager',
      company: 'FBR',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            What Our <span className="text-orange">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations across Pakistan for quality solar solutions
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main Card */}
          <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
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
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                  {/* Background Quote Icon */}
                  <Quote 
                    className="absolute top-6 right-6 text-orange/10" 
                    size={120}
                    fill="currentColor"
                  />

                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-orange shadow-lg">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-orange rounded-full p-2 shadow-lg">
                          <Quote className="text-navy" size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Stars */}
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
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
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                        "{testimonials[currentIndex].quote}"
                      </p>

                      {/* Author */}
                      <div>
                        <h4 className="text-xl font-bold text-navy">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-orange font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-gray-500 text-sm">
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
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-orange rounded-full'
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-orange/50'
                }`}
              />
            ))}
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
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider">
            Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['OGDCL', 'FBR', 'NHA', 'COMSATS', 'PRIMACO', '5G Group'].map((client, index) => (
              <motion.div
                key={index}
                className="text-2xl font-bold text-gray-300 hover:text-orange transition-colors cursor-default"
                whileHover={{ scale: 1.1 }}
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
