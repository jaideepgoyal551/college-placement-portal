import { lazy, Suspense, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar, { MobileSidebar } from "./Sidebar";
import Topbar from "./Topbar";

const DashboardHome = lazy(() => import("./DashboardHome"));
const ProfilePage = lazy(() => import("./ProfilePage"));
const ResumeBuilderPage = lazy(() => import("./ResumeBuilderPage"));
const JobListingsPage = lazy(() => import("./JobListingsPage"));
const ApplicationsPage = lazy(() => import("./ApplicationsPage"));
const InterviewSchedulePage = lazy(() => import("./InterviewSchedulePage"));
const NotificationsPage = lazy(() => import("./NotificationsPage"));
const SettingsPage = lazy(() => import("./SettingsPage"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-accent-blue animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2.5 h-2.5 rounded-full bg-accent-purple animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2.5 h-2.5 rounded-full bg-accent-emerald animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((p) => !p)} />
      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className={`transition-all duration-300 ${collapsed ? "lg:pl-[72px]" : "lg:pl-[260px]"}`}>
        <Topbar onMenuToggle={() => setMobileOpen(true)} />

        <main className="p-4 sm:p-6 lg:p-8">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route index element={<DashboardHome />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="resume" element={<ResumeBuilderPage />} />
              <Route path="jobs" element={<JobListingsPage />} />
              <Route path="applications" element={<ApplicationsPage />} />
              <Route path="interviews" element={<InterviewSchedulePage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
}
