import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import DashboardLayout from "@/layout/DashboardLayout";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

import Home from "@/pages/Home";
import Setting from "@/pages/Setting";
import PropertyListing from "@/pages/PropertyListing";
import PropertyDetails from "@/pages/PropertyDetails";
import BidApprovals from "@/pages/BidApprovals";
import ScraperStatus from "@/pages/ScraperStatus";
import Campaigns from "@/pages/Campaigns";
import Leads from "@/pages/Leads";
import AiScripts from "@/pages/AiScripts";
import {  Users } from "lucide-react";
import Logs from "@/pages/Logs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // Dashboard
      { path: "/dashboard", element: <Home /> },

      // Real Estate
      { path: "/property", element: <PropertyListing /> },
      { path: "/property/:id", element: <PropertyDetails /> },
      { path: "/bid-approvals", element: <BidApprovals /> },
      { path: "/scraper", element: <ScraperStatus /> },

      // Marketing AI
      { path: "/campaigns", element: <Campaigns /> },
      { path: "/leads", element: <Leads /> },
      { path: "/ai-scripts", element: <AiScripts /> },

      // System
      { path: "/users", element: <Users /> },
      { path: "/logs", element: <Logs /> },
      { path: "/settings", element: <Setting /> },
    ],
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
