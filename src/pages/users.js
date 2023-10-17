import { USERS } from "@/apis/api";
import Layout from "@/components/common/layout";
import { USER_CONFIG } from "@/constant/config";
import useAxios from "@/hooks/useAxios";
import React from "react";
import UserTable from "@/components/common/table/users";

const Users = () => {
  const userData = useAxios(USERS.GET_ALL_USERS, USER_CONFIG);
  return (
    <Layout>
      {userData.loading ? (
        <p>Loading...</p>
      ) : userData.error ? (
        <p>Error: {userData.error.message}</p>
      ) : (
        <UserTable userData={userData.data} />
      )}
    </Layout>
  );
};

export default Users;
