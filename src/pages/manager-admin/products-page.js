import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import Products from "../../components/manager-admin/products/products";

import ManagerAdminTemplate from "../../templates/manager-admin-template";

const ProductsPage = () => {
  return (
    <ManagerAdminTemplate>
      <Spacer height={10} bg="white" />
      <Products />
      <Spacer bg="white" />
    </ManagerAdminTemplate>
  );
};

export default ProductsPage;
