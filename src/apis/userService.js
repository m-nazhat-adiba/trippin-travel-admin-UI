import useAxios from "@/hooks/useAxios";
import { getData } from "@/utils/fetchData";

import { USERS } from "../constant/api";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function getToken() {
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const userConfig = {
    headers: {
      apiKey: API_KEY,
      Authorization: `Bearer ${token}`,
    },
  };

  const loggedConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      apiKey: API_KEY,
    },
  };
  return { userConfig, loggedConfig };
}

function GetUserList() {
  const config = getToken().userConfig;
  const userList = useAxios(getData, USERS.GET_ALL_USERS, config);

  return userList;
}

function GetLoggedUser() {
  const config = getToken().loggedConfig;
  const userData = useAxios(getData, USERS.GET_LOGGED_USER, config);

  return userData;
}

export { GetLoggedUser,GetUserList };
