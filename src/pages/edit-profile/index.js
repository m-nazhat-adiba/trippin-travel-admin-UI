import Button from "@/components/common/button";
import InputField from "@/components/common/input/InputField";
import InputFile from "@/components/common/input/InputFile";
import Modal from "@/components/common/modal";
import { USERS } from "@/constant/api";
import { USER_CONFIG } from "@/constant/config";
import useInput from "@/hooks/useInput";
import handleUpload from "@/utils/handleUpload";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const EditProfile = () => {
  const nameHook = useInput();
  const emailHook = useInput();
  const phoneHook = useInput();

  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [dataPost, setDataPost] = useState(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [errorPost, setErrorPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

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
      name: nameHook.data,
      email: emailHook.data,
      profilePictureUrl: imageUrl,
      phone: phoneHook.data,
    };
    try {
      const result = await axios.post(
        USERS.UPDATE_PROFILE,
        payload,
        USER_CONFIG
      );
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

  const handlePushRouter = () => {
    router.push("/");
  };

  useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <main className="container mx-auto my-5">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold">Edit Profile</h1>
      </header>
      <form onSubmit={handleSubmit} className="flex flex-col gap-9">
        <div className="flex flex-col gap-7 my-2">
          <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
            <InputField
              className="col-span-2"
              inputHook={nameHook}
              placeholder="Name"
              label="Name"
            />
          </div>
          <div className="grid xl:grid-cols-4 grid-cols-2 gap-7 w-full px-5">
            <InputField
              className="col-span-2"
              inputHook={emailHook}
              placeholder="Your email"
              label="Email"
            />
            <InputField
              className="col-span-2"
              inputHook={phoneHook}
              placeholder="Phone number"
              label="Phone"
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
          <Link href={"/"}>
            <Button variant="secondary">Cancel</Button>
          </Link>
        </div>
      </form>
      {showModal ? (
        <Modal
          handleRedirect={handlePushRouter}
          handleModal={handleModal}
          title="Status"
        >
          <p>Success</p>
        </Modal>
      ) : null}
    </main>
  );
};

export default EditProfile;
