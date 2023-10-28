import Layout from "@/components/common/layout";
import React from "react";
import ContentLayout from "@/components/common/layout/content";
import PromoCard from "@/components/promos/card/PromoCard";
import { promoService } from "@/apis";

const Promos = () => {
  const promoData = promoService.getPromoList();

  return (
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
          <div className="grid grid-cols-4 gap-6 px-5">
            {promoData.data.data.map((item, key) => (
              <PromoCard data={item} key={key} />
            ))}
          </div>
        )}
      </ContentLayout>
    </Layout>
  );
};

export default Promos;
