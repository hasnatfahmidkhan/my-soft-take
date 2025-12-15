import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import LoadingAnimation from "../../components/LoadingAnimation/LoadingAnimation";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="relative w-full h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
