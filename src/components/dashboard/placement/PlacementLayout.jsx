import { lazy, Suspense, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PlacementSidebar from "./PlacementSidebar";
import { MobileSidebar } from "../Sidebar";
import Topbar from "../Topbar";

const AnalyticsPage = lazy(() => import("./AnalyticsPage"));
const StudentManagement = lazy(() => import("./StudentManagement"));
const CompanyVerification = lazy(() => import("./CompanyVerification"));
const ReportsPage = lazy(() => import("./ReportsPage"));
const PlacementStatistics = lazy(() => import("./PlacementStatistics"));
const AnnouncementsPage = lazy(() => import("./AnnouncementsPage"));
const CalendarPage = lazy(() => import("./CalendarPage"));
const NotificationsPage = lazy(() => import("./NotificationsPage"));

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

export default function PlacementLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="fixed left-0 top-0 bottom-0 z-40 hidden lg:flex flex-col bg-bg-secondary/80 backdrop-blur-2xl border-r border-glass-border transition-all duration-300"
        style={{ width: collapsed ? "72px" : "260px" }}>
        <PlacementSidebar collapsed={collapsed} />
        <button onClick={() => setCollapsed((p) => !p)}
          className="p-3 border-t border-glass-border text-text-tertiary hover:text-text-primary transition-all cursor-pointer">
          <svg className={`w-5 h-5 mx-auto transition-transform ${collapsed ? "" : "rotate-180"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className={`transition-all duration-300 ${collapsed ? "lg:ml-[72px]" : "lg:ml-[260px]"}`}>
        <Topbar onMenuToggle={() => setMobileOpen(true)} />

        <main className="p-4 sm:p-6 lg:p-8">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route index element={<AnalyticsPage />} />
              <Route path="students" element={<StudentManagement />} />
              <Route path="verify" element={<CompanyVerification />} />
              <Route path="reports" element={<ReportsPage />} />
              <Route path="statistics" element={<PlacementStatistics />} />
              <Route path="announcements" element={<AnnouncementsPage />} />
              <Route path="calendar" element={<CalendarPage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="*" element={<Navigate to="/placement" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
}
