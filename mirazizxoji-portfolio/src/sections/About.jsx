import { Code2, GraduationCap, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="page-width">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Learning the craft.<br /><span>Building with purpose.</span></>} />
        <div className="about-grid">
          <div className="about-statement">
            <span className="about-index">01 — ABOUT</span>
            <p>Good interfaces feel effortless.<br /><strong>Making them takes care.</strong></p>
            <div className="about-orbit" aria-hidden="true"><span /><i /><b><Code2 size={30} /></b></div>
          </div>
          <div className="about-details">
            <p>
              I&apos;m Mirazizxoji, a frontend developer learning and building modern
              web applications. I enjoy bringing ideas to life through responsive
              design, clean code, and interactive user experiences.
            </p>
            <p>
              I&apos;m studying Frontend Development at Alfargoniy Learning Center,
              where I keep growing my skills and exploring how thoughtful design
              and technology come together.
            </p>
            <div className="about-note">
              <span><GraduationCap size={19} /></span>
              <div><small>CURRENTLY LEARNING</small><b>Frontend Development</b><small>Alfargoniy Learning Center</small></div>
              <Sparkles className="note-sparkle" size={19} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
