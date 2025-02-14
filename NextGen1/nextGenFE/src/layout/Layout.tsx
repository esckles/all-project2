import Footer from "@/static/Footer";
import Header from "@/static/Header";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default Layout;
