import React, { useState } from "react";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import InputField from "@/components/common/input/InputField";
import useInput from "@/hooks/useInput";
import { postData } from "@/utils/fetchData";
import { PROMOS } from "@/constant/api";
import { USER_CONFIG } from "@/constant/config";
import Modal from "@/components/common/modal";
import Link from "next/link";
import Button from "@/components/common/button";
import ScreenLock from "@/components/common/screen";

const AddPromo = () => {
  const [showModal, setShowModal] = useState(false);
  const [dataPost, setDataPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [errorPost, setErrorPost] = useState(null);

  const promoHook = useInput();
  const titleHook = useInput();
  const discHook = useInput();
  const claimHook = useInput();
  const tncHook = useInput();
  const imageUrlHook = useInput();
  const descHook = useInput();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingPost(true);
    const payload = {
      title: titleHook.data,
      description: descHook.data,
      imageUrl: imageUrlHook.data,
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
      console.log(error);
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
                  inputHook={imageUrlHook}
                  placeholder="https://image.com/"
                  label="Image URL"
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
            </div>
            <div className="flex gap-2 px-5">
              <Button type="submit" variant="primary">
                Save
              </Button>
              <Link href={"/promos"}>
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

export default AddPromo;
