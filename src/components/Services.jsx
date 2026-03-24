import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, PenTool, HardHat, Settings, Building2, Plug, Zap, Battery, Gauge } from 'lucide-react';

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Search,
      title: 'Need Analysis & Survey',
      description: 'Comprehensive site evaluation including shadow analysis, structural assessment, and energy consumption audit to design the optimal system.',
      features: ['Site Assessment', 'Load Analysis', 'Shadow Study', 'Feasibility Report'],
    },
    {
      icon: PenTool,
      title: 'Design & Engineering',
      description: 'Custom solar system design using industry-leading software with detailed engineering drawings, single-line diagrams, and equipment specifications.',
      features: ['3D PV Design', 'SLD Drawings', 'BOQ Preparation', 'ROI Analysis'],
    },
    {
      icon: HardHat,
      title: 'Installation & Commissioning',
      description: 'Professional installation by PEC-certified engineers with rigorous quality control, safety protocols, and seamless grid integration.',
      features: ['Certified Installation', 'Quality Materials', 'Grid Synchronization', 'Safety Compliance'],
    },
    {
      icon: Settings,
      title: 'Operations & Maintenance',
      description: 'Comprehensive O&M services including real-time monitoring, preventive maintenance, performance analysis, and rapid response support.',
      features: ['24/7 Monitoring', 'Preventive Care', 'Performance Reports', 'Rapid Support'],
    },
  ];

  const systemTypes = [
    {
      icon: Building2,
      title: 'Civil Engineering Works',
      description: 'Structural, infrastructure, and construction solutions delivered to project standards.',
    },
    {
      icon: Settings,
      title: 'Mechanical Works',
      description: 'Reliable HVAC, piping, and mechanical system execution for efficient operations.',
    },
    {
      icon: Zap,
      title: 'Electrical Works / Automation',
      description: 'Power distribution, controls, and automation systems for safe, smart performance.',
    },
    {
      icon: Plug,
      title: 'IT Solutions',
      description: 'Integrated IT and network solutions to support connected, future-ready facilities.',
    },
  ];

  const solarSystemTypes = [
    { icon: Plug, title: 'On-Grid Systems', description: 'Net metering enabled grid-tied solutions' },
    { icon: Battery, title: 'Hybrid Systems', description: 'Grid + battery backup solutions' },
    { icon: Building2, title: 'Commercial Scale', description: 'Large-scale industrial installations' },
    { icon: Gauge, title: 'Energy Audits', description: 'Comprehensive energy assessments' },
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
    <section id="services" className="py-24 bg-navy relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f6b93b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-orange/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-orange/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-orange/20 text-orange rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What We Offer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-orange">Services</span>
          </h2>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-navy-light p-8 rounded-2xl border border-orange/20 hover:border-orange/50 transition-all duration-300 group overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-orange/20 rounded-full flex items-center justify-center group-hover:bg-orange transition-colors duration-300">
                  <span className="text-orange group-hover:text-navy font-bold">{index + 1}</span>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange/0 via-orange/10 to-orange/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-orange/10 rounded-xl group-hover:bg-orange transition-colors duration-300">
                    <Icon className="text-orange group-hover:text-navy transition-colors duration-300" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 w-full">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-orange rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Engineering Services Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Our <span className="text-orange">Engineering Services</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            End-to-end multidisciplinary engineering services built for quality delivery, performance, and long-term reliability.
          </p>
        </motion.div>

        {/* System Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {systemTypes.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-orange/10 to-orange/5 rounded-xl border border-orange/20 hover:border-orange/40 transition-colors group"
                whileHover={{ scale: 1.03 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange/20 rounded-full mb-4 group-hover:bg-orange transition-colors duration-300">
                  <Icon className="text-orange group-hover:text-navy transition-colors" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-1">{system.title}</h4>
                <p className="text-gray-400 text-sm">{system.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Solar Services Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center mt-12 mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Our <span className="text-orange">Solar Services</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Innovative solar systems designed for reliable power, higher efficiency, and long-term value.
          </p>
        </motion.div>

        {/* Solar System Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {solarSystemTypes.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-orange/10 to-orange/5 rounded-xl border border-orange/20 hover:border-orange/40 transition-colors group"
                whileHover={{ scale: 1.03 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange/20 rounded-full mb-4 group-hover:bg-orange transition-colors duration-300">
                  <Icon className="text-orange group-hover:text-navy transition-colors" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-1">{system.title}</h4>
                <p className="text-gray-400 text-sm">{system.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-r from-orange/10 via-orange/5 to-orange/10 rounded-2xl border border-orange/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Our Process</h3>
            <p className="text-gray-400">From consultation to completion in 4 simple steps</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {['Consultation', 'Design', 'Installation', 'Support'].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-navy font-bold text-lg">
                    {index + 1}
                  </div>
                  <span className="text-white font-medium">{step}</span>
                </div>
                {index < 3 && (
                  <div className="hidden md:block w-16 h-0.5 bg-orange/30" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
