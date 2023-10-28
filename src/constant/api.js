const BASE_URL = "https://travel-journal-api-bootcamp.do.dibimbing.id";

export const USERS = {
  GET_ALL_USERS: `${BASE_URL}/api/v1/all-user`,
  UPDATE_ROLE: `${BASE_URL}/api/v1/update-user-role/`,
};

export const ACTIVITIES = {
  GET_ALL_ACTIVITIES: `${BASE_URL}/api/v1/activities`,
  GET_BY_ID: `${BASE_URL}/api/v1/activity/`,
  UPDATE: `${BASE_URL}/api/v1/update-activity/`,
  DELETE: `${BASE_URL}/api/v1/delete-activity/`,
  CREATE: `${BASE_URL}/api/v1/create-activity`,
};

export const PROMOS = {
  GET_ALL_PROMOS: `${BASE_URL}/api/v1/promos`,
  CREATE: `${BASE_URL}/api/v1/create-promo`,
  UPDATE: `${BASE_URL}/api/v1/update-promo/`,
  DELETE: `${BASE_URL}/api/v1/delete-promo/`,
};

export const CATEGORIES = {
  GET_ALL_CATEGORES: `${BASE_URL}/api/v1/categories`,
  UPDATE: `${BASE_URL}/api/v1/update-category/`,
  CREATE: `${BASE_URL}/api/v1/create-category`,
  DELETE: `${BASE_URL}/api/v1/delete-category/`,
};

export const AUTH = {
  LOGIN: `${BASE_URL}/api/v1/login`,
  REGISTER: `${BASE_URL}/api/v1/register`,
};
