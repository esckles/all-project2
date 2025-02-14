import Footer from "@/static/Footer";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Outlet />
      <div className="flex-1" />
      <Footer />
    </div>
  );
};

export default AuthLayout;
