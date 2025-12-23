import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Values from './components/Values'
import Services from './components/Services'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Services />
      <Projects />
      <Clients />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
