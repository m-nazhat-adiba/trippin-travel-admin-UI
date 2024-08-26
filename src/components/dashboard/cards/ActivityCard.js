import Image from "next/image";
import React from "react";

import imageLoader from "@/utils/imageLoader";

const ActivityCard = ({ data }) => {
  return (
    <div className="flex lg:flex-row flex-col-reverse xl:gap-0 gap-2 px-5 py-5 w-full border-b-2 border-gray-200 justify-between bg-white shadow-md rounded-md">
      <div className="flex flex-col w-[60%] gap-2 pr-8">
        <header>
          <h2 className="font-bold text-gray-500 text-xs">
            {data.category.name}
          </h2>
          <h1 className="text-xl font-bold text-gray-900">
            {data.title}
            <span className="text-yellow-500 mx-1">{data.rating}☆</span>
          </h1>
          <p className="w-full py-2 text-gray-500">{data.description}</p>
        </header>

        <div className="flex flex-col">
          <h3 className="font-semibold text-sm text-gray-500">Address:</h3>
          <p className="text-sm text-gray-600">{data.address}</p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <h3 className="text-xs text-gray-500">Price:</h3>
            <p className="font-bold text-xl text-gray-600">IDR {data.price}</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xs text-gray-500">Disc:</h3>
            <p className="text-xl text-gray-600 font-bold">
              IDR {data.price_discount}
            </p>
          </div>
        </div>
      </div>
      <Image
        loader={imageLoader}
        src={data.imageUrls[0]}
        width={360}
        height={256}
        alt="activity"
        className="rounded-md lg:w-1/3 w-full h-auto object-cover"
      />
    </div>
  );
};

export default ActivityCard;
