import React from "react";
import NavBar from "../navigation/NavBar";
import SideBar from "../navigation/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen mx-auto">
      <SideBar />
      <div className="flex flex-col flex-grow items-start pl-4 pr-8">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
