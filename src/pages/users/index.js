import Layout from "@/components/common/layout";
import React, { useState } from "react";
import UserTable from "@/components/common/table/users";
import ContentLayout from "@/components/common/layout/content";
import { userService } from "@/apis";
import Modal from "@/components/common/modal";
import InputField from "@/components/common/input/InputField";

const Users = () => {
  const userData = userService.getUserList();
  const [showModal, setShowModal] = useState(false);
  const handleEditModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <ContentLayout title="All Users" sub="Manage users">
        {userData.loading ? (
          <p>Loading...</p>
        ) : userData.error ? (
          <p>Error: {userData.error.message}</p>
        ) : (
          <UserTable handleModal={handleEditModal} userData={userData.data} />
        )}
        {showModal ? (
          <Modal title="Edit User Role" handleModal={handleEditModal}>
            <InputField
              className="w-96"
              placeholder="admin, user"
              label="Role"
            />
          </Modal>
        ) : null}
      </ContentLayout>
    </Layout>
  );
};

export default Users;
