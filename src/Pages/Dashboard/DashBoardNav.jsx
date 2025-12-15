import { Link, NavLink } from "react-router";
import Logo from "../../assets/Logo.png";
import { EllipsisVertical } from "lucide-react";
const DashBoardNav = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink>Institutions</NavLink>
      </li>
      <li>
        <NavLink>Message</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10">
      <div className="navbar-start w-full lg:w-fit">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="cursor-pointer">
          <img src={Logo} className="w-20 md:w-28" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex flex-1 justify-center">
        <ul className="menu menu-horizontal font-medium text-base w-full justify-evenly">
          {links}
        </ul>
      </div>
      <div className="navbar-end w-fit">
        <EllipsisVertical />
      </div>
    </div>
  );
};

export default DashBoardNav;
