import Image from "next/image";
import React from "react";

import imageLoader from "@/utils/imageLoader";

const ActivityCard = ({ activityData }) => {
  return (
    <article className="flex bg-white shadow-md px-5 py-4 w-full xl:w-[60%] rounded-lg">
      <div className="flex flex-col w-full">
        <h2 className="font-bold text-gray-500 text-xs">
          {activityData.category.name}
        </h2>
        <h1 className="text-xl font-bold text-gray-900">
          {activityData.title}
        </h1>
        <p className="w-[90%] py-2">{activityData.description}</p>
      </div>
      <Image
        loader={imageLoader}
        src={activityData.imageUrls[0]}
        width={360}
        height={256}
        alt="activity"
        className="rounded-md xl:w-1/2 w-1/3 h-auto object-cover"
      />
    </article>
  );
};

export default ActivityCard;
