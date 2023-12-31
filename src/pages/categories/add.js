import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Button from "@/components/common/button";
import InputField from "@/components/common/input/InputField";
import InputFile from "@/components/common/input/InputFile";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import Modal from "@/components/common/modal";
import ScreenLock from "@/components/common/screen";
import { CATEGORIES } from "@/constant/api";
import useInput from "@/hooks/useInput";
import { postData } from "@/utils/fetchData";
import getToken from "@/utils/getToken";
import handleUpload from "@/utils/handleUpload";

const AddCategory = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const [dataPost, setDataPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [errorPost, setErrorPost] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const titleHook = useInput();

  const header = getToken().userConfig;

  const handleReload = () => {
    router.reload();
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleGrabUrl = async () => {
    try {
      const urls = await handleUpload(imageFile);
      console.log("urls", urls);
      setImageUrl(urls.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingPost(true);
    const payload = {
      name: titleHook.data,
      imageUrl: imageUrl,
    };
    try {
      const result = await postData(CATEGORIES.CREATE, payload, header);
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
              <div className="flex xl:flex-col w-1/2 flex-col gap-7  px-5">
                <InputFile handleFileChange={handleFileChange} />
                <Button
                  disable={imageFile ? false : true}
                  type="button"
                  handleClick={handleGrabUrl}
                  variant="rounded"
                >
                  Upload Image
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-2 px-5">
              <Button type="submit" variant="primary">
                Save
              </Button>
              <Link href={"/categories"}>
                <Button variant="secondary">Cancel</Button>
              </Link>
            </div>
          </form>
          {showModal ? (
            <Modal
              handleRedirect={handleReload}
              handleModal={handleModal}
              title="Status"
            >
              <p>Success</p>
            </Modal>
          ) : null}
        </ContentLayout>
      </Layout>
    </>
  );
};

export default AddCategory;
