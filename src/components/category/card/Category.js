import React from "react";
import Image from "next/image";
import imageLoader from "@/utils/imageLoader";

const Category = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 mb-4">
      <Image
        loader={imageLoader}
        src={data.imageUrl}
        width={370}
        height={192}
        alt="promo-image"
        className="rounded-xl h-[192px] w-auto object-cover"
      />
      <div className="flex flex-col px-3 gap-2">
        <div>
          <h2 className="font-bold text-xl">{data.name}</h2>
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
    </div>
  );
};

export default Category;
