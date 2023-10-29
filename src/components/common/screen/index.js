import React from "react";
import Image from "next/image";

const ScreenLock = () => {
  return (
    <div className="h-screen w-full flex items-center md:hidden">
      <Image
        src="/auth-bg.png"
        width={425}
        height={564}
        alt="backdrop"
        className="absolute top-0 h-full w-full -z-50"
      />
      <h1 className="px-4 text-center font-bold mx-auto">
        Use Tablet or Desktop for better experiences
      </h1>
    </div>
  );
};

export default ScreenLock;
