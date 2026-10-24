import { ArrowUpRight, GitBranch, Mail } from 'lucide-react'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-orb contact-orb-one" aria-hidden="true" />
      <div className="contact-orb contact-orb-two" aria-hidden="true" />
      <div className="page-width contact-content">
        <span className="eyebrow">HAVE AN IDEA IN MIND?</span>
        <h2>Let&apos;s Build<br /><span>Something Great.</span></h2>
        <p>I&apos;d love to connect about projects, ideas, and learning together.</p>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:mirazizxojioatjonov@gmail.com"><Mail size={17} /> Say hello <ArrowUpRight size={16} /></a>
          <a className="contact-github" href="https://github.com/qilichbek1" target="_blank" rel="noreferrer"><GitBranch size={18} /> Find me on GitHub <ArrowUpRight size={15} /></a>
        </div>
        <a className="contact-email" href="mailto:mirazizxojioatjonov@gmail.com">mirazizxojioatjonov@gmail.com</a>
      </div>
    </section>
  )
}

export default Contact
