import React from "react";

import { categoryService } from "@/apis";
import Category from "@/components/category/card/Category";
import Layout from "@/components/common/layout";
import ContentLayout from "@/components/common/layout/content";
import ScreenLock from "@/components/common/screen";

const Categories = () => {
  const categoryData = categoryService.GetCategoryList();

  return (
    <>
      <ScreenLock />
      <Layout>
        <ContentLayout
          button={true}
          buttonText="Category"
          title="Categories"
          sub="Tags"
          target="/categories/add"
        >
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-6 px-5">
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
    </>
  );
};

export default Categories;
