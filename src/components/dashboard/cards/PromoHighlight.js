import imageLoader from "@/utils/imageLoader";
import Image from "next/image";
import React from "react";

const PromoHighlight = ({ data }) => {
  return (
    <Image
      loader={imageLoader}
      src={data.imageUrl}
      width={650}
      height={290}
      alt="promo"
      className=" w-[654px] h-[290px] overflow-hidden border-[16px] border-white shadow-md rounded-lg"
    />
  );
};

export default PromoHighlight;
