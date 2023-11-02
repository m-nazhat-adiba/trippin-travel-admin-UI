import React from "react";

const VARIANTS = {
  primary: "bg-[#4FD1C5] text-white font-bold",
  secondary: "border-2 border-gray-400 bg-white",
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
      className={`${VARIANTS[variant]} inline-flex py-2 px-6 rounded-lg text-base border w-full justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
