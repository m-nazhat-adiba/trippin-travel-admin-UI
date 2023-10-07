import ActivityCard from "@/components/cards/ActivityCard";
import AnalyticCard from "@/components/cards/AnalyticCard";
import PromoCard from "@/components/cards/PromoCard";
import UserTable from "@/components/user-table";
import NavBar from "@/components/navigation/NavBar";
import SideBar from "@/components/navigation/SideBar";
import React from "react";

const Home = () => {
  return (
    <main className="flex w-screen mx-auto">
      <SideBar />
      <div className="flex flex-col flex-grow items-start pl-4 pr-8">
        <NavBar />
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
      </div>
    </main>
  );
};

export default Home;
