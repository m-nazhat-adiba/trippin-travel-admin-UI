import Link from "next/link";
import React, { useState } from "react";

import Button from "@/components/common/button";
import InputField from "@/components/common/input/InputField";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import Modal from "@/components/common/modal";
import ScreenLock from "@/components/common/screen";
import { CATEGORIES } from "@/constant/api";
import { USER_CONFIG } from "@/constant/config";
import useInput from "@/hooks/useInput";
import { postData } from "@/utils/fetchData";

const AddCategory = () => {
  const [showModal, setShowModal] = useState(false);

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
      const result = await postData(CATEGORIES.CREATE, payload, USER_CONFIG);
      setDataPost(result.data);
      setShowModal(true);
    } catch (error) {
      setErrorPost(error);
    } finally {
      setLoadingPost(false);
    }
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ScreenLock />
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
              <Button type="submit" variant="primary">
                Save
              </Button>
              <Link href={"/categories"}>
                <Button variant="secondary">Cancel</Button>
              </Link>
            </div>
          </form>
          {showModal ? (
            <Modal handleModal={handleModal} title="Status">
              <p>Success</p>
            </Modal>
          ) : null}
        </ContentLayout>
      </Layout>
    </>
  );
};

export default AddCategory;
