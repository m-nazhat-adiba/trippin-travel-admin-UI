import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { categoryService } from "@/apis";
import Button from "@/components/common/button";
import InputField from "@/components/common/input/InputField";
import SelectInput from "@/components/common/input/SelectInput";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import ScreenLock from "@/components/common/screen";
import Spinner from "@/components/common/spinner";
import { ACTIVITIES } from "@/constant/api";
import { GENERAL_CONFIG, USER_CONFIG } from "@/constant/config";
import useInput from "@/hooks/useInput";

const EditActivity = () => {
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
  const imageUrlHook = useInput();
  const descHook = useInput();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataPost, setDataPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [errorPost, setErrorPost] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const handleFetch = async () => {
    try {
      const result = await axios.get(ACTIVITIES.GET_BY_ID + id, GENERAL_CONFIG);
      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingPost(true);
    const payload = {
      categoryId: "1bb4cbb2-080e-4904-9d6d-09eee6acaf15",
      title: titleHook.data,
      description: descHook.data,
      imageUrls: [imageUrlHook.data],
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
      const result = await axios.post(
        ACTIVITIES.UPDATE + id,
        payload,
        USER_CONFIG
      );
      setDataPost(result.data);
      router.push("/activities");
    } catch (error) {
      setErrorPost(error);
    } finally {
      setLoadingPost(false);
    }
  };

  useEffect(() => {
    if (id) {
      handleFetch();
    }
  }, [id]);

  const categoryData = categoryService.GetCategoryList();
  const activityData = { data, error, loading };

  return (
    <>
      <ScreenLock />
      <Layout>
        <ContentLayout title="Edit Activity">
          <form onSubmit={handleSubmit} className="flex flex-col gap-9">
            {activityData.loading ? (
              <Spinner />
            ) : activityData.error ? (
              <p>{activityData.error}</p>
            ) : (
              <div className="flex flex-col gap-7 my-2">
                <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
                  {categoryData.loading ? (
                    <Spinner />
                  ) : categoryData.error ? (
                    <p>{categoryData.error}</p>
                    ) : (
                    <SelectInput
                      data={categoryData.data?.data}
                      inputHook={categoryHook}
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
                    inputHook={imageUrlHook}
                    placeholder="https://image.com/"
                    label="Image URL"
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
              </div>
            )}

            <div className="flex gap-2 px-5">
              <Button
                disable={loadingPost ? true : false}
                type="submit"
                variant="primary"
              >
                {loadingPost ? <Spinner className="w-7 h-7" /> : <p>Save</p>}
              </Button>
              <Link href={"/activities"}>
                <Button variant="secondary">Cancel</Button>
              </Link>
            </div>
          </form>
        </ContentLayout>
      </Layout>
    </>
  );
};

export default EditActivity;
