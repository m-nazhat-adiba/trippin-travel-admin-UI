import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const ContentLayout = ({
  children,
  button = false,
  buttonText,
  title,
  sub,
  target = "",
}) => {
  return (
    <div className="w-full flex flex-col bg-white shadow-md py-4 rounded-lg gap-3">
      <header className="flex w-full justify-between px-5 ">
        <div className="flex flex-col">
          <h3 className="font-bold">{title}</h3>
          <p className="text-gray-500 text-sm">{sub}</p>
        </div>
        {button ? (
          <Link href={target}>
            <button className="flex gap-2 items-center px-3">
              <Icon icon="akar-icons:plus" className="text-lg" />
              <p>Create a New {buttonText}</p>
            </button>
          </Link>
        ) : null}
      </header>
      {children}
    </div>
  );
};

export default ContentLayout;
