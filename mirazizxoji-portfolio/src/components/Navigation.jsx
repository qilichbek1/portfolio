import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#home" aria-label="Miraziz, home">
          MIRAZIZ<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          id="primary-navigation"
          className={`primary-nav${isOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  )
}

export default Navigation
