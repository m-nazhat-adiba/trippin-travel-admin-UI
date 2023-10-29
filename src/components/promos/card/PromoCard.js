import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { PROMOS } from "@/constant/api";
import { USER_CONFIG } from "@/constant/config";
import { deleteData } from "@/utils/fetchData";
import imageLoader from "@/utils/imageLoader";

const PromoCard = ({ data }) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const deletePost = await deleteData(PROMOS.DELETE + data.id, USER_CONFIG);
      setResponse(deletePost);
      router.reload();
    } catch (error) {
      setError(error);
    }
  };

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
        <div className="flex gap-2 mt-3">
          <Link href={`/promos/${data.id}`}>
            <button className="py-2 px-6 bg-[#4FD1C5] rounded-lg text-white font-bold">
              Edit
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="py-2 px-4 border-2 border-gray-300 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
