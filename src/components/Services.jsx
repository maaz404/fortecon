import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, PenTool, HardHat, Settings } from 'lucide-react';

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Search,
      title: 'Need Analysis & Survey',
      description: 'Comprehensive site analysis and energy needs assessment to determine the optimal solar solution for your requirements.',
    },
    {
      icon: PenTool,
      title: 'Design & Proposal',
      description: 'Custom solar system design with detailed proposals, cost analysis, and ROI projections tailored to your needs.',
    },
    {
      icon: HardHat,
      title: 'Construction Process',
      description: 'Professional installation by certified engineers ensuring quality workmanship and compliance with all safety standards.',
    },
    {
      icon: Settings,
      title: 'Operations & Maintenance',
      description: 'Ongoing support, system monitoring, and maintenance services to ensure optimal performance and longevity.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="py-20 bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-orange">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solar energy solutions from concept to completion
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-navy-light p-8 rounded-xl border border-orange/20 hover:border-orange transition-all duration-300 group"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-orange/10 rounded-full group-hover:bg-orange transition-colors duration-300">
                    <Icon className="text-orange group-hover:text-white transition-colors duration-300" size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-orange rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold">{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
