import imageLoader from "@/utils/imageLoader";
import Image from "next/image";
import React from "react";

const Activity = ({ data }) => {
  return (
    <div className="flex px-5 py-4 w-full">
      <div className="flex flex-col w-full gap-2">
        <header>
          <h2 className="font-bold text-gray-500 text-xs">
            {data.category.name}
          </h2>
          <h1 className="text-xl font-bold text-gray-900">
            {data.title}
            <span className="text-yellow-500 mx-1">{data.rating}☆</span>
          </h1>
          <p className="w-1/2 py-2 text-gray-500">{data.description}</p>
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
        <div className="flex gap-2 mt-3">
          <button className="py-2 px-6 bg-[#4FD1C5] rounded-lg text-white font-bold">
            Edit
          </button>
          <button className="py-2 px-4 border-2 border-gray-300 rounded-lg">
            Delete
          </button>
        </div>
      </div>
      <Image
        loader={imageLoader}
        src={data.imageUrls[0]}
        width={360}
        height={256}
        alt="activity"
        className="rounded-md h-full object-cover"
      />
    </div>
  );
};

export default Activity;
