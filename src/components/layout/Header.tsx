import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router"
import { navigation } from "@/data/navigation"
import ButtonLink from "@/components/ui/ButtonLink"
import {
  ArrowIcon,
  ChevronIcon,
  MenuIcon,
  PlusIcon,
} from "@/components/ui/Icons"
import LanguageSelector from "@/components/ui/LanguageSelector"
import SocialIcons from "@/components/ui/SocialIcons"
import ContactModal from "@/components/forms/ContactModal"

export default function Header() {
  const [active, setActive] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const mobileToggleRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    setActive(null)
    setMobileOpen(false)
  }, [location.pathname])
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 64)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])
  const activeGroup = navigation.find((group) => group.label === active)

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
      onMouseLeave={() => setActive(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setActive(null)
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return
        if (mobileOpen) mobileToggleRef.current?.focus()
        else if (contactOpen) setContactOpen(false)
        else if (active)
          headerRef.current
            ?.querySelector<HTMLButtonElement>(".nav-item.active")
            ?.focus()
        setActive(null)
        setMobileOpen(false)
      }}
    >
      <div className="header-utility">
        <div>
          <nav aria-label="Contact and utility links">
            <a href="mailto:mail@nexgenint.com">mail@nexgenint.com</a>
            <a href="tel:+919873177449">+91-98731 77449</a>
          </nav>
          <LanguageSelector placement="utility" />
          <SocialIcons />
        </div>
      </div>
      <div
        className="header-inner"
        onMouseLeave={(event) => {
          const nextTarget = event.relatedTarget as Node | null
          if (!nextTarget || !headerRef.current?.querySelector(".mega-menu")?.contains(nextTarget))
            setActive(null)
        }}
      >
        <Link to="/" className="wordmark" aria-label="NexGen home">
          <img src="/images/nexgen-logo.png" alt="NexGen" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((group) => (
            <button
              key={group.label}
              className={`nav-item${active === group.label ? " active" : ""}${
                location.pathname.startsWith(group.path) ? " current" : ""
              }`}
              onMouseEnter={() => setActive(group.label)}
              onFocus={() => setActive(group.label)}
              onClick={() => setActive(group.label)}
              aria-expanded={active === group.label}
              aria-controls={
                active === group.label ? "nexgen-mega-menu" : undefined
              }
            >
              {group.label}
              <ChevronIcon />
            </button>
          ))}
          <button
            type="button"
            className="nav-item nav-contact"
            onClick={() => {
              setActive(null)
              setContactOpen(true)
            }}
            aria-current={location.pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </button>
        </nav>
        <ButtonLink href="/request-proposal">Request proposal</ButtonLink>
        <button
          ref={mobileToggleRef}
          className="menu-toggle"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          aria-controls="nexgen-mobile-menu"
        >
          <MenuIcon close={mobileOpen} />
        </button>
      </div>

      {activeGroup && (
        <div
          id="nexgen-mega-menu"
          className="mega-menu"
          onMouseEnter={() => setActive(activeGroup.label)}
          onMouseLeave={() => setActive(null)}
        >
          <div className="mega-intro">
            <span className="eyebrow">Explore NexGen</span>
            <h3>{activeGroup.label}</h3>
            <p>{activeGroup.description}</p>
            <Link to={activeGroup.path} className="text-link">
              View overview <ArrowIcon />
            </Link>
          </div>
          <div className="mega-links">
            {activeGroup.items.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setActive(null)}>
                {item.label}
                <ArrowIcon />
              </Link>
            ))}
          </div>
          <div className="mega-feature">
            <span className="annotation">Research signal</span>
            <strong>
              Evidence is useful only when it changes what you do next.
            </strong>
            <div className="mini-path">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <nav
          id="nexgen-mobile-menu"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((group) => (
            <details key={group.label}>
              <summary>
                {group.label}
                <PlusIcon />
              </summary>
              <div>
                <Link
                  to={group.path}
                  className="mobile-overview"
                  onClick={() => setMobileOpen(false)}
                >
                  Explore {group.label.toLowerCase()} <ArrowIcon />
                </Link>
                {group.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    aria-current={
                      location.pathname === item.path ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}
          <button
            className="mobile-contact-link"
            type="button"
            onClick={() => {
              setMobileOpen(false)
              setContactOpen(true)
            }}
          >
            Contact
          </button>
          <ButtonLink href="/request-proposal">Request proposal</ButtonLink>
        </nav>
      )}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </header>
  )
}
