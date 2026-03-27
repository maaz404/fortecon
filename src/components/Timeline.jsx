import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Award, Users, Building2, Zap, Target } from 'lucide-react';

function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Fortecon Engineering & Development was established with a mission to deliver innovative solutions.',
      icon: Rocket,
      highlight: 'The Beginning',
    },
    {
      year: '2020',
      title: 'PEC Certification',
      description: 'Achieved Pakistan Engineering Council certification, establishing industry credibility.',
      icon: Award,
      highlight: 'Milestone',
    },
    {
      year: '2021',
      title: 'Government Sector Entry',
      description: 'Secured major government contracts, demonstrating capability for large-scale public installations.',
      icon: Building2,
      highlight: 'Growth',
    },
    {
      year: '2022',
      title: '10MW Installed',
      description: 'Reached 10MW of total installed capacity with 200+ successful projects across Pakistan.',
      icon: Zap,
      highlight: 'Achievement',
    },
    {
      year: '2023',
      title: 'Service Excellence',
      description: 'Launched comprehensive O&M services achieving 98% client retention and industry recognition.',
      icon: Users,
      highlight: 'Scaling',
    },
    {
      year: '2026',
      title: 'Growing Stronger Together',
      description: '300+ projects completed, demonstrating proven expertise across civil construction, solar energy, and MEP works while solidifying our market leadership',
      icon: Target,
      highlight: 'Present',
    },
  ];

  return (
    <section className="section-space section-bg-light-b section-divider-soft overflow-hidden" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-heading-shell"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-orange/10 text-orange rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Journey
          </motion.span>
          <h2 className="heading-display text-navy mb-4">
            Company <span className="text-orange">Timeline</span>
          </h2>
          <p className="section-subtitle-light">
            A journey of innovation, growth, and commitment to sustainable energy solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pb-10">
          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-5 w-1 bg-gradient-to-b from-orange via-orange to-orange/30 hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-0">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center lg:items-stretch ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-1/2 ${isLeft ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <motion.div
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                      whileHover={{ y: -3 }}
                    >
                      {/* Background Gradient */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange/10 to-transparent rounded-bl-full" />
                      
                      {/* Year Badge */}
                      <div className="absolute -top-3 -right-3 w-20 h-20 bg-orange rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-navy font-bold text-lg">{milestone.year}</span>
                      </div>

                      {/* Icon */}
                      <div className="icon-chip-light mb-4">
                        <Icon className="text-orange group-hover:text-white transition-colors duration-300" size={28} />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <span className="text-sm font-semibold text-orange uppercase tracking-wider">{milestone.highlight}</span>
                        <h3 className="text-2xl font-bold text-navy mt-2 mb-3">{milestone.title}</h3>
                        <p className="text-body-light leading-relaxed">{milestone.description}</p>
                      </div>

                      {/* Connector Line (Mobile) */}
                      <div className="absolute left-1/2 -bottom-6 w-1 h-6 bg-orange lg:hidden" />
                    </motion.div>
                  </div>

                  {/* Center Circle (Desktop) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center z-10">
                    <motion.div
                      className="w-16 h-16 bg-white border-2 border-orange/70 rounded-2xl flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    >
                      <Icon className="text-orange" size={24} />
                    </motion.div>
                  </div>

                  {/* Empty Space for opposite side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>

          {/* End Marker */}
          <motion.div
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-0 items-center justify-center"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="relative flex items-center justify-center w-10 h-10">
              <motion.div
                className="absolute inset-0 border-2 border-orange/40 rounded-full"
                animate={{ scale: [1, 1.14, 1], opacity: [0.7, 0.35, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="w-5 h-5 bg-orange rounded-full shadow-md shadow-orange/30"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14 p-8 bg-gradient-to-r from-navy to-navy-light rounded-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Our Vision for <span className="text-orange">2026</span>
          </h3>
          <p className="text-body-dark max-w-2xl mx-auto mb-6">
            To build a sustainable tomorrow, leading Pakistan in civil, solar, and MEP solutions that empower every client to choose their life, their power, their legacy
          </p>
          <motion.button
            className="btn-cta-main btn-cta-main-dark-offset px-8 py-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Timeline;
