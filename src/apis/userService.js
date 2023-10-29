import { USER_CONFIG } from "@/constant/config";
import useAxios from "@/hooks/useAxios";
import { getData } from "@/utils/fetchData";

import { USERS } from "../constant/api";

function GetUserList() {
  const userList = useAxios(getData, USERS.GET_ALL_USERS, USER_CONFIG);

  return userList;
}

export { GetUserList };
