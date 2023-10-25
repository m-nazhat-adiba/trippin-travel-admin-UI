const { AUTH } = require("@/constant/api");
const { GENERAL_CONFIG } = require("@/constant/config");
const { default: useAxios } = require("@/hooks/useAxios");
const { postData } = require("@/utils/fetchData");

function handleLogin(payload) {
  const loginData = useAxios(postData, AUTH.LOGIN, payload, GENERAL_CONFIG);

  return loginData;
}

export { handleLogin };
