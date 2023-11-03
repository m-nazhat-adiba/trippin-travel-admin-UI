import React from "react";

const VARIANTS = {
  primary: "bg-[#4FD1C5] text-white font-bold rounded-lg",
  secondary: "border-2 border-gray-400 bg-white rounded-lg",
  rounded:
    "border-2 border-gray-300 w-1/2 px-6 py-2 text-base rounded-full file:font-semibold text-violet-700 bg-white  hover:bg-amber-100 hover:cursor-pointer disabled:bg-gray-300 disabled:cursor-default",
};

const Button = ({
  children,
  variant,
  type = "button",
  handleClick,
  disable = false,
}) => {
  return (
    <button
      disabled={disable}
      onClick={handleClick}
      type={type}
      className={`${VARIANTS[variant]} inline-flex py-2 px-6  text-base border w-full justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
