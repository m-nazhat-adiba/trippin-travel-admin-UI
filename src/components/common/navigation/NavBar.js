import React from "react";
import { Icon } from "@iconify/react";

const NavBar = () => {
  return (
    <div className="flex justify-between w-full items-center px-5 py-8">
      <div className="flex flex-col">
        <p className="font-normal">
          Pages / <span className="font-medium">Dashboard</span>
        </p>
        <h1 className="font-bold">Dashboard</h1>
      </div>
      <div>
        <Icon icon="material-symbols:person" className="text-xl" />
      </div>
    </div>
  );
};

export default NavBar;
