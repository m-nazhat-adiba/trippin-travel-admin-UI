import Image from "next/image";
import React from "react";

const ActivityCard = ({ category = "Mountain", title = "Hiking" }) => {
  return (
    <article className="flex bg-white shadow-md px-5 py-4 max-w-[920px] rounded-lg">
      <div className="flex flex-col">
        <h2 className="font-bold text-gray-500 text-xs">{category}</h2>
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        <p className="w-1/2 py-2">
          From colors, cards, typography to complex elements, you will find the
          full documentation.
        </p>
      </div>
      <Image src="/activity.png" width={360} height={256} alt="activity" />
    </article>
  );
};

export default ActivityCard;
