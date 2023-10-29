import React, { useState } from "react";

import { userService } from "@/apis";
import SelectInput from "@/components/common/input/SelectInput";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import Modal from "@/components/common/modal";
import ScreenLock from "@/components/common/screen";
import UserTable from "@/components/common/table/users";
import { USERS } from "@/constant/api";
import { USER_CONFIG } from "@/constant/config";
import useInput from "@/hooks/useInput";
import { postData } from "@/utils/fetchData";

const Users = () => {
  const userData = userService.GetUserList();
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
    } finally {
      setLoadingPost(false);
    }
  };

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
