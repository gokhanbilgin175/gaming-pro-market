import React from "react";
import OrderEdit from "../../components/manager-admin/orders/order-edit/order-edit";
import ManagerAdminTemplate from "../../templates/manager-admin-template";

const OrderEditPage = () => {
  return (
    <ManagerAdminTemplate>
      <OrderEdit />
    </ManagerAdminTemplate>
  );
};

export default OrderEditPage;
