import React from "react";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./route/mainRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
};

export default App;
