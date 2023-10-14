import InputField from "@/components/common/input/InputField";
import Image from "next/image";
import React, { useState } from "react";

const authentication = () => {
  const [register, setRegister] = useState(false);
  const handleSwitchToRegister = () => {
    setRegister(!register);
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center gap-14">
      <Image
        src="/auth-bg.png"
        width={1872}
        height={520}
        alt="backdrop"
        className="absolute top-0 p-4 h-1/2 w-full -z-50"
      />
      <header className="flex flex-col w-full items-center gap-2">
        {/* <Image src="/logo.png" width={192} height={24} alt="logo" /> */}
        <h1 className="text-4xl font-bold text-white">Welcome!</h1>
        <p className="text-white">Login with your admin account</p>
      </header>
      <form className="flex flex-col h-[580px] bg-white w-[400px] mx-auto px-12 py-10 rounded-lg shadow-lg gap-4">
        {register ? (
          <h2 className="text-center text-lg font-bold">Register</h2>
        ) : (
          <h2 className="text-center text-lg font-bold">Login</h2>
        )}
        {register ? (
          <div className="flex flex-col flex-grow gap-5 py-5">
            <InputField placeholder="Email" label="Email" />
            <InputField placeholder="Password" label="Password" />
            <InputField
              placeholder="Confirm Password"
              label="Password Confirmation"
            />
          </div>
        ) : (
          <div className="flex flex-col flex-grow gap-5 py-5">
            <InputField placeholder="Email" label="Email" />
            <InputField placeholder="Password" label="Password" />
          </div>
        )}

        <button className="w-full py-4 bg-[#4FD1C5] rounded-lg font-bold text-white">
          Login
        </button>
        <nav className="flex gap-1 justify-center text-gray-500 text-sm text-center">
          Doesn't have an account?
          {register ? (
            <span
              onClick={handleSwitchToRegister}
              className="font-bold cursor-pointer"
            >
              Sign-in
            </span>
          ) : (
            <span
              onClick={handleSwitchToRegister}
              className="font-bold cursor-pointer"
            >
              Sign-up
            </span>
          )}
        </nav>
      </form>
    </div>
  );
};

export default authentication;
