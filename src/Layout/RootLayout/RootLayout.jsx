import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Container/Container";

const RootLayout = () => {
  return (
    <div className="relative min-h-screen w-full bg-hero text-white">
      {/* wrapper for bg  */}
      <div className="bg-black/20 absolute inset-0 z-0"></div>
      <div className="relative z-10">
        <Navbar />
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default RootLayout;
