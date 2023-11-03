const API_KEY = "24405e01-fbc1-45a5-9f5a-be13afcd757c";
const JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJiYTAwOWE5MC03YzNmLTQ3NGMtOWVhMC1jZmY0MWQxMWNiYzciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTg5OTcwMTJ9.g_ylsRnAPaa4MaGsp1bdvZ0yM6hiCZqo9oQCICzt2zc";

export const USER_CONFIG = {
  headers: {
    apiKey: API_KEY,
    Authorization: `Bearer ${JWT_TOKEN}`,
  },
};

export const USER_LOGGED_CONFIG = {
  headers: {
    Authorization: `Bearer ${JWT_TOKEN}`,
    apiKey: API_KEY,
  },
};

export const GENERAL_CONFIG = {
  headers: {
    apiKey: API_KEY,
  },
};

export const IMAGE_UPLOAD_CONFIG = {
  headers: {
    // "Content-Type": "multipart/form-data",
    apiKey: API_KEY,
    Authorization: `Bearer ${JWT_TOKEN}`,
  },
};
