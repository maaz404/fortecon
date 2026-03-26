import { lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import StatsCounter from './components/StatsCounter'
import Values from './components/Values'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import UIEnhancements from './components/UIEnhancements'
import { CardSkeleton, TextSkeleton } from './components/SkeletonLoader'

const Services = lazy(() => import('./components/Services'))
const Partners = lazy(() => import('./components/Partners'))
const Projects = lazy(() => import('./components/Projects'))
const Team = lazy(() => import('./components/Team'))
const Timeline = lazy(() => import('./components/Timeline'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const CTABanner = lazy(() => import('./components/CTABanner'))
const Contact = lazy(() => import('./components/Contact'))

function SectionFallback() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="p-8 space-y-8">
        <TextSkeleton lines={4} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function App() {
  return (
    <div className="overflow-x-hidden bg-navy text-white dark:bg-gray-950">
      {/* Skip to content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-orange focus:text-navy focus:font-bold focus:rounded-lg"
      >
        Skip to main content
      </a>
      <PageLoader />
      <UIEnhancements />
      <Navbar />
      <AnimatePresence mode="wait">
        <main id="main-content" className="relative">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            layoutId="hero-section"
          >
            <Hero />
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            layoutId="about-section"
          >
            <About />
            <StatsCounter />
            <Values />
          </motion.section>

          <Suspense fallback={<SectionFallback />}>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              layoutId="services-section"
            >
              <Services />
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              layoutId="partners-section"
            >
              <Partners />
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              layoutId="projects-section"
            >
              <Projects />
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              layoutId="team-section"
            >
              <Team />
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              layoutId="timeline-section"
            >
              <Timeline />
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.3 }}
              layoutId="testimonials-section"
            >
              <Testimonials />
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              layoutId="cta-section"
            >
              <CTABanner />
            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.3 }}
              layoutId="contact-section"
            >
              <Contact />
            </motion.section>
          </Suspense>
        </main>
      </AnimatePresence>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        <Footer />
      </motion.footer>
    </div>
  )
}

export default App
