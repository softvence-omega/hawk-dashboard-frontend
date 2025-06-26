import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import DashboardLayout from "@/layout/DashboardLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Analytics from "@/pages/Analytics";
import Setting from "@/pages/Setting";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

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
      { path: "/dashboard", element: <Home /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/settings", element: <Setting /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
