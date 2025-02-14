import { createBrowserRouter } from "react-router-dom";
import Layout from "../Static/Layout/Layout";
import Homepage from "../pages/Homepage";
import Time from "../pages/Time";
import Plusminus from "../pages/Plusminus";
import Countdown from "../pages/Countdown";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/img",
        index: true,
        element: <Homepage />,
      },
      {
        path: "/Time",
        element: <Time />,
      },
      {
        path: "/Plusminus",
        element: <Plusminus />,
      },
      {
        path: "/Countdown",
        element: <Countdown />,
      },
    ],
  },
]);
