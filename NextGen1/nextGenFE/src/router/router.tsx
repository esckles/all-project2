import AuthLayout from "@/layout/AuthLayout";
import Layout from "@/layout/Layout";
import LoginScreen from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import LandingPage from "@/pages/design/LandingPage";

import { MainQuestion } from "@/pages/screen/MainQuestion";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        index: true,
        path: "participate",
        element: <MainQuestion />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "register",
        element: <Register />,
      },

      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        index: true,
        path: "participate",
        element: <MainQuestion />,
      },
    ],
  },
]);
