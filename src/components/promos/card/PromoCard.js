import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Button from "@/components/common/button";
import { PROMOS } from "@/constant/api";
import { deleteData } from "@/utils/fetchData";
import getToken from "@/utils/getToken";
import imageLoader from "@/utils/imageLoader";

const PromoCard = ({ data, showModal }) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const header = getToken().userConfig;

  const handleDelete = async () => {
    try {
      const deletePost = await deleteData(PROMOS.DELETE + data.id, header);
      setResponse(deletePost);
      showModal(true);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex flex-col gap-5 pb-8 px-1 h-full">
      <Image
        loader={imageLoader}
        src={data.imageUrl}
        width={370}
        height={192}
        alt="promo-image"
        className="rounded-xl h-[192px] w-auto object-cover"
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
        <ul className="list-disc list-inside">
          <li>Total discount Rp {data.promo_discount_price}</li>
          <li>Minimum price Rp {data.minimum_claim_price}</li>
          <li>{data.terms_condition}</li>
        </ul>
        <div className="flex flex-col flex-grow justify-end">
          <div className="grid grid-cols-2 gap-2 mt-3">
            <Link href={`/promos/${data.id}`} className="w-full">
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="secondary" handleClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
