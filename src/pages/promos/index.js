import { useRouter } from "next/router";
import React, { useState } from "react";

import { promoService } from "@/apis";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import Modal from "@/components/common/modal";
import ScreenLock from "@/components/common/screen";
import PromoCard from "@/components/promos/card/PromoCard";
import EmptyState from "@/components/common/empty-state/EmptyState";

const Promos = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const promoData = promoService.GetPromoList();

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
          title="Promos"
          sub="Discounts, bundles, etc"
          button={true}
          buttonText="Promo"
          target="/promos/add"
        >
          {promoData.loading ? (
            <p>Loading---</p>
          ) : promoData.error ? (
            <p>Error: {promoData.error.message}</p>
          ) : promoData.data.data.length < 1 ? (
            <div className="w-full h-[calc(100vh_-_240px)] flex items-center justify-center">
              <EmptyState
                title="There is no promo now"
                description="Add new promo and makes our customer loves us more"
              />
            </div>
          ) : (
            <div className="grid xl:grid-cols-4 grid-cols-1 gap-6 px-5">
              {promoData.data.data.map((item, key) => (
                <PromoCard showModal={setShowModal} data={item} key={key} />
              ))}
            </div>
          )}
          {showModal ? (
            <Modal
              handleRedirect={handleReload}
              handleModal={handleEditModal}
              title="Notification"
            >
              <p>Delete Success</p>
            </Modal>
          ) : null}
        </ContentLayout>
      </Layout>
    </>
  );
};

export default Promos;
