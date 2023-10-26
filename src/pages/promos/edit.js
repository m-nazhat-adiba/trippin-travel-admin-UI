import React from "react";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import InputField from "@/components/common/input/InputField";
import useInput from "@/hooks/useInput";

const EditPromo = () => {
  const promoHook = useInput();
  const titleHook = useInput();
  const discHook = useInput();
  const claimHook = useInput();
  const tncHook = useInput();
  const imageUrlHook = useInput();
  const descHook = useInput();

  return (
    <Layout>
      <ContentLayout title="Edit Promo">
        <form className="flex flex-col gap-9">
          <div className="flex flex-col gap-7 my-2">
            <div className="grid grid-cols-4 gap-7 w-full px-5">
              <InputField
                inputHook={promoHook}
                placeholder="TEST01"
                label="Promo Code"
              />
            </div>
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
            <div className="grid grid-cols-4 gap-7 w-full px-5">
              <InputField
                className="col-span-4"
                inputHook={tncHook}
                placeholder="Anything"
                label="Terms and Condition"
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
                placeholder="Anything"
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

export default EditPromo;
