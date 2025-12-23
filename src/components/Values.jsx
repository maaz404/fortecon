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
      description: 'We deliver exceptional quality in every project, ensuring the highest standards of workmanship.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our clients trust us to deliver on time and exceed expectations with consistent performance.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative solutions to stay ahead of the curve.',
    },
    {
      icon: Users,
      title: 'Diversity',
      description: 'We celebrate diversity and foster an inclusive environment for all stakeholders.',
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'Building lasting relationships through transparency, integrity, and honest communication.',
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
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Our Core <span className="text-orange">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                whileHover={{ y: -10 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-orange/10 rounded-full group-hover:bg-orange transition-colors duration-300">
                    <Icon className="text-orange group-hover:text-white transition-colors duration-300" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
