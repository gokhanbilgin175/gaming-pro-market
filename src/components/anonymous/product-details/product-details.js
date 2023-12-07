import React from "react";
import Spacer from "../../common/spacer/spacer";
import DetailTabs from "./product-detail-tabs/detail-tabs";
import ProductDetail from "./product-detail/product-detail";
import RelatedProducts from "./related-products/related-products";
import PageHeader from "../common/page-header/page-header";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <PageHeader title="Details" />
      <Spacer height={30} />
      <ProductDetail />
      <Spacer height={5} />
      <DetailTabs />
      <Spacer />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
