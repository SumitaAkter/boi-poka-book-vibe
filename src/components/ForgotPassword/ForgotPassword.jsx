import React from "react";

const ForgotPassword = ({ onSignInClick }) => {
  return (
    <div className="p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white">Forgot Password</h2>
        <p className="text-gray-300 mt-2">Enter your email to reset password</p>
      </div>

      <form className="space-y-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-600 px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Send Reset Link
        </button>
      </form>

      <p className="text-center text-gray-300 mt-5">
        Remembered your password?{" "}
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

export default ForgotPassword;
