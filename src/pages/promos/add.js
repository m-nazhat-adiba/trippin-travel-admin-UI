import Link from "next/link";
import React, { useState } from "react";

import Button from "@/components/common/button";
import InputField from "@/components/common/input/InputField";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import Modal from "@/components/common/modal";
import ScreenLock from "@/components/common/screen";
import { PROMOS } from "@/constant/api";
import { USER_CONFIG } from "@/constant/config";
import useInput from "@/hooks/useInput";
import { postData } from "@/utils/fetchData";
import handleUpload from "@/utils/handleUpload";
import InputFile from "@/components/common/input/inputFile";
import { useRouter } from "next/router";

const AddPromo = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [dataPost, setDataPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [errorPost, setErrorPost] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const promoHook = useInput();
  const titleHook = useInput();
  const discHook = useInput();
  const claimHook = useInput();
  const tncHook = useInput();
  const descHook = useInput();

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
      title: titleHook.data,
      description: descHook.data,
      imageUrl: imageUrl,
      terms_condition: tncHook.data,
      promo_code: promoHook.data,
      promo_discount_price: parseInt(discHook.data),
      minimum_claim_price: parseInt(claimHook.data),
    };
    try {
      const result = await postData(PROMOS.CREATE, payload, USER_CONFIG);
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
  const handleReload = () => {
    router.reload();
  };

  return (
    <>
      <ScreenLock />
      <Layout>
        <ContentLayout title="Edit Promo">
          <form onSubmit={handleSubmit} className="flex flex-col gap-9">
            <div className="flex flex-col gap-7 my-2">
              <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
                <InputField
                  inputHook={promoHook}
                  placeholder="TEST01"
                  label="Promo Code"
                />
              </div>
              <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
                <InputField
                  className="col-span-2"
                  inputHook={titleHook}
                  placeholder="Title"
                  label="Title"
                />
              </div>
              <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
                <InputField
                  inputHook={discHook}
                  placeholder="IDR"
                  label="Discount"
                />
                <InputField
                  inputHook={claimHook}
                  placeholder="IDR"
                  label="Minimum Claim Price"
                />
              </div>
              <div className="grid xl:grid-cols-4 grid-cols-2gap-7 w-full px-5">
                <InputField
                  className="col-span-4"
                  inputHook={tncHook}
                  placeholder="Anything"
                  label="Terms and Condition"
                />
              </div>
              <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
                <InputField
                  className="col-span-4"
                  inputHook={descHook}
                  placeholder="Anything"
                  label="Description"
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
              <Link href={"/promos"}>
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

export default AddPromo;
