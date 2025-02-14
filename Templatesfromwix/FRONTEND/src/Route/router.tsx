import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Homepage from "../Page/Homepage";
import Solutions from "../Page/Solutions";
import Blog from "../Page/Blog";
import Programs from "../Page/Programs";
import Vision from "../Page/Vision";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/Solutions", element: <Solutions /> },
      { path: "/Vision", element: <Vision /> },
      { path: "/Programs", element: <Programs /> },
      { path: "/Blog", element: <Blog /> },
    ],
  },
]);
