import { GraduationCap, Languages } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

function Education() {
  return (
    <section className="section learning-section" id="education">
      <div className="page-width">
        <SectionHeading eyebrow="LEARNING & COMMUNICATION" title={<>Always in the<br /><span>learning process.</span></>} />
        <div className="learning-grid">
          <article className="education-card">
            <div className="learning-card-top"><span className="learning-icon"><GraduationCap size={22} /></span><span className="card-label">EDUCATION</span></div>
            <div className="education-marker"><span /></div>
            <div className="education-copy">
              <span className="card-label">FRONTEND DEVELOPMENT</span>
              <h3>Alfargoniy<br />Learning Center</h3>
              <p>Studying the foundations of frontend development.</p>
            </div>
            <span className="education-watermark" aria-hidden="true">A</span>
          </article>
          <div className="languages-panel">
            <div className="learning-card-top"><span className="learning-icon"><Languages size={21} /></span><span className="card-label">LANGUAGES</span></div>
            <div className="language-card">
              <span className="language-symbol">UZ</span>
              <div><h3>Uzbek</h3><p>Language known</p></div>
              <span className="language-known">KNOWN</span>
            </div>
            <div className="language-card">
              <span className="language-symbol">EN</span>
              <div><h3>English</h3><p>B1 · Intermediate</p></div>
              <span className="language-known">B1</span>
            </div>
            <p className="language-footnote">Connecting through language, learning every day.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
