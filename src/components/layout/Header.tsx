
import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router"
import { navigation } from "@/data/navigation"
import LanguageSelector from "@/components/ui/LanguageSelector"
import { ArrowIcon, MenuIcon, PlusIcon } from "@/components/ui/Icons"

export default function Header() {
  const [active, setActive] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const mobileToggleRef = useRef<HTMLButtonElement>(null)

  const activeGroup = navigation.find(
    (group) => group.label === active
  )

  useEffect(() => {
    setActive(null)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null)
        setMobileOpen(false)
      }
    }

    const handleOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node

      if (!headerRef.current?.contains(target)) {
        setActive(null)
        setMobileOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.addEventListener("pointerdown", handleOutsideClick)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("pointerdown", handleOutsideClick)
    }
  }, [])

  const closeMenus = () => {
    setActive(null)
    setMobileOpen(false)
  }

  return (
    <>
      <style>{`

        /* =========================================
           GLOBAL CUSTOM CURSOR VISIBILITY
        ========================================= */

        .custom-cursor,
        .cursor,
        .cursor-dot,
        .cursor-outline,
        .cursor-follower,
        .cursor-inner,
        .cursor-outer,
        #custom-cursor,
        [data-custom-cursor] {
          position: fixed !important;
          z-index: 2147483647 !important;
          pointer-events: none !important;
        }

        /* =========================================
           HEADER
        ========================================= */

        .nx-header,
        .nx-header * {
          box-sizing: border-box;
        }

        .nx-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: rgba(251,252,250,.98);
          border-bottom: 1px solid #dce3e9;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          font-family: inherit;
        }

        .nx-header-inner {
          width: 100%;
          min-height: 90px;
          padding: 0 30px;
          display: grid;
          grid-template-columns: 165px minmax(0,1fr) auto;
          align-items: center;
          gap: 18px;
        }

        /* LOGO */

        .nx-brand {
          width: 145px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-shrink: 0;
          position: relative;
          z-index: 5;
        }

        .nx-brand img {
          display: block;
          width: 145px;
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* DESKTOP NAVIGATION */

        .nx-nav {
          display: flex;
          min-width: 0;
          height: 90px;
          align-items: center;
          justify-content: center;
          gap: clamp(13px, 1.55vw, 23px);
        }

        .nx-nav-item {
          position: relative;
          height: 100%;
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: none;
          background: transparent;
          color: #172b43;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -.15px;
          white-space: nowrap;
          text-decoration: none;
          cursor: pointer;
          transition: color .2s ease;
        }

        .nx-nav-item:hover,
        .nx-nav-item.active,
        .nx-nav-item.current {
          color: #0757ad;
        }

        .nx-nav-item::after {
          content: "";
          position: absolute;
          bottom: 16px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #0757ad;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .2s ease;
        }

        .nx-nav-item:hover::after,
        .nx-nav-item.active::after,
        .nx-nav-item.current::after {
          transform: scaleX(1);
        }

        /* ACTIONS */

        .nx-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          flex-shrink: 0;
          position: relative;
          z-index: 20;
        }

        .nx-language {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          position: relative;
        }


/* =========================================
   NEXGEN LANGUAGE SELECTOR
   COMPACT OVAL + DROPDOWN DESIGN
========================================= */

/* MAIN LANGUAGE BUTTON */

.nx-language .language-selector__trigger,
.nx-language .language-trigger {
  width: 72px !important;
  min-width: 62px !important;
  max-width: 72px !important;
  height: 36px !important;

  padding: 0 6px !important;
  margin: 0 !important;

  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 4px !important;

  border: 1.5px solid #d6e0e9 !important;
  border-radius: 50px !important;

  background: #ffffff !important;
  color: #243950 !important;

  font-size: 10px !important;
  line-height: 1 !important;
  white-space: nowrap !important;

  box-shadow: none !important;
  box-sizing: border-box !important;

  cursor: pointer !important;

  transition:
    border-color 0.2s ease,
    color 0.2s ease !important;
}

/* MAIN BUTTON HOVER */

.nx-language .language-selector__trigger:hover,
.nx-language .language-trigger:hover {
  border-color: #0757ad !important;
  color: #0757ad !important;
}

/* GLOBE ICON - BIGGER */

.nx-language .language-selector__trigger svg:first-child,
.nx-language .language-trigger svg:first-child {
  width: 17px !important;
  height: 17px !important;
  min-width: 17px !important;
  min-height: 17px !important;
  flex-shrink: 0 !important;
}

/* DROPDOWN ARROW */

.nx-language .language-selector__trigger svg:last-child,
.nx-language .language-trigger svg:last-child {
  width: 12px !important;
  height: 12px !important;
  flex-shrink: 0 !important;
}

/* DROPDOWN PANEL */

.nx-language .language-menu {
  width: 310px !important;
  min-width: 310px !important;

  background: #ffffff !important;
  border-top: 3px solid #00b140 !important;
  border-radius: 0 !important;

  padding: 16px 12px 10px !important;

  box-shadow: 0 15px 35px rgba(23,43,67,0.14) !important;

  z-index: 1500 !important;
}

/* DROPDOWN HEADING */

.nx-language .language-menu h3,
.nx-language .language-menu .language-heading {
  padding: 8px 10px 12px !important;
  margin: 0 !important;

  color: #30343b !important;
  font-size: 10px !important;
  font-weight: 700 !important;
  letter-spacing: 1.5px !important;
  text-transform: uppercase !important;

  border-bottom: 1px solid #dce3e9 !important;
}

/* LANGUAGE LIST */

.nx-language .language-list {
  display: block !important;
  width: 100% !important;

  max-height: 355px !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;

  scrollbar-width: thin;
  scrollbar-color: #999999 transparent;
}

/* INDIVIDUAL LANGUAGE ROW */

.nx-language .language-option,
.nx-language .language-item {
  width: 100% !important;
  min-height: 41px !important;

  display: grid !important;
  grid-template-columns: 1fr 1fr 18px !important;
  align-items: center !important;

  gap: 8px !important;
  padding: 8px 10px !important;
  margin: 0 !important;

  border: 0 !important;
  border-bottom: 1px solid #dce3e9 !important;
  border-radius: 0 !important;

  background: #ffffff !important;
  color: #172b43 !important;

  text-align: left !important;
  cursor: pointer !important;
}

/* LANGUAGE NAME */

.nx-language .language-option span:first-child,
.nx-language .language-item span:first-child {
  font-size: 14px !important;
  color: #172b43 !important;
}

/* NATIVE LANGUAGE NAME */

.nx-language .language-option span:nth-child(2),
.nx-language .language-item span:nth-child(2) {
  font-size: 13px !important;
  color: #64748b !important;
}

/* LANGUAGE HOVER */

.nx-language .language-option:hover,
.nx-language .language-item:hover {
  background: #f1f5f3 !important;
}

/* SELECTED LANGUAGE */

.nx-language .language-option.active,
.nx-language .language-option.selected,
.nx-language .language-item.active,
.nx-language .language-item.selected {
  background: #edf3f0 !important;
}

/* SELECTED CHECK ICON */

.nx-language .language-option svg,
.nx-language .language-item svg {
  width: 17px !important;
  height: 17px !important;

  color: #00b140 !important;
  stroke: #00b140 !important;
}

/* MOBILE */

@media (max-width: 600px) {
  .nx-language .language-selector__trigger,
  .nx-language .language-trigger {
    width: 58px !important;
    min-width: 58px !important;
    max-width: 58px !important;
    height: 34px !important;
  }

  .nx-language .language-selector__trigger svg:first-child,
  .nx-language .language-trigger svg:first-child {
    width: 16px !important;
    height: 16px !important;
  }

  .nx-language .language-menu {
    width: min(310px, calc(100vw - 32px)) !important;
    min-width: min(310px, calc(100vw - 32px)) !important;
  }
}


        /* PROPOSAL BUTTON */

        .nx-proposal {
          min-height: 44px;
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 0 20px;
          border: 1px solid #35106b;
          border-radius: 999px;
          background: #35106b;
          color: #fff !important;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
          text-decoration: none;
          cursor: pointer;
          transition: all .25s ease;
        }

        .nx-proposal:hover {
          background: #00b140 !important;
          border-color: #00b140 !important;
          color: #fff !important;
          transform: translateY(-1px);
          box-shadow: 0 7px 18px rgba(0,177,64,.22);
        }

        .nx-proposal svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          color: #fff;
          stroke: #fff;
          transition: transform .25s ease;
        }

        .nx-proposal:hover svg {
          color: #fff;
          stroke: #fff;
          transform: translate(2px,-2px);
        }

        /* MEGA MENU */

        .nx-mega {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 1100;
          display: grid;
          grid-template-columns: 240px minmax(0,1fr);
          gap: 30px;
          min-height: 298px;
          padding: 29px 25px;
          border: 1px solid #dce3e9;
          border-top: 0;
          background: #fbfcfa;
          box-shadow: 0 20px 45px rgba(23,43,67,.09);
        }

        .nx-mega-intro {
          padding-right: 27px;
          border-right: 1px solid #cbd8e3;
        }

        .nx-mega-eyebrow {
          color: #0757ad;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.7px;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
        }

        .nx-mega-intro h3 {
          margin: 22px 0 0;
          color: #172b43;
          font-size: 25px;
          font-weight: 500;
          line-height: 1.35;
          letter-spacing: -.6px;
        }

        .nx-mega-intro p {
          max-width: 205px;
          margin: 20px 0 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.9;
        }

        .nx-mega-links {
          display: grid;
          grid-template-columns: repeat(3,minmax(0,1fr));
          align-content: start;
          column-gap: 25px;
        }

        .nx-mega-link {
          min-height: 51px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 0 5px;
          border-bottom: 1px solid #cbd8e3;
          color: #243950;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: color .2s ease;
        }

        .nx-mega-link:hover {
          color: #0757ad;
        }

        .nx-mega-link svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          transition: transform .2s ease;
        }

        .nx-mega-link:hover svg {
          transform: translate(2px,-2px);
        }

        /* MOBILE */

        .nx-mobile-toggle {
          display: none;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid #dce3e9;
          border-radius: 50%;
          background: #fff;
          color: #172b43;
          cursor: pointer;
        }

        .nx-mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 1100;
          max-height: calc(100dvh - 76px);
          overflow-y: auto;
          padding: 16px 20px 24px;
          border-bottom: 1px solid #dce3e9;
          background: #fbfcfa;
          box-shadow: 0 15px 30px rgba(23,43,67,.09);
        }

        .nx-mobile-menu details {
          border-bottom: 1px solid #e1e7eb;
        }

        .nx-mobile-menu summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 0;
          color: #172b43;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          list-style: none;
        }

        .nx-mobile-menu summary::-webkit-details-marker {
          display: none;
        }

        .nx-mobile-menu summary svg {
          width: 17px;
          height: 17px;
        }

        .nx-mobile-links {
          display: grid;
          padding: 0 0 12px 12px;
        }

        .nx-mobile-links a {
          padding: 9px 0;
          color: #475569;
          font-size: 13px;
          text-decoration: none;
        }

        .nx-mobile-links a:hover {
          color: #0757ad;
        }

        .nx-mobile-overview {
          color: #0757ad !important;
          font-weight: 600;
        }

        .nx-mobile-contact {
          display: block;
          padding: 16px 0;
          color: #172b43;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        .nx-mobile-proposal {
          display: flex;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          margin-top: 12px;
          border-radius: 999px;
          background: #35106b;
          color: #fff !important;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
        }

        .nx-mobile-proposal:hover {
          background: #00b140;
        }

        /* RESPONSIVE */

        @media (max-width: 1200px) {
          .nx-header-inner {
            grid-template-columns: 145px minmax(0,1fr) auto;
            gap: 10px;
            padding: 0 20px;
          }

          .nx-brand {
            width: 130px;
          }

          .nx-nav {
            display: none;
          }

          .nx-mobile-toggle {
            display: inline-flex;
          }
        }

        @media (max-width: 600px) {
          .nx-header-inner {
            min-height: 70px;
            padding: 0 15px;
            display: flex;
            justify-content: space-between;
            gap: 8px;
          }

          .nx-brand {
            width: 105px;
          }

          .nx-actions {
            gap: 7px;
          }

          .nx-proposal {
            min-height: 38px;
            padding: 0 10px;
            gap: 6px;
            font-size: 9px;
          }

          .nx-language .language-selector__trigger {
            min-width: 62px !important;
            height: 34px !important;
            padding: 0 8px !important;
          }
        }

        @media (max-width: 380px) {
          .nx-brand {
            width: 85px;
          }

          .nx-proposal {
            padding: 0 7px;
            font-size: 9px;
          }

          .nx-actions {
            gap: 5px;
          }
        }

      `}</style>

      <header
        ref={headerRef}
        className="nx-header"
        onMouseLeave={() => setActive(null)}
      >
        <div className="nx-header-inner">

          {/* LOGO */}
          <Link
            to="/"
            className="nx-brand"
            aria-label="NexGen home"
            onClick={closeMenus}
          >
            <img
              src="/images/nexgen-logo.png"
              alt="NexGen"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="nx-nav" aria-label="Primary navigation">
            {navigation.map((group) => {
              const isActive = active === group.label
              const isCurrent = location.pathname.startsWith(group.path)

              return (
                <button
                  key={group.label}
                  type="button"
                  className={`nx-nav-item${isActive ? " active" : ""}${
                    isCurrent ? " current" : ""
                  }`}
                  onMouseEnter={() => setActive(group.label)}
                  onFocus={() => setActive(group.label)}
                  onClick={() =>
                    setActive((current) =>
                      current === group.label ? null : group.label
                    )
                  }
                  aria-expanded={isActive}
                  aria-controls={isActive ? "nx-mega-menu" : undefined}
                >
                  {group.label}
                </button>
              )
            })}

            <Link
              to="/contact"
              className={`nx-nav-item${
                location.pathname === "/contact" ? " current" : ""
              }`}
              onMouseEnter={() => setActive(null)}
              onFocus={() => setActive(null)}
              aria-current={
                location.pathname === "/contact" ? "page" : undefined
              }
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT ACTIONS */}
          <div
            className="nx-actions"
            onMouseEnter={() => setActive(null)}
            onFocusCapture={() => setActive(null)}
          >
            <div className="nx-language">
              <LanguageSelector
                placement="header"
                compact
              />
            </div>

            <Link
              to="/request-proposal"
              className="nx-proposal"
              onClick={closeMenus}
            >
              Request a Proposal

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              ref={mobileToggleRef}
              type="button"
              className="nx-mobile-toggle"
              onClick={() => {
                setMobileOpen((open) => !open)
                setActive(null)
              }}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="nx-mobile-menu"
            >
              <MenuIcon close={mobileOpen} />
            </button>
          </div>
        </div>

        {/* MEGA MENU */}
        {activeGroup && (
          <div
            id="nx-mega-menu"
            className="nx-mega"
            onMouseEnter={() => setActive(activeGroup.label)}
          >
            <div className="nx-mega-intro">
              <Link
                to={activeGroup.path}
                className="nx-mega-eyebrow"
                onClick={closeMenus}
              >
                Explore {activeGroup.label}
              </Link>

              <h3>
                {activeGroup.label === "Solutions" ? (
                  <>
                    Focused
                    <br />
                    expertise.
                    <br />
                    Better decisions.
                  </>
                ) : activeGroup.label === "Industries" ? (
                  <>
                    A deeper
                    <br />
                    understanding.
                    <br />
                    A clearer way
                    <br />
                    forward.
                  </>
                ) : (
                  activeGroup.label
                )}
              </h3>

              <p>
                {activeGroup.label === "Solutions" ||
                activeGroup.label === "Industries"
                  ? "Research built around your questions, your people and your opportunities."
                  : activeGroup.description}
              </p>
            </div>

            {/* CLICKABLE MENU LINKS */}
            <div className="nx-mega-links">
              {activeGroup.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="nx-mega-link"
                  onClick={closeMenus}
                >
                  <span>{item.label}</span>
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* MOBILE MENU */}
        {mobileOpen && (
          <nav
            id="nx-mobile-menu"
            className="nx-mobile-menu"
            aria-label="Mobile navigation"
          >
            {navigation.map((group) => (
              <details key={group.label}>
                <summary>
                  {group.label}
                  <PlusIcon />
                </summary>

                <div className="nx-mobile-links">
                  <Link
                    to={group.path}
                    className="nx-mobile-overview"
                    onClick={closeMenus}
                  >
                    Explore {group.label}
                  </Link>

                  {group.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenus}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            <Link
              to="/contact"
              className="nx-mobile-contact"
              onClick={closeMenus}
            >
              Contact
            </Link>

            <Link
              to="/request-proposal"
              className="nx-mobile-proposal"
              onClick={closeMenus}
            >
              Request a Proposal
            </Link>
          </nav>
        )}
      </header>
    </>
  )
}
