import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import Brands from "../../components/manager-admin/brands/brands";
import ManagerAdminTemplate from "../../templates/manager-admin-template";

const BrandsPage = () => {
  return (
    <ManagerAdminTemplate>
      <Brands />
      <Spacer bg="white" />
    </ManagerAdminTemplate>
  );
};

export default BrandsPage;
