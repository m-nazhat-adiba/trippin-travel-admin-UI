import Image from "next/image";
import React from "react";

const EmptyState = ({ title, description }) => {
  return (
    <section className="flex flex-col gap-5 items-center">
      <Image
        src={"/data-unavaillable-illust.svg"}
        height={128}
        width={128}
        alt="empty-state"
      />
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-sm w-2/3 mx-auto">{description}</p>
      </div>
    </section>
  );
};

export default EmptyState;
