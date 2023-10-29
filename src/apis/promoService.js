const { PROMOS } = require("@/constant/api");
const { GENERAL_CONFIG } = require("@/constant/config");
const { default: useAxios } = require("@/hooks/useAxios");
const { getData } = require("@/utils/fetchData");

function GetPromoList() {
  const promoList = useAxios(getData, PROMOS.GET_ALL_PROMOS, GENERAL_CONFIG);

  return promoList;
}

export { GetPromoList };
