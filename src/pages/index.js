import ActivityCard from "@/components/dashboard/cards/ActivityCard";
import AnalyticCard from "@/components/dashboard/cards/AnalyticCard";
import PromoCard from "@/components/dashboard/cards/PromoCard";
import UserTable from "@/components/dashboard/user-table";
import Layout from "@/components/common/layout";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full gap-5">
        <div className="grid grid-cols-4 w-full gap-8">
          <AnalyticCard />
          <AnalyticCard />
          <AnalyticCard />
          <AnalyticCard />
        </div>
        <div className="flex gap-6">
          <ActivityCard />
          <PromoCard />
        </div>
        <div>
          <UserTable />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
