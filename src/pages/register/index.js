import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import InputField from "@/components/common/input/InputField";
import ScreenLock from "@/components/common/screen";
import Spinner from "@/components/common/spinner";
import { AUTH } from "@/constant/api";
import { GENERAL_CONFIG } from "@/constant/config";
import useInput from "@/hooks/useInput";

const Register = () => {
  const emailHook = useInput();
  const nameHook = useInput();
  const passwordHook = useInput();
  const password2Hook = useInput();
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email: emailHook.data,
      name: nameHook.data,
      password: passwordHook.data,
      passwordRepeat: password2Hook.data,
      role: "admin",
      profilePictureUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      phoneNumber: "-",
    };
    try {
      const result = await axios.post(AUTH.REGISTER, payload, GENERAL_CONFIG);
      setData(result.data);
      router.push("/login");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ScreenLock />
      <div className="hidden md:flex md:flex-col w-screen h-screen justify-center gap-14">
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-fit bg-white w-[400px] mx-auto px-12 py-10 rounded-lg shadow-lg gap-4"
        >
          <h2 className="text-center text-lg font-bold">Register</h2>
          <div className="flex flex-col flex-grow gap-5 py-5">
            <InputField inputHook={nameHook} placeholder="Name" label="Name" />
            <InputField
              inputHook={emailHook}
              placeholder="Email"
              label="Email"
            />
            <InputField
              inputHook={passwordHook}
              placeholder="Password"
              label="Password"
            />
            <InputField
              inputHook={password2Hook}
              placeholder="Confirm Password"
              label="Password Confirmation"
            />
          </div>

          <button
            disabled={loading ? true : false}
            type="submit"
            className="w-full py-4 bg-[#4FD1C5] rounded-lg font-bold text-white disabled:bg-gray-300"
          >
            {loading ? <Spinner className="w-7 h-7" /> : <p>Create</p>}
          </button>
          <nav className="flex gap-1 justify-center text-gray-500 text-sm text-center">
            Already have an account?
            <Link href={"/login"}>
              <span className="font-bold cursor-pointer">Sign-in</span>
            </Link>
          </nav>
        </form>
      </div>
    </>
  );
};

export default Register;
