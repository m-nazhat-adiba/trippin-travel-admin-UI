import Image from "next/image";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import usePath from "@/hooks/usePath";
import { Icon } from "@iconify/react";

const SideBar = () => {
  const path = usePath();

  return (
    <div className="flex flex-col h-full w-[298px] px-8 gap-6 sticky top-0">
      <Image
        src="/logo.png"
        width={192}
        height={24}
        alt="logo"
        className="my-8 pt-3"
      />
      <div className="flex flex-col gap-1">
        <Link href="/">
          <button
            className={clsx(
              "flex items-center gap-2 w-52 h-14 px-4 rounded-xl ",
              path === "/" ? " bg-white shadow-md" : ""
            )}
          >
            <Icon
              icon="material-symbols:home"
              className={clsx(
                "w-8 h-8 p-2  rounded-xl",
                path === "/"
                  ? "bg-[#4FD1C5] text-white"
                  : "text-[#4FD1C5] bg-white shadow-md"
              )}
            />
            <p
              className={clsx(
                "font-bold",
                path === "/" ? "text-gray-900" : "text-gray-400"
              )}
            >
              Dashboard
            </p>
          </button>
        </Link>

        <Link href="/activities">
          <button
            className={clsx(
              "flex items-center gap-2 w-52 h-14 px-4 rounded-xl ",
              path.includes("/activities") ? " bg-white shadow-md" : ""
            )}
          >
            <Icon
              icon="material-symbols:flight"
              rotate={1}
              className={clsx(
                "w-8 h-8 p-2  rounded-xl",
                path.includes("/activities")
                  ? "bg-[#4FD1C5] text-white"
                  : "text-[#4FD1C5] bg-white shadow-md"
              )}
            />
            <p
              className={clsx(
                "font-bold",
                path.includes("/activities") ? "text-gray-900" : "text-gray-400"
              )}
            >
              Activities
            </p>
          </button>
        </Link>

        <Link href="/users">
          <button
            className={clsx(
              "flex items-center gap-2 w-52 h-14 px-4 rounded-xl ",
              path.includes("/users") ? " bg-white shadow-md" : ""
            )}
          >
            <Icon
              icon="material-symbols:person-search-rounded"
              className={clsx(
                "w-8 h-8 p-2  rounded-xl",
                path.includes("/users")
                  ? "bg-[#4FD1C5] text-white"
                  : "text-[#4FD1C5] bg-white shadow-md"
              )}
            />
            <p
              className={clsx(
                "font-bold",
                path.includes("/users") ? "text-gray-900" : "text-gray-400"
              )}
            >
              Users
            </p>
          </button>
        </Link>

        <Link href="/promos">
          <button
            className={clsx(
              "flex items-center gap-2 w-52 h-14 px-4 rounded-xl ",
              path.includes("/promos") ? " bg-white shadow-md" : ""
            )}
          >
            <Icon
              icon="material-symbols:local-activity-rounded"
              className={clsx(
                "w-8 h-8 p-2  rounded-xl",
                path.includes("/promos")
                  ? "bg-[#4FD1C5] text-white"
                  : "text-[#4FD1C5] bg-white shadow-md"
              )}
            />
            <p
              className={clsx(
                "font-bold",
                path.includes("/promos") ? "text-gray-900" : "text-gray-400"
              )}
            >
              Promos
            </p>
          </button>
        </Link>

        <Link href="/categories">
          <button
            className={clsx(
              "flex items-center gap-2 w-52 h-14 px-4 rounded-xl ",
              path.includes("/categories") ? " bg-white shadow-md" : ""
            )}
          >
            <Icon
              icon="material-symbols:filter-alt-sharp"
              className={clsx(
                "w-8 h-8 p-2  rounded-xl",
                path.includes("/categories")
                  ? "bg-[#4FD1C5] text-white"
                  : "text-[#4FD1C5] bg-white shadow-md"
              )}
            />
            <p
              className={clsx(
                "font-bold",
                path.includes("/categories") ? "text-gray-900" : "text-gray-400"
              )}
            >
              Categories
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
