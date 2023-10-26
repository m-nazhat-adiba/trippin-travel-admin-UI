import InputField from "@/components/common/input/InputField";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import useInput from "@/hooks/useInput";
import React from "react";

const EditActivity = () => {
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

  return (
    <Layout>
      <ContentLayout title="Edit Activity">
        <form className="flex flex-col gap-9">
          <div className="flex flex-col gap-7 my-2">
            <div className="grid grid-cols-4 gap-7 w-full px-5">
              <InputField placeholder="Category" label="Category" />
              <InputField
                className="col-span-2"
                inputHook={titleHook}
                placeholder="Title"
                label="Title"
              />
            </div>
            <div className="grid grid-cols-4 gap-7 w-full px-5">
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
            <div className="grid grid-cols-4 gap-7 w-full px-5">
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
            <div className="grid grid-cols-4 gap-7 w-full px-5">
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
            <div className="grid grid-cols-4 gap-7 w-full px-5">
              <InputField
                className="col-span-4"
                inputHook={imageUrlHook}
                placeholder="https://image.com/"
                label="Image URL"
              />
            </div>
            <div className="grid grid-cols-4 gap-7 w-full px-5">
              <InputField
                className="col-span-4"
                inputHook={descHook}
                placeholder="Write anything"
                label="Description"
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
            <button className="py-2 px-4 border-2 border-gray-300 rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      </ContentLayout>
    </Layout>
  );
};

export default EditActivity;
