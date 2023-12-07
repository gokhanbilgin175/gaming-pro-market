import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import BrandsEdit from "../../components/manager-admin/brands/brands-edit/brands-edit";
import ManagerAdminTemplate from "../../templates/manager-admin-template";

const BrandEditPage = () => {
  return (
    <ManagerAdminTemplate>
      <Spacer height={10} bg="white" />
      <BrandsEdit />
      <Spacer bg="white" />
    </ManagerAdminTemplate>
  );
};

export default BrandEditPage;
