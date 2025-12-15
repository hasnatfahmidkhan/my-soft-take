import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Container/Container";

const RootLayout = () => {
  return (
    <div className="relative w-full h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
