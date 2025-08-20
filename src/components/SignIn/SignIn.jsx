import React from "react";

const SignIn = ({ onSignUpClick, onForgotClick }) => {
  return (
    <div className="p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
        <p className="text-gray-300 mt-2">Sign in to your account</p>
      </div>

      <form className="space-y-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-600 px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border border-gray-600 px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <div className="flex items-center justify-between text-sm text-white">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4" />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            className="hover:text-green-500"
            onClick={onForgotClick}
          >
            Forgot password?
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Sign In
        </button>
      </form>

      <p className="text-center text-gray-300 mt-5">
        Don’t have an account?{" "}
        <button
          className="text-green-500 font-semibold hover:underline"
          onClick={onSignUpClick}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default SignIn;
