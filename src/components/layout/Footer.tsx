import { Link } from "react-router"
import ButtonLink from "@/components/ui/ButtonLink"
import LanguageSelector from "@/components/ui/LanguageSelector"
import { navigation } from "@/data/navigation"
import SocialIcons from "@/components/ui/SocialIcons"

const contactItems = [
  { label: "Contact", path: "/contact" },
  { label: "Talk to an Expert", path: "/contact" },
  { label: "Request Proposal", path: "/request-proposal" },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <div className="footer-mark">
          <Link to="/" aria-label="NexGen home" className="footer-logo">
            <img
              src="/images/nexgen-logo.png"
              alt="NexGen Market Research Services"
            />
          </Link>
          <p>
            Human Understanding.
            <br />
            Reliable Data.
            <br />
            <span>Smarter Decisions.</span>
          </p>
          <small>
            Integrated market research, consumer insights and data intelligence
            across India and international markets.
          </small>
        </div>
        <div>
          <span className="annotation">Begin with a question</span>
          <ButtonLink href="/request-proposal" variant="light">
            Start a research project
          </ButtonLink>
          <LanguageSelector />
        </div>
      </div>

      <div className="footer-links footer-navigation">
        {navigation.map((group) => (
          <div key={group.label}>
            <strong>{group.label}</strong>
            {group.items.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
        <div>
          <strong>Contact</strong>
          {contactItems.map((item) => (
            <Link key={item.label} to={item.path}>
              {item.label}
            </Link>
          ))}
          <a href="mailto:mail@nexgenint.com">mail@nexgenint.com</a>
          <a href="tel:+919873177449">+91-98731 77449</a>
        </div>
      </div>

      <div className="footer-connect">
        <div>
          <span className="annotation">Our research philosophy</span>
          <p>Research → Understanding → Insight → Decision → Growth</p>
        </div>
        <SocialIcons />
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} NexGen Market Research Services Pvt. Ltd.
        </span>
        <span>Privacy Policy &nbsp;·&nbsp; Terms</span>
      </div>
    </footer>
  )
}
