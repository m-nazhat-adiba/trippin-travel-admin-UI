import { CATEGORIES } from "@/apis/api";
import Category from "@/components/category/card/Category";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import { GENERAL_CONFIG } from "@/constant/config";
import useAxios from "@/hooks/useAxios";
import React from "react";

const Categories = () => {
  const categoryData = useAxios(CATEGORIES.GET_ALL_CATEGORES, GENERAL_CONFIG);
  return (
    <Layout>
      <ContentLayout
        button={true}
        buttonText="Category"
        title="Categories"
        sub="Tags"
      >
        <div className="grid grid-cols-4 gap-6 px-5">
          {categoryData.loading ? (
            <p>Loading...</p>
          ) : categoryData.error ? (
            <p>{categoryData.error}</p>
          ) : (
            categoryData.data.data.map((item, key) => (
              <Category data={item} key={key} />
            ))
          )}
        </div>
      </ContentLayout>
      ;
    </Layout>
  );
};

export default Categories;
