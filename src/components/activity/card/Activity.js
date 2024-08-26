import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Button from "@/components/common/button";
import { ACTIVITIES } from "@/constant/api";
import { deleteData } from "@/utils/fetchData";
import getToken from "@/utils/getToken";
import imageLoader from "@/utils/imageLoader";

const Activity = ({ data, showModal }) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const header = getToken().userConfig;

  const handleDelete = async () => {
    try {
      const deletePost = await deleteData(ACTIVITIES.DELETE + data.id, header);
      setResponse(deletePost);
      showModal(true);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex lg:flex-row flex-col-reverse px-5 py-10 border-b-2 border-gray-200 justify-between relative">
      <div className="flex flex-col w-full md:max-w-[600px] max-w-[1000px] gap-2 pr-8">
        <header>
          <h2 className="font-bold text-gray-500 text-xs">
            {data.category.name}
          </h2>
          <h1 className="text-xl font-bold text-gray-900">
            {data.title}
            <span className="text-yellow-500 mx-1">{data.rating}☆</span>
          </h1>
          <p className="max-w-full py-2 text-gray-500 break-words line-clamp-5">
            {data.description}
          </p>
        </header>

        <div className="max-w-full flex flex-col">
          <h3 className="font-semibold text-sm text-gray-500">Address:</h3>
          <p className="max-w-full text-sm text-gray-600 break-words line-clamp-2">
            {data.address}
          </p>
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
        <div className="flex flex-col flex-grow justify-end">
          <div className="grid grid-cols-4 gap-2 mt-3">
            <Link href={`/activities/${data.id}`} className="w-full flex">
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="secondary" handleClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
      <div className="rounded-md lg:w-1/3 w-full h-auto over">
        <Image
          loader={imageLoader}
          src={data.imageUrls[0]}
          width={360}
          height={256}
          alt="activity"
          className="rounded-md w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Activity;
