import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const platforms = [
  { name: "LinkedIn", mark: faLinkedinIn },
  { name: "Facebook", mark: faFacebookF },
  { name: "Instagram", mark: faInstagram },
  { name: "YouTube", mark: faYoutube },
]
export default function SocialIcons() {
  return (
    <div className="social-icons" aria-label="Social media">
      {platforms.map(({ name, mark }) => (
        <span key={name} className="social-icon" role="img" aria-label={name}>
          <svg
            viewBox={`0 0 ${mark.icon[0]} ${mark.icon[1]}`}
            aria-hidden="true"
          >
            <path
              d={
                Array.isArray(mark.icon[4])
                  ? mark.icon[4].join(" ")
                  : mark.icon[4]
              }
            />
          </svg>
        </span>
      ))}
    </div>
  )
}
