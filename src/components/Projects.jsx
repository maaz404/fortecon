import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Zap, X, ChevronLeft, ChevronRight, ExternalLink, Award, Building2, Sun } from 'lucide-react';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'government', label: 'Government' },
    { id: 'educational', label: 'Educational' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'residential', label: 'Residential' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Government Office Complex',
      location: 'Islamabad',
      capacity: '500 KW',
      year: '2024',
      category: 'government',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'A comprehensive solar installation for a major government office complex in Islamabad. This project demonstrates our capability to handle large-scale public sector installations with strict compliance requirements.',
      features: ['500 KW rooftop system', 'Net metering enabled', 'Real-time monitoring dashboard', 'Comprehensive O&M contract'],
      savings: '₨ 12M+ annually',
      co2Saved: '450 tons/year',
      client: 'Government of Pakistan',
    },
    {
      id: 2,
      title: 'Federal Institution HQ',
      location: 'Islamabad',
      capacity: '350 KW',
      year: '2023',
      category: 'government',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Complete turnkey solar power solution for a federal institution headquarters, ensuring energy independence and significant operational cost savings.',
      features: ['350 KW grid-tied system', 'Hybrid inverter technology', 'Remote monitoring system', 'Zero downtime installation'],
      savings: '₨ 8M+ annually',
      co2Saved: '315 tons/year',
      client: 'Federal Institution',
    },
    {
      id: 3,
      title: 'University Campus Solar',
      location: 'Islamabad',
      capacity: '600 KW',
      year: '2023',
      category: 'educational',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Large-scale educational sector project featuring distributed solar installations across multiple campus buildings, serving as a model for sustainable education infrastructure.',
      features: ['600 KW distributed system', 'Multi-building integration', 'Educational monitoring display', '25-year panel warranty'],
      savings: '₨ 15M+ annually',
      co2Saved: '540 tons/year',
      client: 'Higher Education Institution',
    },
    {
      id: 4,
      title: 'Government Authority Office',
      location: 'Rawalpindi',
      capacity: '300 KW',
      year: '2023',
      category: 'government',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Strategic solar installation for a government authority complex, demonstrating our expertise in handling infrastructure projects with complex requirements.',
      features: ['300 KW grid-tied system', 'Structural reinforcement', 'Rapid installation timeline', 'Annual maintenance included'],
      savings: '₨ 7M+ annually',
      co2Saved: '270 tons/year',
      client: 'Government Authority',
    },
    {
      id: 5,
      title: 'Industrial Manufacturing Plant',
      location: 'Lahore',
      capacity: '1 MW',
      year: '2024',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Flagship industrial project featuring a 1 MW installation for a leading manufacturing facility. This project showcases our capability to handle megawatt-scale industrial installations.',
      features: ['1 MW ground-mounted system', 'Industrial inverters', 'SCADA integration', 'Performance guarantee'],
      savings: '₨ 25M+ annually',
      co2Saved: '900 tons/year',
      client: 'Industrial Group',
    },
    {
      id: 6,
      title: 'Corporate Head Office',
      location: 'Karachi',
      capacity: '200 KW',
      year: '2023',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Commercial office building solar solution with premium aesthetics and maximum efficiency. This project demonstrates our expertise in urban commercial installations.',
      features: ['200 KW rooftop system', 'Premium bifacial panels', 'Building integration design', 'Smart monitoring app'],
      savings: '₨ 5M+ annually',
      co2Saved: '180 tons/year',
      client: 'Corporate Enterprise',
    },
    {
      id: 7,
      title: 'Luxury Residence Solar',
      location: 'Islamabad',
      capacity: '25 KW',
      year: '2024',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Premium residential hybrid solar system for a luxury home in Islamabad, featuring battery backup for complete energy independence.',
      features: ['25 KW hybrid system', 'Lithium battery storage', 'Aesthetic roof integration', 'Mobile app monitoring'],
      savings: '₨ 600K+ annually',
      co2Saved: '22 tons/year',
      client: 'Private Residence',
    },
    {
      id: 8,
      title: 'Shopping Mall Complex',
      location: 'Lahore',
      capacity: '450 KW',
      year: '2024',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
      ],
      description: 'Large-scale commercial installation for a major shopping complex, maximizing rooftop space utilization while ensuring minimal disruption to daily operations.',
      features: ['450 KW rooftop system', 'Carport solar canopy', 'Load management system', 'Peak shaving capability'],
      savings: '₨ 11M+ annually',
      co2Saved: '405 tons/year',
      client: 'Commercial Mall',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-orange/10 text-orange rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Featured <span className="text-orange">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our commitment to excellence in solar energy solutions across Pakistan
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange text-navy shadow-lg shadow-orange/25'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white cursor-pointer"
                onClick={() => openProject(project)}
                whileHover={{ y: -10 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange text-navy text-xs font-bold rounded-full uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Capacity Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-navy text-sm font-bold rounded-full flex items-center gap-1">
                      <Zap size={14} className="text-orange" />
                      {project.capacity}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-orange" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-orange" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* View Details Link */}
                  <div className="mt-4 flex items-center gap-2 text-orange font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Details</span>
                    <ExternalLink size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 border-2 border-navy text-navy font-bold rounded-lg hover:bg-navy hover:text-white transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2 h-full">
                {/* Image Gallery */}
                <div className="relative h-64 md:h-full bg-navy">
                  <img
                    src={selectedProject.gallery[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gallery Navigation */}
                  {selectedProject.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                        {currentImageIndex + 1} / {selectedProject.gallery.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-8 overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <span className="px-3 py-1 bg-orange/10 text-orange text-xs font-bold rounded-full uppercase">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-navy mt-3">
                        {selectedProject.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{selectedProject.client}</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 text-orange mb-1">
                          <Zap size={18} />
                          <span className="text-sm font-medium">Capacity</span>
                        </div>
                        <p className="text-xl font-bold text-navy">{selectedProject.capacity}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 text-orange mb-1">
                          <Sun size={18} />
                          <span className="text-sm font-medium">Savings</span>
                        </div>
                        <p className="text-xl font-bold text-navy">{selectedProject.savings}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 text-orange mb-1">
                          <MapPin size={18} />
                          <span className="text-sm font-medium">Location</span>
                        </div>
                        <p className="text-xl font-bold text-navy">{selectedProject.location}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 text-orange mb-1">
                          <Building2 size={18} />
                          <span className="text-sm font-medium">CO₂ Saved</span>
                        </div>
                        <p className="text-xl font-bold text-navy">{selectedProject.co2Saved}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="font-bold text-navy mb-2">About This Project</h4>
                      <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-bold text-navy mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange rounded-full" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-4">
                      <button className="flex-1 px-6 py-3 bg-orange text-navy font-bold rounded-lg hover:bg-orange-dark transition-colors">
                        Request Similar Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
