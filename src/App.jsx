import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import StatsCounter from './components/StatsCounter'
import Values from './components/Values'
import Services from './components/Services'
import Partners from './components/Partners'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import UIEnhancements from './components/UIEnhancements'

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* Skip to content for accessibility */}
      <a 
        href="#about" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-orange focus:text-navy focus:font-bold focus:rounded-lg"
      >
        Skip to main content
      </a>
      <PageLoader />
      <UIEnhancements />
      <Navbar />
      <Hero />
      <About />
      <Team />
      <StatsCounter />
      <Values />
      <Services />
      <Partners />
      <Projects />
      <Timeline />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
