import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import Button from "@/components/common/button";
import { CATEGORIES } from "@/constant/api";
import { deleteData } from "@/utils/fetchData";
import imageLoader from "@/utils/imageLoader";
import getToken from "@/utils/getToken";

const Category = ({ data, showModal }) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const header = getToken().userConfig;

  const handleDelete = async () => {
    try {
      const deletePost = await deleteData(CATEGORIES.DELETE + data.id, header);
      setResponse(deletePost);
      showModal(true);
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
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="font-bold text-xl">{data.name}</h2>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <Link href={`/categories/${data.id}`} className="w-full">
            <Button variant="primary">Edit</Button>
          </Link>
          <Button variant="secondary" handleClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Category;
