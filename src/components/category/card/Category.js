import React, { useState } from "react";
import Image from "next/image";
import imageLoader from "@/utils/imageLoader";
import Link from "next/link";
import { useRouter } from "next/router";
import { deleteData } from "@/utils/fetchData";
import { CATEGORIES } from "@/constant/api";
import { USER_CONFIG } from "@/constant/config";
import Button from "@/components/common/button";

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
      <div className="flex flex-col px-3 gap-2">
        <div>
          <h2 className="font-bold text-xl">{data.name}</h2>
        </div>
        <div className="flex gap-2 mt-3">
          <Link href={`/categories/${data.id}`}>
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
