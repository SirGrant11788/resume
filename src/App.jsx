import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '60px' }}>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}
