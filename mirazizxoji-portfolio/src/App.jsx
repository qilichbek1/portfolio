import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import './App.css'

const currentYear = new Date().getFullYear()

function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const sections = document.querySelectorAll('.section, .contact-section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    sections.forEach((section) => {
      section.classList.add('reveal-ready')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <a className="footer-brand" href="#home">MIRAZIZ<span>.</span></a>
          <p>Frontend Developer · Building with curiosity.</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="https://github.com/qilichbek1" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:mirazizxojioatjonov@gmail.com">Email</a>
          </nav>
          <span className="copyright">© {currentYear} Mirazizxoji Otajonov</span>
        </div>
      </footer>
    </>
  )
}

export default App
