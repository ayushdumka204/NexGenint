import { Outlet, ScrollRestoration, useNavigation } from "react-router"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Breadcrumb from "@/components/layout/Breadcrumb"
import CustomCursor from "@/components/motion/CustomCursor"
import ScrollEffects from "@/components/motion/ScrollEffects"
import ScrollToTop from "@/components/ui/ScrollToTop"

export default function RootLayout() {
  const navigation = useNavigation()
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
