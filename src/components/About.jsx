import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle } from 'lucide-react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              About <span className="text-orange">Fortecon</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Established in <span className="font-bold text-orange">2019</span>, 
              Fortecon is an employee-owned company certified by{' '}
              <span className="font-bold text-navy">PEC (C6 Category)</span>. 
              We strive to build an Eco-Friendly and sustainable world through 
              innovative solar energy solutions.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-orange flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">
                  Pakistan's First Service Oriented Solar Company
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-orange flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">
                  PEC Certified (C6 Category) ensuring quality and compliance
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-orange flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">
                  Employee-owned structure fostering dedication and excellence
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 bg-orange/10 px-6 py-4 rounded-lg">
              <Award className="text-orange" size={32} />
              <div>
                <p className="text-sm text-gray-600">Certified By</p>
                <p className="text-xl font-bold text-navy">PEC - C6 Category</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80"
                alt="Solar Construction"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-orange">5+</p>
                    <p className="text-sm">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-orange">100+</p>
                    <p className="text-sm">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-orange">50+</p>
                    <p className="text-sm">Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange/20 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy/10 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
