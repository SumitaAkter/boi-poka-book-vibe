import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
const links = (
  <>
    <li className="text-lg text-center"> 
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "border border-green-500 px-3 py-2 rounded-md text-green-600 font-semibold"
            : "px-3 py-2 text-white"
        }
      >
        Home
      </NavLink>
    </li>
    <li className="text-lg text-center">
      <NavLink
        to="/listedBooks"
        className={({ isActive }) =>
          isActive
            ? "border border-green-500 px-3 py-2 rounded-md text-green-600 font-semibold"
            : "px-3 py-2 text-white"
        }
      >
        Listed Books
      </NavLink>
    </li>
    <li className="text-lg text-center">
      <NavLink
        to="/pages-to-read"
        className={({ isActive }) =>
          isActive
            ? "border border-green-500 px-3 py-2 rounded-md text-green-600 font-semibold"
            : "px-3 py-2 text-white"
        }
      >
        Pages to Read
      </NavLink>
    </li>
  </>
);

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      {/* Left side (logo + mobile menu button) */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile menu button */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          {/* Dropdown menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn text-xl font-bold text-white">
          Boi Poka
        </a>
      </div>

      {/* Center (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right side (buttons) */}
      <div className="navbar-end gap-2">
        <a className="btn btn-sm bg-green-500 text-white hover:bg-green-600">
          Sign In
        </a>
        <a className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default NavBar;
