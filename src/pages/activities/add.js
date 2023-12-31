import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { categoryService } from "@/apis";
import Button from "@/components/common/button";
import InputField from "@/components/common/input/InputField";
import InputFile from "@/components/common/input/InputFile";
import SelectInput from "@/components/common/input/SelectInput";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import Modal from "@/components/common/modal";
import ScreenLock from "@/components/common/screen";
import Spinner from "@/components/common/spinner";
import { ACTIVITIES } from "@/constant/api";
import useInput from "@/hooks/useInput";
import { postData } from "@/utils/fetchData";
import getToken from "@/utils/getToken";
import handleUpload from "@/utils/handleUpload";

const AddActivity = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const [dataPost, setDataPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [errorPost, setErrorPost] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const categoryHook = useInput();
  const titleHook = useInput();
  const addressHook = useInput();
  const cityHook = useInput();
  const provinceHook = useInput();
  const priceHook = useInput();
  const discHook = useInput();
  const reviewHook = useInput();
  const ratingHook = useInput();
  const facilityHook = useInput();
  // const imageUrlHook = useInput();
  const descHook = useInput();

  const categoryData = categoryService.GetCategoryList();
  const header = getToken().userConfig;

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
      categoryId: categoryHook.data,
      title: titleHook.data,
      description: descHook.data,
      imageUrls: [imageUrl],
      price: parseInt(priceHook.data),
      price_discount: discHook.data,
      rating: ratingHook.data,
      total_reviews: reviewHook.data,
      facilities: facilityHook.data,
      address: addressHook.data,
      province: priceHook.data,
      city: cityHook.data,
      location_maps:
        "<iframe src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3967.0362349768025!2d106.8428182!3d-6.125826300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDcnMzMuMCJTIDEwNsKwNTAnMzQuMiJF!5e0!3m2!1sen!2sid!4v1679931691632!5m2!1sen!2sid' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>",
    };
    try {
      const result = await postData(ACTIVITIES.CREATE, payload, header);
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
  const handleReload = () => {
    router.reload();
  };

  return (
    <>
      <ScreenLock />
      <Layout>
        <ContentLayout title="Add New Activity">
          <form onSubmit={handleSubmit} className="flex flex-col gap-9">
            <div className="flex flex-col gap-7 my-2">
              <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
                {categoryData.loading ? (
                  <Spinner />
                ) : categoryData.error ? (
                  <p>{categoryData.error}</p>
                ) : (
                  <SelectInput
                    inputHook={categoryHook}
                    data={categoryData.data?.data}
                  />
                )}
                <InputField
                  className="col-span-2"
                  inputHook={titleHook}
                  placeholder="Title"
                  label="Title"
                />
              </div>
              <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
                <InputField
                  className="col-span-2"
                  inputHook={addressHook}
                  placeholder="Address"
                  label="Address"
                />
                <InputField
                  inputHook={cityHook}
                  placeholder="City"
                  label="City"
                />
                <InputField
                  inputHook={provinceHook}
                  placeholder="Province"
                  label="Province"
                />
              </div>
              <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
                <InputField
                  inputHook={priceHook}
                  placeholder="IDR"
                  label="Price"
                />
                <InputField
                  inputHook={discHook}
                  placeholder="IDR"
                  label="Price Discount"
                />
              </div>
              <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
                <InputField
                  inputHook={reviewHook}
                  placeholder="e.g. 100"
                  label="Total Reviews"
                />
                <InputField
                  inputHook={ratingHook}
                  placeholder="1 - 10"
                  label="Rating"
                />
                <InputField
                  inputHook={facilityHook}
                  placeholder="Shower, etc"
                  label="Facility"
                />
              </div>
              <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
                <InputField
                  className="col-span-4"
                  inputHook={descHook}
                  placeholder="Write anything"
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
              <Link href={"/activities"}>
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

export default AddActivity;
