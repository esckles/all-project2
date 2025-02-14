import React from "react";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Homepage;
