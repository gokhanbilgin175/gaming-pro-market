import React from 'react'
import ManagerAdminTemplate from "../../templates/manager-admin-template";
import Spacer from "../../components/common/spacer/spacer";
import CategoriesNew from '../../components/manager-admin/categories/categories-new/categories-new';


const CategoriesNewPage = () => {
  return (
    <ManagerAdminTemplate>
      <Spacer height={10} bg="white" />
      <CategoriesNew/>
      <Spacer bg="white" />
    </ManagerAdminTemplate>
  )
}

export default CategoriesNewPage