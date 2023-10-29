import Image from "next/image";
import React from "react";

import imageLoader from "@/utils/imageLoader";

const PromoHighlight = ({ data }) => {
  return (
    <Image
      loader={imageLoader}
      src={data.imageUrl}
      width={650}
      height={290}
      alt="promo"
      className=" w-full xl:w-[654px] xl:h-[290px] object-cover border-[16px] border-white shadow-md rounded-lg"
    />
  );
};

export default PromoHighlight;
