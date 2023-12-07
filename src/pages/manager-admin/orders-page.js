import React from "react";
import Orders from "../../components/manager-admin/orders/orders";

import ManagerAdminTemplate from "../../templates/manager-admin-template";

const AdminOrdersPage = () => {
  return (
    <ManagerAdminTemplate>
      <Orders />
    </ManagerAdminTemplate>
  );
};

export default AdminOrdersPage;
