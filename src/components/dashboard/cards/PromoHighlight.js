import Image from "next/image";
import React from "react";

import imageLoader from "@/utils/imageLoader";

const PromoHighlight = ({ data }) => {
  return (
    <div className="flex flex-row gap-5 px-5 py-5 h-full bg-white shadow-md rounded-md">
      <Image
        loader={imageLoader}
        src={data.imageUrl}
        width={370}
        height={192}
        alt="promo-image"
        className="rounded-md lg:w-1/2 w-full h-auto object-cover"
      />
      <div className="flex flex-col flex-grow gap-2">
        <div>
          <h1 className="text-green-700 font-medium">{data.promo_code}</h1>
          <h2 className="font-bold text-xl">{data.title}</h2>
          <p className="text-sm text-gray-700 mt-2">{data.description}</p>
        </div>
        <h5 className="text-sm font-bold text-green-600 mt-1">
          Terms and Condition
        </h5>
      </div>
    </div>
  );
};

export default PromoHighlight;
