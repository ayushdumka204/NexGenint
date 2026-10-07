import { useEffect } from "react"
import { Outlet, ScrollRestoration, useLocation, useNavigation } from "react-router"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Breadcrumb from "@/components/layout/Breadcrumb"
import CustomCursor from "@/components/motion/CustomCursor"
import ScrollEffects from "@/components/motion/ScrollEffects"
import ScrollToTop from "@/components/ui/ScrollToTop"

export default function RootLayout() {
  const navigation = useNavigation()
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <CustomCursor />
      <ScrollEffects />
      <Header />
      {navigation.state !== "idle" && (
        <div className="route-progress" aria-label="Loading page" />
      )}
      <Breadcrumb />
      <div id="main-content">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
      <div id="google_translate_element" aria-hidden="true" />
      <ScrollRestoration />
    </>
  )
}
