import { ArrowDown, ArrowUpRight, GitBranch, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid page-width">
        <div className="hero-copy">
          <div className="status-pill"><span className="status-dot" /> Learning, building &amp; growing</div>
          <p className="hero-kicker">FRONTEND DEVELOPER <span>·</span> PORTFOLIO</p>
          <h1>Hi, I&apos;m<br /><span>Mirazizxoji</span><b>.</b></h1>
          <p className="hero-description">
            I&apos;m a frontend developer learning to build modern, responsive web
            experiences with thoughtful details and clean code.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-quiet" href="#contact">Contact me</a>
          </div>
          <a className="github-link" href="https://github.com/qilichbek1" target="_blank" rel="noreferrer">
            <GitBranch size={18} /> github.com/qilichbek1 <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="hero-art" aria-label="Abstract layered violet 3D artwork" role="img">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-glow" />
          <div className="art-cube">
            <div className="cube-face cube-front"><span>&lt; / &gt;</span></div>
            <div className="cube-face cube-top" />
            <div className="cube-face cube-side" />
          </div>
          <div className="art-chip chip-code"><span className="chip-icon"><Sparkles size={15} /></span><span>curiosity.exe</span><i /></div>
          <div className="art-chip chip-react"><span>✳</span><b>React</b></div>
          <div className="art-caption"><span>01 / 06</span><i /> CRAFTING FOR THE WEB</div>
          <div className="art-star star-one">✳</div>
          <div className="art-star star-two">✧</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      <div className="hero-bottom-line" aria-hidden="true" />
    </section>
  )
}

export default Hero
