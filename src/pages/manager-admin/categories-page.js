import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import Categories from "../../components/manager-admin/categories/categories";
import ManagerAdminTemplate from "../../templates/manager-admin-template";

const CategoriesPage = () => {
  return (
    <ManagerAdminTemplate>
      <Categories />
      <Spacer bg="white" />
    </ManagerAdminTemplate>
  );
};

export default CategoriesPage;
