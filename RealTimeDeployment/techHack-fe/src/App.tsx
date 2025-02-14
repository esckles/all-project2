// import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import { GlobalProvider } from "./global/globalProvider";

const App = () => {
  return (
    <GlobalProvider>
      {" "}
      <RouterProvider router={router} />
    </GlobalProvider>
  );
};

export default App;
