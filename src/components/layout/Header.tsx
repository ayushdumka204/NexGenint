import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router"
import { navigation } from "@/data/navigation"
import ButtonLink from "@/components/ui/ButtonLink"
import { ArrowIcon, MenuIcon, PlusIcon } from "@/components/ui/Icons"
import LanguageSelector from "@/components/ui/LanguageSelector"
import "@/styles/header.css"

export default function Header() {
  const [active, setActive] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
      className={`site-header reference-header${
        scrolled ? " is-scrolled" : ""
      }`}
      onMouseLeave={() => {
        if (
          !headerRef.current
            ?.querySelector(".mega-menu")
            ?.contains(document.activeElement)
        )
          setActive(null)
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setActive(null)
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return
        if (mobileOpen) mobileToggleRef.current?.focus()
        else if (active)
          headerRef.current
            ?.querySelector<HTMLButtonElement>(".nav-item.active")
            ?.focus()
        setActive(null)
        setMobileOpen(false)
      }}
    >
      <div className="header-inner">
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
            </button>
          ))}
          <Link
            to="/contact"
            className="nav-item nav-contact"
            onMouseEnter={() => setActive(null)}
            onFocus={() => setActive(null)}
            aria-current={location.pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>
        <div
          className="header-actions"
          onMouseEnter={() => setActive(null)}
          onFocusCapture={() => setActive(null)}
        >
          <button
            className="theme-switch-disabled"
            type="button"
            disabled
            aria-label="Theme switching is disabled"
            title="Theme switching is disabled. The current theme stays fixed."
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />
            </svg>
          </button>
          <LanguageSelector placement="header" compact />
          <ButtonLink href="/request-proposal">Request a Proposal</ButtonLink>
        </div>
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
        >
          <div className="mega-intro">
            <Link className="eyebrow" to={activeGroup.path}>
              Explore {activeGroup.label}
            </Link>
            <h3>
              {activeGroup.label === "Solutions" ? (
                <>
                  Focused
                  <br />
                  expertise.
                  <br />
                  <span className="menu-intro-last">Better decisions.</span>
                </>
              ) : (
                activeGroup.label
              )}
            </h3>
            <p>
              {activeGroup.label === "Solutions"
                ? "Research built around your questions, your people and your opportunities."
                : activeGroup.description}
            </p>
          </div>
          <div className="mega-links">
            {activeGroup.items.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
                <ArrowIcon />
              </Link>
            ))}
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
          <Link
            className="mobile-contact-link"
            to="/contact"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <ButtonLink href="/request-proposal">Request proposal</ButtonLink>
        </nav>
      )}
    </header>
  )
}
