import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { userService } from "@/apis";
import imageLoader from "@/utils/imageLoader";

import Button from "../button";
import Drawer from "../drawer";
import NavBar from "../navigation/NavBar";
import SideBar from "../navigation/SideBar";

const Layout = ({ children }) => {
  const [drawer, setDrawer] = useState(false);
  const router = useRouter();

  const userData = userService.GetLoggedUser();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="hidden md:flex w-screen mx-auto">
      <SideBar />
      <div className="flex flex-col w-full items-start pl-4 pr-8">
        <NavBar setDrawer={setDrawer} />
        {children}
      </div>
      <Drawer title="User Profile" isOpen={drawer} setIsOpen={setDrawer}>
        {userData.loading ? (
          <p>Loading</p>
        ) : userData.error ? (
          <p>Error</p>
        ) : (
          <div className="flex flex-col items-center w-full h-full px-6 gap-8">
            <Image
              loader={imageLoader}
              src={userData?.data?.data?.profilePictureUrl}
              width={200}
              height={200}
              alt="profile"
              className="rounded-full"
            />
            <ul className="w-full flex flex-col gap-3 text-xl">
              <li>
                <h2 className="text-base font-bold">Name:</h2>
                <p>{userData?.data?.data?.name}</p>
              </li>
              <li>
                <h2 className="text-base font-bold">Email:</h2>
                <p>{userData?.data?.data?.email}</p>
              </li>
              <li>
                <h2 className="text-base font-bold">Phone:</h2>
                <p>{userData?.data?.data?.phoneNumber}</p>
              </li>
              <li>
                <h2 className="text-base font-bold">Role:</h2>
                <p>{userData?.data?.data?.role}</p>
              </li>
            </ul>
            <Link
              href={"/edit-profile"}
              className="flex flex-col flex-grow justify-end w-full"
            >
              <Button variant="primary">Edit Profile</Button>
            </Link>
            <Button variant="secondary" handleClick={handleLogOut}>
              Logout
            </Button>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Layout;
