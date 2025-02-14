import AuthLayout from "@/layout/AuthLayout";
import HomeLayout from "@/layout/HomeLayout";
import Layout from "@/layout/Layout";
import Login from "@/page/Auth/Login";
import Register from "@/page/Auth/Register";
import Homepage from "@/page/Homepage";
import LandingPage from "@/page/screen/LandingPage";
import { createBrowserRouter } from "react-router-dom";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { element: <Register />, path: "register" },
      {
        element: <Login />,
        path: "login",
      },
    ],
  },
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        element: <Homepage />,
        path: "homeindex",
      },
    ],
  },
]);
