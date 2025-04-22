"use client"
import { useState } from "react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
<div
  className="min-h-screen bg-[#2F1893] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-10"
  style={{ backgroundImage: "url('/Background.png')" }}
>
  <div className="w-full max-w-6xl p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-10">
    {/* Left Section */}
    <div className="text-white w-full md:max-w-md text-center md:text-left px-2">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
        We solve digital <br />
        problems with an outstanding <br />
        creative flare
      </h2>
      <p className="text-white/80 text-md font-medium">
        We have created a new product that will help designers, developers, and companies create websites for their startups quickly and easily.
      </p>
    </div>

    {/* Right Section */}
    <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {["SIGN UP", "LOGIN"].map((label, i) => {
          const selected = (isSignUp && i === 0) || (!isSignUp && i === 1);
          return (
            <button
              key={label}
              onClick={() => setIsSignUp(i === 0)}
              className={`w-1/2 text-sm font-semibold pb-2 ${
                selected
                  ? "text-black border-b-2 border-[#1E0E62]"
                  : "text-gray-500"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Form */}
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-1 focus:ring-indigo-200 text-black"
        />
        <input
          type="password"
          placeholder="Your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-1 focus:ring-indigo-200 text-black"
        />

        <button
          type="submit"
          className={`w-full ${
            isSignUp ? "bg-[#25DAC5] hover:bg-teal-500" : "bg-indigo-500 hover:bg-indigo-600"
          } text-white font-semibold py-2 rounded-full transition duration-300`}
        >
          {isSignUp ? "Create an Account" : "Login"}
        </button>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
          <span className="h-px bg-gray-300 flex-1" />
          <span>or</span>
          <span className="h-px bg-gray-300 flex-1" />
        </div>

        <button
          type="button"
          className="w-full bg-[#1DA1F2] hover:bg-blue-600 text-white font-semibold py-2 rounded-full transition duration-300"
        >
          Login via Twitter
        </button>
      </form>
    </div>
  </div>
</div>

  );
}
