import InputField from "@/components/common/input/InputField";
import { AUTH } from "@/constant/api";
import { GENERAL_CONFIG } from "@/constant/config";
import useInput from "@/hooks/useInput";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/common/spinner";
import ScreenLock from "@/components/common/screen";

const Login = () => {
  const emailHook = useInput();
  const passwordHook = useInput();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email: emailHook.data,
      password: passwordHook.data,
    };
    try {
      const result = await axios.post(AUTH.LOGIN, payload, GENERAL_CONFIG);
      setData(result.data);
      localStorage.setItem("token", result.data.token);
      router.push("/");
    } catch (error) {
      setError(error);
      console.log(error);
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
          className="flex flex-col h-[580px] bg-white w-[400px] mx-auto px-12 py-10 rounded-lg shadow-lg gap-4"
        >
          <h2 className="text-center text-lg font-bold">Login</h2>
          <div className="flex flex-col flex-grow gap-5 py-5">
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
          </div>

          <button
            disabled={loading ? true : false}
            type="submit"
            className="w-full py-4 bg-[#4FD1C5] rounded-lg font-bold text-white disabled:bg-gray-300"
          >
            {loading ? <Spinner className="w-7 h-7" /> : <p>Login</p>}
          </button>
          <nav className="flex gap-1 justify-center text-gray-500 text-sm text-center">
            Doesn't have an account?
            <Link href={"/register"}>
              <span className="font-bold cursor-pointer">Sign-up</span>
            </Link>
          </nav>
        </form>
      </div>
    </>
  );
};

export default Login;
