import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

export default function Main() {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
}
