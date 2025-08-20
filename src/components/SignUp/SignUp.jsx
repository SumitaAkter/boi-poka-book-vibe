import React from "react";

const SignUp = ({ onSignInClick }) => {
  return (
    <div className="p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white">Create Account</h2>
        <p className="text-gray-300 mt-2">Sign up to get started</p>
      </div>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-600 px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-600 px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-600 px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-gray-300 mt-5">
        Already have an account?{" "}
        <button
          className="text-green-500 font-semibold hover:underline"
          onClick={onSignInClick}
        >
          Sign In
        </button>
      </p>
    </div>
  );
};

export default SignUp;
