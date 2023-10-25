const { CATEGORIES } = require("@/constant/api");
const { GENERAL_CONFIG } = require("@/constant/config");
const { default: useAxios } = require("@/hooks/useAxios");
const { getData } = require("@/utils/fetchData");

function getCategoryList() {
  const categoryList = useAxios(
    getData,
    CATEGORIES.GET_ALL_CATEGORES,
    GENERAL_CONFIG
  );

  return categoryList;
}

export { getCategoryList };
