import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { GlobalProvider } from "./global/GlobalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
};

export default App;
