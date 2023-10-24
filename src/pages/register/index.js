import React from "react";
import Image from "next/image";
import InputField from "@/components/common/input/InputField";
import Link from "next/link";

const Register = () => {
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
        <h2 className="text-center text-lg font-bold">Register</h2>
        <div className="flex flex-col flex-grow gap-5 py-5">
          <InputField placeholder="Email" label="Email" />
          <InputField placeholder="Password" label="Password" />
          <InputField
            placeholder="Confirm Password"
            label="Password Confirmation"
          />
        </div>

        <button className="w-full py-4 bg-[#4FD1C5] rounded-lg font-bold text-white">
          Create
        </button>
        <nav className="flex gap-1 justify-center text-gray-500 text-sm text-center">
          Already have an account?
          <Link href={"/login"}>
            <span className="font-bold cursor-pointer">Sign-in</span>
          </Link>
        </nav>
      </form>
    </div>
  );
};

export default Register;
