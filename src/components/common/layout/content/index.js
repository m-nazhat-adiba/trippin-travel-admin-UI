import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const ContentLayout = ({
  children,
  button = false,
  buttonText,
  title,
  sub,
  target = "",
}) => {
  return (
    <div className="w-full max-w-full flex flex-col bg-white shadow-md py-4 rounded-lg gap-3">
      <header className="flex w-full justify-between px-5 pb-4 border-b-4 border-gray-200 items-center bg-white">
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
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ContentLayout;
