import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import ehsanImage from '../../pictures/ehsan.jpeg';
import arslanImage from '../../pictures/arslan.jpeg';
import faizanImage from '../../pictures/faizan.jpeg';
import noamanImage from '../../pictures/noaman.jpg';

function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const team = [
    {
      name: 'Ehsan Akbar',
      role: 'Chief Executive Officer',
      image: ehsanImage,
      description: 'Visionary leader driving Fortecon\'s growth and strategic direction in the renewable energy sector.',
    },
    {
      name: 'Arslan Rana',
      role: 'Director Business Development',
      image: arslanImage,
      description: 'Strategic leader expanding Fortecon\'s market presence and fostering key client partnerships.',
    },
    {
      name: 'Faizan Akbar',
      role: 'Director Technical',
      image: faizanImage,
      description: 'Technical expert with extensive experience in solar engineering and system design excellence.',
    },
    {
      name: 'Noaman Akbar Sheikh',
      role: 'Director Projects',
      image: noamanImage,
      description: 'Expert project manager ensuring on-time delivery and exceeding client expectations consistently.',
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
    <section id="team" className="section-space-compact bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-navy mb-4">
            Leadership <span className="text-orange">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the industry experts driving innovation and excellence at Fortecon
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-80"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center gap-4">
                    <button className="p-2 bg-orange rounded-full hover:bg-orange-light transition-colors">
                      <Linkedin size={20} />
                    </button>
                    <button className="p-2 bg-orange rounded-full hover:bg-orange-light transition-colors">
                      <Mail size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-navy mb-2">{member.name}</h3>
                <p className="text-orange font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Team;
