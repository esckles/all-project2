import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import HomeScreen from "../screen/HomeScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
