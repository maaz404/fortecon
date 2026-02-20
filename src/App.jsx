import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import StatsCounter from './components/StatsCounter'
import Values from './components/Values'
import Services from './components/Services'
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
      <PageLoader />
      <UIEnhancements />
      <Navbar />
      <Hero />
      <About />
      <StatsCounter />
      <Values />
      <Services />
      <Projects />
      <Timeline />
      <Testimonials />
      <CTABanner />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
