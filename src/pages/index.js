import ActivityCard from "@/components/dashboard/cards/ActivityCard";
import AnalyticCard from "@/components/dashboard/cards/AnalyticCard";
import PromoHighlight from "@/components/dashboard/cards/PromoHighlight";
import Layout from "@/components/common/layout";
import React from "react";
import UserHighlightTable from "@/components/dashboard/table";
import { activityService, promoService, userService } from "@/apis";

const Home = () => {
  const userData = userService.getUserList();
  const activityData = activityService.getActivityList();
  const promoData = promoService.getPromoList();

  return (
    <Layout>
      <div className="flex flex-col w-full gap-5">
        <div className="grid grid-cols-4 w-full gap-8">
          {activityData.loading ? (
            <p>Loading...</p>
          ) : activityData.error ? (
            <p>Error: {activityData.error.message}</p>
          ) : (
            <AnalyticCard data={activityData.data.data} title="Activity Data" />
          )}

          {userData.loading ? (
            <p>Loading...</p>
          ) : userData.error ? (
            <p>Error: {userData.error.message}</p>
          ) : (
            <AnalyticCard data={userData.data.data} title="Users Data" />
          )}

          {userData.loading ? (
            <p>Loading...</p>
          ) : userData.error ? (
            <p>Error: {userData.error.message}</p>
          ) : (
            <AnalyticCard data={userData.data.data} />
          )}

          {userData.loading ? (
            <p>Loading...</p>
          ) : userData.error ? (
            <p>Error: {userData.error.message}</p>
          ) : (
            <AnalyticCard data={userData.data.data} />
          )}
        </div>

        <div className="flex gap-6">
          {activityData.loading ? (
            <p>Loading...</p>
          ) : activityData.error ? (
            <p>Error: {activityData.error.message}</p>
          ) : (
            <ActivityCard activityData={activityData.data.data[0]} />
          )}
          {promoData.loading ? (
            <p>Loading...</p>
          ) : promoData.error ? (
            <p>Error: {promoData.error.message}</p>
          ) : (
            <PromoHighlight data={promoData.data.data[0]} />
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
  );
};

export default Home;
