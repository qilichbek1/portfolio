import { Braces, Code2, GitBranch, PanelsTopLeft, Zap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const skills = [
  { name: 'HTML5', detail: 'Structure', icon: Code2, color: 'orange' },
  { name: 'CSS3', detail: 'Styling', icon: PanelsTopLeft, color: 'blue' },
  { name: 'JavaScript', detail: 'Interactivity', icon: Braces, color: 'yellow' },
  { name: 'React', detail: 'UI library', icon: Zap, color: 'cyan' },
  { name: 'Vite', detail: 'Build tool', icon: Zap, color: 'purple' },
  { name: 'Git', detail: 'Version control', icon: GitBranch, color: 'red' },
  { name: 'GitHub', detail: 'Code hosting', icon: Code2, color: 'white' },
]

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="page-width">
        <SectionHeading
          eyebrow="TOOLS IN MY TOOLKIT"
          title={<>The building blocks<br /><span>behind the browser.</span></>}
          description="Technologies I’m learning and using to make ideas work on the web."
        />
        <div className="skills-grid">
          {skills.map(({ name, detail, icon: Icon, color }, index) => (
            <article className="skill-card" key={name}>
              <div className={`skill-icon ${color}`}><Icon size={21} strokeWidth={1.7} /></div>
              <div><h3>{name}</h3><p>{detail}</p></div>
              <span className="skill-number">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
