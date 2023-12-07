import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import ProductEdit from "../../components/manager-admin/products/product-edit";
import ManagerAdminTemplate from "../../templates/manager-admin-template";

const ProductEditPage = () => {
  return (
    <ManagerAdminTemplate>
      <Spacer height={10} bg="white" />
      <ProductEdit />
      <Spacer bg="white" />
    </ManagerAdminTemplate>
  );
};

export default ProductEditPage;
