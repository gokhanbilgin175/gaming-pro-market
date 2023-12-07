import React from 'react'
import CategoriesEdit from '../../components/manager-admin/categories/categories-edit/categories-edit';
import ManagerAdminTemplate from "../../templates/manager-admin-template";
import Spacer from "../../components/common/spacer/spacer";


const CategoriesEditPage = () => {
  return (
    <ManagerAdminTemplate>
      <Spacer height={10} bg="white" />
      <CategoriesEdit/>
      <Spacer bg="white" />
    </ManagerAdminTemplate>
  )
}

export default CategoriesEditPage