import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/app/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedCompanies from "./components/TrustedCompanies";
import Features from "./components/Features";
import Statistics from "./components/Statistics";
import SuccessStories from "./components/SuccessStories";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { ToastProvider } from "./components/dashboard/shared/Toast";

const AuthPage = lazy(() => import("./components/auth/AuthPage"));
const DashboardLayout = lazy(() => import("./components/dashboard/DashboardLayout"));
const RecruiterLayout = lazy(() => import("./components/dashboard/recruiter/RecruiterLayout"));
const PlacementLayout = lazy(() => import("./components/dashboard/placement/PlacementLayout"));

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <Features />
        <Statistics />
        <SuccessStories />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function AppShell() {
  const location = useLocation();
  const isAuth = location.pathname.startsWith("/auth");
  const isDashboard = location.pathname.startsWith("/dashboard") ||
                      location.pathname.startsWith("/recruiter") ||
                      location.pathname.startsWith("/placement");

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-inter antialiased">
      {!isAuth && !isDashboard && (
        <>
        </>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <ToastProvider>
            <Suspense fallback={<LoadingScreen />}>
              <Routes location={location}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/auth/login" element={<AuthPage />} />
                <Route path="/auth/register" element={<AuthPage />} />
                <Route path="/auth/forgot-password" element={<AuthPage />} />
                <Route path="/auth/verify-otp" element={<AuthPage />} />
                <Route path="/dashboard/*" element={<DashboardLayout />} />
                <Route path="/recruiter/*" element={<RecruiterLayout />} />
                <Route path="/placement/*" element={<PlacementLayout />} />
                <Route path="*" element={<LandingPage />} />
              </Routes>
            </Suspense>
          </ToastProvider>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
