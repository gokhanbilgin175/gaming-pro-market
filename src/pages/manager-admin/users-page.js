import React from "react";
import Users from "../../components/manager-admin/users/users";
import ManagerAdminTemplate from "../../templates/manager-admin-template";

const UsersPage = () => {
  return (
    <ManagerAdminTemplate>
      <Users />
    </ManagerAdminTemplate>
  );
};

export default UsersPage;
