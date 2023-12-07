import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import Orders from "../../components/customer/orders/orders";
import CustomerTemplate from "../../templates/customer-template";

const OrdersPage = () => {
  return (
    <CustomerTemplate>
      <Spacer />
      <Orders />
      <Spacer />
    </CustomerTemplate>
  );
};

export default OrdersPage;
