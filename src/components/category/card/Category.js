import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Button from "@/components/common/button";
import { CATEGORIES } from "@/constant/api";
import { USER_CONFIG } from "@/constant/config";
import { deleteData } from "@/utils/fetchData";
import imageLoader from "@/utils/imageLoader";

const Category = ({ data }) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const deletePost = await deleteData(
        CATEGORIES.DELETE + data.id,
        USER_CONFIG
      );
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
