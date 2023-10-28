import React, { useState } from "react";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import InputField from "@/components/common/input/InputField";
import useInput from "@/hooks/useInput";
import { postData } from "@/utils/fetchData";
import { CATEGORIES } from "@/constant/api";
import { USER_CONFIG } from "@/constant/config";
import { useRouter } from "next/router";
import Link from "next/link";

const EditCategory = () => {
  const router = useRouter();
  const { id } = router.query;

  const [dataPost, setDataPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [errorPost, setErrorPost] = useState(null);

  const titleHook = useInput();
  const imageUrlHook = useInput();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingPost(true);
    const payload = {
      name: titleHook.data,
      imageUrl: imageUrlHook.data,
    };
    try {
      const result = await postData(
        CATEGORIES.UPDATE + id,
        payload,
        USER_CONFIG
      );
      setDataPost(result.data);
    } catch (error) {
      setErrorPost(error);
      console.log(error);
    } finally {
      setLoadingPost(false);
    }
  };

  return (
    <Layout>
      <ContentLayout title="Add New Category">
        <form onSubmit={handleSubmit} className="flex flex-col gap-9">
          <div className="flex flex-col gap-7 my-2">
            <div className="grid grid-cols-4 gap-7 w-full px-5">
              <InputField
                className="col-span-2"
                inputHook={titleHook}
                placeholder="Title"
                label="Title"
              />
            </div>
            <div className="grid grid-cols-4 gap-7 w-full px-5">
              <InputField
                className="col-span-4"
                inputHook={imageUrlHook}
                placeholder="https://image.com/"
                label="Image URL"
              />
            </div>
          </div>
          <div className="flex gap-2 px-5">
            <button
              type="submit"
              className="py-2 px-6 bg-[#4FD1C5] rounded-lg text-white font-bold"
            >
              Save
            </button>
            <Link href={"/categories"}>
              <button
                type="button"
                className="py-2 px-4 border-2 border-gray-300 rounded-lg"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </ContentLayout>
    </Layout>
  );
};

export default EditCategory;
