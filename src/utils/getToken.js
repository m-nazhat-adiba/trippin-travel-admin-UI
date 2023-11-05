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

export default getToken;
