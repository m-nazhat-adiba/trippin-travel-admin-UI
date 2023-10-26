import Activity from "@/components/activity/card/Activity";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import React from "react";
import { activityService } from "@/apis";

const Activities = () => {
  const activityData = activityService.getActivityList();
  return (
    <Layout>
      <ContentLayout
        title="Activities"
        sub="Products"
        button={true}
        buttonText="Activity"
      >
        <div className="flex flex-col gap-4">
          {activityData.loading ? (
            <p>Loading...</p>
          ) : activityData.error ? (
            <p>Error: {activityData.error.message}</p>
          ) : (
            activityData.data.data.map((item, key) => (
              <Activity data={item} key={key} />
            ))
          )}
        </div>
      </ContentLayout>
    </Layout>
  );
};

export default Activities;
