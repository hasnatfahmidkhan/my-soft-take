import { NavLink } from "react-router";
import Container from "../Container/Container";
import { TextAlignJustify } from "lucide-react";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home 1</NavLink>
      </li>
      <li>
        <NavLink to={"home2"}>Home 2</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <>
      <Container className={"navbar text-white"}>
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <TextAlignJustify />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <TextAlignJustify />
          </a>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 font-medium">{links}</ul>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
