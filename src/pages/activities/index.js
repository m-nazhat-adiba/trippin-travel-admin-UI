import { useRouter } from "next/router";
import React, { useState } from "react";

import { activityService } from "@/apis";
import Activity from "@/components/activity/card/Activity";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import Modal from "@/components/common/modal";
import ScreenLock from "@/components/common/screen";

const Activities = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const activityData = activityService.GetActivityList();

  const handleReload = () => {
    router.reload();
  };

  const handleEditModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ScreenLock />
      <Layout>
        <ContentLayout
          title="Activities"
          sub="Products"
          button={true}
          buttonText="Activity"
          target="/activities/add"
        >
          {showModal ? (
            <Modal
              handleRedirect={handleReload}
              handleModal={handleEditModal}
              title="Notification"
            >
              <p>Delete Success</p>
            </Modal>
          ) : null}

          <div className="flex flex-col">
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
    </>
  );
};

export default Activities;
