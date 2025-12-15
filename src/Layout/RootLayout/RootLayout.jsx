import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      {/* Navbar  */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
