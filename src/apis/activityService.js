const { ACTIVITIES } = require("@/constant/api");
const { GENERAL_CONFIG } = require("@/constant/config");
const { default: useAxios } = require("@/hooks/useAxios");
const { getData } = require("@/utils/fetchData");

function getActivityList() {
  const activityList = useAxios(
    getData,
    ACTIVITIES.GET_ALL_ACTIVITIES,
    GENERAL_CONFIG
  );

  return activityList;
}

export { getActivityList };
