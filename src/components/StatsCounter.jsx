import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Users, Award, TrendingUp, Building2, Sun } from 'lucide-react';

function AnimatedNumber({ value, suffix = '', prefix = '' }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      const stepDuration = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      icon: Award,
      value: 11,
      suffix: '+',
      label: 'Years Experience',
      description: 'Industry expertise since 2015',
    },
    {
      icon: Building2,
      value: 200,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Across multiple sectors',
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'Satisfied Clients',
      description: 'Government & Private',
    },
    {
      icon: Zap,
      value: 15,
      suffix: 'MW+',
      label: 'Installed Capacity',
      description: 'Clean energy generated',
    },
    {
      icon: Sun,
      value: 25000,
      suffix: '+',
      label: 'CO₂ Tons Reduced',
      description: 'Environmental impact',
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: '%',
      label: 'Client Retention',
      description: 'Trust & satisfaction',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="section-space bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f6b93b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-orange/10 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-orange/10 rounded-full blur-xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-heading-shell"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-orange/20 text-orange rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Impact
          </motion.span>
          <h2 className="heading-display text-white mb-4">
            Numbers That <span className="text-orange">Speak</span>
          </h2>
          <p className="section-subtitle-dark">
            Measurable results that demonstrate our commitment to excellence and sustainability
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-navy-light/50 backdrop-blur-sm border border-orange/20 rounded-2xl p-6 text-center hover:border-orange/50 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="icon-chip-solid mb-4">
                    <Icon className="text-navy" size={28} />
                  </div>

                  {/* Number */}
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <h3 className="text-orange font-semibold mb-1">{stat.label}</h3>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-orange/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default StatsCounter;
