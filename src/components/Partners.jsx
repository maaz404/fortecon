import { motion } from 'framer-motion';
import { useMemo } from 'react';

function Partners() {
  const partners = [
    { name: 'JA Solar', category: 'Panels' },
    { name: 'Longi', category: 'Panels' },
    { name: 'Canadian Solar', category: 'Panels' },
    { name: 'Jinko Solar', category: 'Panels' },
    { name: 'Huawei', category: 'Inverters' },
    { name: 'Sungrow', category: 'Inverters' },
    { name: 'Growatt', category: 'Inverters' },
    { name: 'SMA', category: 'Inverters' },
    { name: 'Fast Cables', category: 'Cables' },
    { name: 'Pakistan Cables', category: 'Cables' },
    { name: 'Newage Cables', category: 'Cables' },
    { name: 'Millennium Cables MCI', category: 'Cables' },
    { name: 'Hikvision', category: 'Surveillance' },
    { name: 'Dhua Technology', category: 'Surveillance' },
    { name: 'Narada', category: 'Battery' },
    { name: 'FOX', category: 'Inverter' },
    { name: 'Berger', category: 'Paint' },
  ];

  const shuffledPartners = useMemo(() => {
    return [...partners].sort(() => Math.random() - 0.5);
  }, []);

  // Duplicate for seamless loop
  const duplicatedPartners = [...shuffledPartners, ...shuffledPartners];

  return (
    <section className="section-space-compact section-bg-light-b section-divider-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading-shell"
        >
          <h2 className="text-lg font-semibold text-orange mb-2">We Partner With The Best</h2>
          <p className="section-subtitle-light">Premium tier-1 equipment from globally recognized manufacturers</p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -50 * duplicatedPartners.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 px-8 py-4 bg-white rounded-xl border border-gray-200 hover:border-orange/50 hover:shadow-lg transition-all duration-300 group cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <span className="text-xl font-bold text-navy group-hover:text-orange transition-colors">
                      {partner.name}
                    </span>
                    <span className="block text-xs text-body-light-soft mt-1">{partner.category}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-body-light">Tier-1 Panels</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-body-light">25 Year Warranty</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-body-light">Certified Installers</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-body-light">Quality Assured</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Partners;
