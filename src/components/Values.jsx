import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, Lightbulb, Users, Heart } from 'lucide-react';

function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'Premium components and expert installation delivering exceptional performance and longevity.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: '98% client retention rate speaks to our consistent delivery and trusted partnerships.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering service-oriented solar solutions with cutting-edge technology integration.',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'A strong integrity-driven culture where every team member is invested in your success.',
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and honest communication.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section-space-compact section-bg-light-b section-divider-soft" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-heading-shell"
        >
          <h2 className="heading-display text-navy mb-4">
            Our Core <span className="text-orange">Values</span>
          </h2>
          <p className="section-subtitle-light">
            The principles that guide our work and define our commitment to excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="surface-card-light p-8 rounded-xl group"
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 icon-chip-light">
                    <Icon className="text-orange group-hover:text-white transition-colors duration-300" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-body-light leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Values;
