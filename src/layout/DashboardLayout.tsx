import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div className="w-full  min-h-[100vh]">
      <NavBar />
      <div className="max-w-full flex gap-2 min-h-[88vh]">
        <SideBar />
        <main className="w-full p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
