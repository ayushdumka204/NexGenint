import { createBrowserRouter, Navigate } from "react-router"
import RootLayout from "@/components/layout/RootLayout"
import HomePage from "@/pages/HomePage"
import ContactPage from "@/pages/ContactPage"
import ErrorPage from "@/pages/ErrorPage"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage },
      { path: "contact", Component: ContactPage },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
])
