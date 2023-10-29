import Layout from "@/components/common/layout";
import React, { useEffect, useState } from "react";
import UserTable from "@/components/common/table/users";
import ContentLayout from "@/components/common/layout/content";
import { userService } from "@/apis";
import Modal from "@/components/common/modal";
import InputField from "@/components/common/input/InputField";
import useInput from "@/hooks/useInput";
import { postData } from "@/utils/fetchData";
import { USERS } from "@/constant/api";
import SelectInput from "@/components/common/input/SelectInput";
import { USER_CONFIG } from "@/constant/config";
import ScreenLock from "@/components/common/screen";

const Users = () => {
  const userData = userService.getUserList();
  const roleHook = useInput();
  const [showModal, setShowModal] = useState(false);
  const [dataPost, setDataPost] = useState();
  const [loadingPost, setLoadingPost] = useState(false);
  const [errorPost, setErrorPost] = useState(null);
  const [userId, setUserId] = useState();

  const roles = [
    { id: "admin", name: "Admin" },
    { id: "user", name: "User" },
  ];

  const handleEditModal = () => {
    setShowModal(!showModal);
  };
  const handleChangeRole = async (e) => {
    e.preventDefault();
    const payload = {
      role: roleHook.data,
    };
    try {
      const result = await postData(
        USERS.UPDATE_ROLE + userId,
        payload,
        USER_CONFIG
      );
      setDataPost(result.data);
    } catch (error) {
      setErrorPost(error);
      console.log(errorPost);
    } finally {
      setLoadingPost(false);
    }
  };

  useEffect(() => {
    console.log("id", userId);
    console.log("role", roleHook.data);
  }, [userId, roleHook.data]);

  return (
    <>
      <ScreenLock />
      <Layout>
        <ContentLayout title="All Users" sub="Manage users">
          {userData.loading ? (
            <p>Loading...</p>
          ) : userData.error ? (
            <p>Error: {userData.error.message}</p>
          ) : (
            <UserTable
              setData={setUserId}
              handleModal={handleEditModal}
              userData={userData.data}
            />
          )}
          {showModal ? (
            <Modal
              submit={true}
              title="Edit User Role"
              handleModal={handleEditModal}
              handleSubmit={handleChangeRole}
            >
              <SelectInput inputHook={roleHook} data={roles} />
            </Modal>
          ) : null}
        </ContentLayout>
      </Layout>
    </>
  );
};

export default Users;
