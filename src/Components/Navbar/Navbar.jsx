import { NavLink } from "react-router";
import Container from "../Container/Container";
import { TextAlignJustify } from "lucide-react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink>Home 1</NavLink>
      </li>
      <li>
        <NavLink>Home 2</NavLink>
      </li>
      <li>
        <NavLink>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <Container className={"navbar"}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
