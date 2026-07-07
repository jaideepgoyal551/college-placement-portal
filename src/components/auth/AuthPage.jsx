import { useLocation } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import OtpVerificationPage from "./OtpVerificationPage";

const pageConfig = {
  "/auth/login": {
    title: "Welcome to",
    subtitle: "Sign in to access your personalized placement dashboard and track your progress.",
    Component: LoginPage,
  },
  "/auth/register": {
    title: "Join",
    subtitle: "Create your account and start your journey toward your dream placement.",
    Component: RegisterPage,
  },
  "/auth/forgot-password": {
    title: "Reset",
    subtitle: "We'll help you recover access to your account quickly and securely.",
    Component: ForgotPasswordPage,
  },
  "/auth/verify-otp": {
    title: "Verify",
    subtitle: "Confirm your email address to unlock all features of your account.",
    Component: OtpVerificationPage,
  },
};

export default function AuthPage() {
  const { pathname } = useLocation();
  const config = pageConfig[pathname] || pageConfig["/auth/login"];

  return (
    <AuthLayout title={config.title} subtitle={config.subtitle}>
      <config.Component />
    </AuthLayout>
  );
}
