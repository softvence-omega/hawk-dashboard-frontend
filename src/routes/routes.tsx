import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import DashboardLayout from "@/layout/DashboardLayout";
import Home from "@/pages/Home";
import Setting from "@/pages/Setting";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import PropertyListing from "@/pages/PropertyListing";
import PropertyDetails from "@/pages/PropertyDetails";

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
      { path: "/property", element: <PropertyListing /> },
      { path: "/property/:id", element: <PropertyDetails /> },
      { path: "/settings", element: <Setting /> },
    ],
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
