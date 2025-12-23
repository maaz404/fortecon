import { motion } from 'framer-motion';

function Clients() {
  const clients = [
    'OGDCL',
    'FBR',
    'NHA',
    'SPD',
    'PRIMACO',
    'COMSATS',
    '5G Group',
  ];

  // Duplicate the array for seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Our Satisfied <span className="text-orange">Clients</span>
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by leading organizations across Pakistan
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [0, -50 * duplicatedClients.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-32 flex items-center justify-center bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-orange transition-colors duration-300 px-8"
                >
                  <span className="text-2xl font-bold text-navy text-center">
                    {client}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-orange mb-2">100+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange mb-2">50+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange mb-2">15MW+</p>
            <p className="text-gray-600">Installed Capacity</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-orange mb-2">98%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Clients;
