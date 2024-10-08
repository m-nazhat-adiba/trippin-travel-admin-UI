import React from "react";

import {
  activityService,
  categoryService,
  promoService,
  userService,
} from "@/apis";
import Layout from "@/components/common/layout";
import ScreenLock from "@/components/common/screen";
import ActivityCard from "@/components/dashboard/cards/ActivityCard";
import AnalyticCard from "@/components/dashboard/cards/AnalyticCard";
import PromoHighlight from "@/components/dashboard/cards/PromoHighlight";
import UserHighlightTable from "@/components/dashboard/table";

const Home = () => {
  const userData = userService.GetUserList();
  const activityData = activityService.GetActivityList();
  const promoData = promoService.GetPromoList();
  const categoryData = categoryService.GetCategoryList();

  return (
    <>
      <ScreenLock />
      <Layout>
        <div className="flex flex-col w-full gap-5">
          <div className="grid grid-cols-2 xl:grid-cols-4 w-full gap-8">
            {activityData.loading ? (
              <p>Loading...</p>
            ) : activityData.error ? (
              <p>Error: {activityData.error.message}</p>
            ) : (
              <AnalyticCard
                data={activityData.data.data}
                title="Activity Data"
              />
            )}

            {userData.loading ? (
              <p>Loading...</p>
            ) : userData.error ? (
              <p>Error: {userData.error.message}</p>
            ) : (
              <AnalyticCard data={userData.data.data} title="Users Data" />
            )}

            {promoData.loading ? (
              <p>Loading...</p>
            ) : promoData.error ? (
              <p>Error: {promoData.error.message}</p>
            ) : (
              <AnalyticCard data={promoData.data.data} title="Promo Data" />
            )}

            {categoryData.loading ? (
              <p>Loading...</p>
            ) : categoryData.error ? (
              <p>Error: {categoryData.error.message}</p>
            ) : (
              <AnalyticCard
                data={categoryData.data.data}
                title="Category Data"
              />
            )}
          </div>

          <div className="flex xl:flex-row flex-col xl:gap-6 gap-4 lg:max-h-[300px] md:max-h-full">
            {activityData.loading ? (
              <p>Loading...</p>
            ) : activityData.error ? (
              <p>Error: {activityData.error.message}</p>
            ) : (
              <div className="lg:w-[60%] md:w-full">
                <ActivityCard data={activityData.data.data[0]} />
              </div>
            )}
            {promoData.loading ? (
              <p>Loading...</p>
            ) : promoData.error ? (
              <p>Error: {promoData.error.message}</p>
            ) : (
              <div className="lg:w-[40%] md:w-full">
                <PromoHighlight data={promoData.data.data[0]} />
              </div>
            )}
          </div>
          <div>
            {userData.loading ? (
              <p>Loading...</p>
            ) : userData.error ? (
              <p>Error: {userData.error.message}</p>
            ) : (
              <UserHighlightTable userData={userData.data} />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
