import Image from "next/image";
import React from "react";

const ScreenLock = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center md:hidden bg-[#4FD1C5] gap-4">
      <Image src="/lock-illust.png" width={240} height={240} alt="cat-illust" />
      <h1 className="px-4 text-center font-bold mx-auto">
        Use Tablet or Desktop for better experiences
      </h1>
    </div>
  );
};

export default ScreenLock;
