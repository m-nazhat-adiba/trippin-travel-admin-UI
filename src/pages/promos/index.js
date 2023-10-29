import React from "react";

import { promoService } from "@/apis";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import ScreenLock from "@/components/common/screen";
import PromoCard from "@/components/promos/card/PromoCard";

const Promos = () => {
  const promoData = promoService.GetPromoList();

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
          ) : (
            <div className="grid xl:grid-cols-4 grid-cols-1 gap-6 px-5">
              {promoData.data.data.map((item, key) => (
                <PromoCard data={item} key={key} />
              ))}
            </div>
          )}
        </ContentLayout>
      </Layout>
    </>
  );
};

export default Promos;
