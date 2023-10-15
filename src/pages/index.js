import ActivityCard from "@/components/dashboard/cards/ActivityCard";
import AnalyticCard from "@/components/dashboard/cards/AnalyticCard";
import PromoCard from "@/components/dashboard/cards/PromoCard";
import UserTable from "@/components/dashboard/user-table";
import Layout from "@/components/common/layout";
import React from "react";
import useAxios from "@/hooks/useAxios";
import { activityConfig, userConfig } from "@/constant/config";
import { ACTIVITY_API, USERS_API } from "@/apis/api";

const Home = () => {
  const userData = useAxios(USERS_API, userConfig);
  const activityData = useAxios(ACTIVITY_API, activityConfig);

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
          <PromoCard />
        </div>
        <div>
          {userData.loading ? (
            <p>Loading...</p>
          ) : userData.error ? (
            <p>Error: {userData.error.message}</p>
          ) : (
            <UserTable userData={userData.data} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
