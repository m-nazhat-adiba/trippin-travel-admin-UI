import { USERS } from "@/apis/api";
import Layout from "@/components/common/layout";
import { USER_CONFIG } from "@/constant/config";
import useAxios from "@/hooks/useAxios";
import React from "react";
import UserTable from "@/components/common/table/users";
import ContentLayout from "@/components/common/layout/content";

const Users = () => {
  const userData = useAxios(USERS.GET_ALL_USERS, USER_CONFIG);
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
