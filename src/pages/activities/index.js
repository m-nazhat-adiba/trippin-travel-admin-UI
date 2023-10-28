import Activity from "@/components/activity/card/Activity";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import React, { useState } from "react";
import { activityService } from "@/apis";
import Modal from "@/components/common/modal";

const Activities = () => {
  const [showModal, setShowModal] = useState(false);
  const activityData = activityService.getActivityList();

  const handleEditModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <ContentLayout
        title="Activities"
        sub="Products"
        button={true}
        buttonText="Activity"
        target="/activities/add"
      >
        {showModal ? (
          <Modal handleModal={handleEditModal} title="Notification">
            <p>Delete Success</p>
          </Modal>
        ) : null}

        <div className="flex flex-col gap-4">
          {activityData.loading ? (
            <p>Loading...</p>
          ) : activityData.error ? (
            <p>Error: {activityData.error.message}</p>
          ) : (
            activityData.data.data.map((item, key) => (
              <Activity showModal={setShowModal} data={item} key={key} />
            ))
          )}
        </div>
      </ContentLayout>
    </Layout>
  );
};

export default Activities;
