import Layout from "@/components/common/layout";
import React from "react";
import ContentLayout from "@/components/common/layout/content";
import useAxios from "@/hooks/useAxios";
import { PROMOS } from "@/apis/api";
import { GENERAL_CONFIG } from "@/constant/config";
import PromoCard from "@/components/promos/card/PromoCard";

const Promos = () => {
  const promoData = useAxios(PROMOS.GET_ALL_PROMOS, GENERAL_CONFIG);
  return (
    <Layout>
      <ContentLayout
        title="Promos"
        sub="Discounts, bundles, etc"
        button={true}
        buttonText="Promo"
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
