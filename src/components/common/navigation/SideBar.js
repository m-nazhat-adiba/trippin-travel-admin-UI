import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

const SideBar = () => {
  return (
    <div className="flex flex-col h-screen w-[298px] px-8 gap-6">
      <Image
        src="/logo.png"
        width={192}
        height={24}
        alt="logo"
        className="my-8 pt-3"
      />
      <div className="flex flex-col gap-1">
        <button className="flex items-center gap-2 w-52 h-14 bg-white px-4 rounded-xl shadow-md">
          <Icon
            icon="material-symbols:home"
            className="w-8 h-8 p-2 bg-[#4FD1C5] text-white rounded-xl"
          />
          <p className="font-bold">Dashboard</p>
        </button>
        <button className="flex items-center gap-2 w-52 h-14 px-4">
          <Icon
            icon="material-symbols:flight"
            rotate={1}
            className="w-8 h-8 p-2 bg-[#4FD1C5] text-white rounded-xl"
          />
          <p className="font-bold">Activities</p>
        </button>
        <button className="flex items-center gap-2 w-52 h-14  px-4">
          <Icon
            icon="material-symbols:person-search-rounded"
            className="w-8 h-8 p-2 bg-[#4FD1C5] text-white rounded-xl"
          />
          <p className="font-bold">Users</p>
        </button>
        <button className="flex items-center gap-2 w-52 h-14 b px-4">
          <Icon
            icon="material-symbols:local-activity-rounded"
            className="w-8 h-8 p-2 bg-[#4FD1C5] text-white rounded-xl"
          />
          <p className="font-bold">Promos</p>
        </button>
        <button className="flex items-center gap-2 w-52 h-14  px-4">
          <Icon
            icon="material-symbols:filter-alt-sharp"
            className="w-8 h-8 p-2 bg-[#4FD1C5] text-white rounded-xl"
          />
          <p className="font-bold">Categories</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
