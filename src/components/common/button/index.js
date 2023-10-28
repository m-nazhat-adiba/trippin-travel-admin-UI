import React from "react";

const VARIANTS = {
  primary: "bg-[#4FD1C5] text-white font-bold",
  secondary: "border-2 border-gray-300 bg-white",
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
      className={`${VARIANTS[variant]} py-2 px-6 rounded-lg  `}
    >
      {children}
    </button>
  );
};

export default Button;
