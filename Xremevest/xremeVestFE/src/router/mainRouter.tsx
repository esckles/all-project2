import Layout from "@/layout/Layout";
import InvestPage from "@/page/InvestPage";
import LandinPage from "@/page/screen/LandinPage";
import { createBrowserRouter } from "react-router-dom";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandinPage />,
      },
      {
        path: "invest",
        element: <InvestPage />,
      },
    ],
  },
]);
