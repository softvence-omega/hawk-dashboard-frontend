import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { useThemeStore } from "./store/useThemeStore";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/routes"; // Import your router provider

const ThemeInitializer = () => {
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return <AppRoutes />; // Use AppRoutes instead of App
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInitializer />
    <ToastContainer />
  </StrictMode>
);
