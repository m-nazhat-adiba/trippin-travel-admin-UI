import React from "react";
import { Icon } from "@iconify/react";
import usePath from "@/hooks/usePath";

const NavBar = () => {
  const path = usePath();
  return (
    <div className="flex justify-between w-full items-center px-5 py-8">
      <div className="flex flex-col">
        <p className="font-normal">
          Pages / {""}
          <span className="font-medium">
            {path !== "/"
              ? path.charAt(1).toUpperCase() + path.slice(2)
              : "Dashboard"}
          </span>
        </p>
        <h1 className="font-bold">
          {path !== "/"
            ? path.charAt(1).toUpperCase() + path.slice(2)
            : "Dashboard"}
        </h1>
      </div>
      <div>
        <Icon icon="material-symbols:person" className="text-xl" />
      </div>
    </div>
  );
};

export default NavBar;
