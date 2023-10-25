import Layout from "@/components/common/layout";
import React from "react";
import UserTable from "@/components/common/table/users";
import ContentLayout from "@/components/common/layout/content";
import { userService } from "@/apis";

const Users = () => {
  const userData = userService.getUserList();
  return (
    <Layout>
      <ContentLayout title="All Users" sub="Manage users">
        {userData.loading ? (
          <p>Loading...</p>
        ) : userData.error ? (
          <p>Error: {userData.error.message}</p>
        ) : (
          <UserTable userData={userData.data} />
        )}
      </ContentLayout>
    </Layout>
  );
};

export default Users;
