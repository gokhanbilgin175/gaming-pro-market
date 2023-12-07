import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import BrandNew from "../../components/manager-admin/brands/brand-new/brand-new";
import ManagerAdminTemplate from "../../templates/manager-admin-template";

const BrandNewPage = () => {
  return (
    <ManagerAdminTemplate>
      <Spacer height={40} bg="white" />
      <BrandNew />
      <Spacer bg="white" />
    </ManagerAdminTemplate>
  );
};

export default BrandNewPage;
