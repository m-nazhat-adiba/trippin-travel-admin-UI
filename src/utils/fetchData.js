import axios from "axios";

export const getData = async (url, config) => {
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const postData = async (url, payload, config) => {
  try {
    const response = await axios.post(url, payload, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
