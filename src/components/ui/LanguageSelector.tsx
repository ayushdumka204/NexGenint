import { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string
            includedLanguages: string
            autoDisplay: boolean
          },
          elementId: string,
        ) => void
      }
    }
  }
}

const languages = [
  ["en", "English", "English"],
  ["hi", "Hindi", "हिन्दी"],
  ["bn", "Bengali", "বাংলা"],
  ["ta", "Tamil", "தமிழ்"],
  ["te", "Telugu", "తెలుగు"],
  ["mr", "Marathi", "मराठी"],
  ["gu", "Gujarati", "ગુજરાતી"],
  ["kn", "Kannada", "ಕನ್ನಡ"],
  ["ml", "Malayalam", "മലയാളം"],
  ["pa", "Punjabi", "ਪੰਜਾਬੀ"],
  ["ur", "Urdu", "اردو"],
  ["fr", "French", "Français"],
  ["de", "German", "Deutsch"],
  ["es", "Spanish", "Español"],
  ["it", "Italian", "Italiano"],
  ["pt", "Portuguese", "Português"],
  ["ar", "Arabic", "العربية"],
  ["zh-CN", "Chinese", "简体中文"],
  ["ja", "Japanese", "日本語"],
  ["ko", "Korean", "한국어"],
  ["ru", "Russian", "Русский"],
  ["nl", "Dutch", "Nederlands"],
  ["tr", "Turkish", "Türkçe"],
  ["id", "Indonesian", "Bahasa Indonesia"],
  ["vi", "Vietnamese", "Tiếng Việt"],
  ["th", "Thai", "ไทย"],
] as const

export default function LanguageSelector({ placement = "footer" }: { placement?: "utility" | "header" | "footer" }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("en")
  const rootRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState("")
  const retryRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (
        !window.google ||
        document.querySelector("#google_translate_element select")
      )
        return
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: languages.map(([code]) => code).join(","),
          autoDisplay: false,
        },
        "google_translate_element",
      )
    }

    if (window.google) {
      window.googleTranslateElementInit()
    } else if (!document.querySelector("script[data-nexgen-translate]")) {
      const script = document.createElement("script")
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      script.dataset.nexgenTranslate = "true"
      document.body.appendChild(script)
    }

    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", close)
    const sync = () => setSelected(document.documentElement.dataset.language || "en")
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false) }
    sync()
    window.addEventListener("nexgen-language", sync)
    document.addEventListener("keydown", escape)
    return () => {
      document.removeEventListener("mousedown", close)
      document.removeEventListener("keydown", escape)
      window.removeEventListener("nexgen-language", sync)
      if (retryRef.current) clearInterval(retryRef.current)
    }
  }, [])

  const selectLanguage = (code: string) => {
    setOpen(false)
    setError("")
    if (retryRef.current) clearInterval(retryRef.current)
    const apply = () => {
      const googleSelect = document.querySelector<HTMLSelectElement>(".goog-te-combo")
      if (!googleSelect) return false
      googleSelect.value = code
      googleSelect.dispatchEvent(new Event("change", { bubbles: true }))
      document.documentElement.dataset.language = code
      window.dispatchEvent(new Event("nexgen-language"))
      return true
    }
    if (apply()) return
    let attempts = 0
    retryRef.current = setInterval(() => {
      attempts += 1
      if (apply() || attempts >= 20) {
        if (retryRef.current) clearInterval(retryRef.current)
        retryRef.current = null
        if (attempts >= 20 && !document.querySelector(".goog-te-combo")) setError("Translation unavailable. Please try again.")
      }
    }, 400)
  }

  const selectedLanguage =
    languages.find(([code]) => code === selected) ?? languages[0]
  const selectedLanguageCode =
    selectedLanguage[0] === "en"
      ? "ENG"
      : selectedLanguage[0] === "hi"
        ? "HIN"
        : selectedLanguage[0].toUpperCase()
  return (
    <div className={`language-selector language-selector--${placement} notranslate`} ref={rootRef}>
      <button
        className="language-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="language-code">
          {placement === "utility" ? selectedLanguage[1] : selectedLanguageCode}
        </span>
        {placement === "utility" && <span aria-hidden="true">⌄</span>}
      </button>
      {open && (
        <div
          className="language-menu"
          role="listbox"
          aria-label="Select language"
        >
          <strong>Select language</strong>
          <div>
            {languages.map(([code, label, native]) => (
              <button
                key={code}
                role="option"
                aria-selected={selected === code}
                onClick={() => selectLanguage(code)}
              >
                <span>{label}</span>
                <small>{native}</small>
                {selected === code && <b>✓</b>}
              </button>
            ))}
          </div>
        </div>
      )}
      {error && <span className="language-error" role="status">{error}</span>}
    </div>
  )
}
