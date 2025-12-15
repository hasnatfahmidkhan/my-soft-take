import React from "react";
import DashBoardNav from "../../Pages/Dashboard/DashBoardNav";
import {
  Bell,
  ChartBar,
  FileText,
  GraduationCap,
  Home,
  Landmark,
  MapPin,
  Settings,
  TextAlignJustify,
  User,
  Users,
  Wallet,
} from "lucide-react";
import SVG from "../../assets/SVG.png";
import { NavLink } from "react-router";
const DashboardLayout = () => {
  const links = [
    {
      id: 1,
      lable: "Overview",
      icon: Home,
    },
    {
      id: 2,
      lable: "Institute",
      icon: Landmark,
    },
    {
      id: 3,
      lable: "Teacher",
      icon: User,
    },
    {
      id: 4,
      lable: "Student",
      icon: GraduationCap,
    },
    {
      id: 5,
      lable: "Staff",
      icon: Users,
    },
    {
      id: 6,
      lable: "Facilities",
      icon: MapPin,
    },
    {
      id: 7,
      lable: "Reports",
      icon: FileText,
    },
    {
      id: 8,
      lable: "Analytics",
      icon: ChartBar,
    },
    {
      id: 9,
      lable: "Settings",
      icon: Settings,
    },
    {
      id: 10,
      lable: "Fees Management",
      icon: Wallet,
    },
  ];
  return (
    <div className="bg-[#f9fbf8] space-y-3">
      <DashBoardNav />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-100 shadow-sm">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <TextAlignJustify className="size-5" />
            </label>
            <div className="px-4 flex justify-between items-center w-full gap-6">
              <div>
                <label className="input">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input type="search" required placeholder="Search" />
                </label>
              </div>
              <div className="flex items-center gap-5">
                <div className="indicator">
                  <span className="indicator-item indicator-top bg-pink-600 flex items-center justify-around w-4 h-4 text-xs rounded-full text-white ">
                    4
                  </span>
                  <Bell className="size-5" />
                </div>
                <div className="bg-base-300 p-2 rounded-full">
                  <User className="size-5" />
                </div>
              </div>
            </div>
          </nav>
          {/* Page content here */}
          <div className="p-4">Page Content</div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-100 is-drawer-close:w-0 is-drawer-open:w-64 overflow-hidden">
            {/* Sidebar content here */}
            <h3 className="flex items-center gap-2 text-xl font-semibold h-16 border-b border-gray-100 justify-center w-full ">
              <img src={SVG} alt="" />
              EduDashboard
            </h3>
            <ul className="menu w-full grow is-drawer-close:hidden bg-base-100 shadow-sm border border-gray-200 p-0 text-sm font-medium px-8 py-5 gap-3">
              {links.map((link) => (
                <li key={link.id}>
                  <NavLink className="flex items-center gap-3">
                    <link.icon className="size-5" />
                    <span>{link.lable}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
