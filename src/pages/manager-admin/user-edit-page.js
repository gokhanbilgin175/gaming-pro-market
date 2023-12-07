import React from "react";
import UserEdit from "../../components/manager-admin/users/user-edit/user-edit";
import ManagerAdminTemplate from "../../templates/manager-admin-template";

const UserEditPage = () => {
  return (
    <ManagerAdminTemplate>
      <UserEdit />
    </ManagerAdminTemplate>
  );
};

export default UserEditPage;
