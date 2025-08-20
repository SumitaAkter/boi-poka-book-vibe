import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

const NavBar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);

  const links = (
    <>
      <li>
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
      <li>
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
      <li>
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
    <>
      <div className="navbar bg-gray-900 shadow-sm sticky top-0 z-50 text-white">
        {/* Left: Logo + Mobile dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[100] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn text-xl font-bold text-white">Boi Poka</a>
        </div>

        {/* Center: Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right: SignIn/SignUp buttons */}
        <div className="navbar-end gap-2">
          <button
            className="btn btn-sm bg-green-700 hover:bg-green-600"
            onClick={() => setIsSignInOpen(true)}
          >
            Sign In
          </button>
          <button
            className="btn btn-sm bg-blue-700 hover:bg-blue-600"
            onClick={() => setIsSignUpOpen(true)}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* SignIn Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-white text-xl"
              onClick={() => setIsSignInOpen(false)}
            >
              ✕
            </button>
            <SignIn
              onSignUpClick={() => {
                setIsSignInOpen(false);
                setIsSignUpOpen(true);
              }}
              onForgotClick={() => {
                setIsSignInOpen(false);
                setIsForgotOpen(true);
              }}
            />
          </div>
        </div>
      )}

      {/* SignUp Modal */}
      {isSignUpOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-white text-xl"
              onClick={() => setIsSignUpOpen(false)}
            >
              ✕
            </button>
            <SignUp
              onSignInClick={() => {
                setIsSignUpOpen(false);
                setIsSignInOpen(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {isForgotOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-white text-xl"
              onClick={() => setIsForgotOpen(false)}
            >
              ✕
            </button>
            <ForgotPassword
              onSignInClick={() => {
                setIsForgotOpen(false);
                setIsSignInOpen(true);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
