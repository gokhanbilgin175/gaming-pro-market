import React from "react";
import OrderDetails from "../../components/customer/order-details/order-details";
import CustomerTemplate from "../../templates/customer-template";

const OrderDetailsPage = () => {
  return (
    <CustomerTemplate>
      <OrderDetails />
    </CustomerTemplate>
  );
};

export default OrderDetailsPage;
