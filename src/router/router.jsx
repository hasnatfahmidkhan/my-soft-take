import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";
import Home1 from "../Pages/Home/Home1";
import Dashboard from "../Layout/DashboardLayout/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home1,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        path: "/dashboard",
        Component: DashboardHome,
      },
    ],
  },
]);

export default router;
