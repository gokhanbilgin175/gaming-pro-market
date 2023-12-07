import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import UserAllAddresses from "./user-all-addresses/user-all-addresses";
import UserAllCoupons from "./user-all-coupons/user-all-coupons";

import "./user-all-info.scss";
import UserAllOrders from "./user-all-orders/user-all-orders";
import UserAllReviews from "./user-all-reviews/user-all-reviews";

const UserAllInfo = () => {
  const [key, setKey] = useState("description");

  return (
    <div className="user-all-info">
      <Tabs defaultActiveKey="orders">
        <Tab eventKey="orders" title="Orders">
          <UserAllOrders />
        </Tab>

        <Tab eventKey="reviews" title="Reviews">
          <UserAllReviews />
        </Tab>

        <Tab eventKey="addresses" title="Addresses">
          <UserAllAddresses />
        </Tab>

        <Tab eventKey="coupons" title="Coupons">
          <UserAllCoupons />
        </Tab>
      </Tabs>
    </div>
  );
};

export default UserAllInfo;
