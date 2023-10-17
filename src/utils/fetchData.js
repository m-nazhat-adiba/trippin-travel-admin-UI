import axios from "axios";

export const fetchData = async (url, config) => {
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
