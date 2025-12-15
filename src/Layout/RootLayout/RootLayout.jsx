import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Container/Container";

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
