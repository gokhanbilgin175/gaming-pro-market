import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import ProductNew from "../../components/manager-admin/products/product-new";
import ManagerAdminTemplate from "../../templates/manager-admin-template";

const ProductNewPage = () => {
  return (
    <ManagerAdminTemplate>
      <Spacer height={10} bg="white" />
      <ProductNew />
      <Spacer bg="white" />
    </ManagerAdminTemplate>
  );
};

export default ProductNewPage;
