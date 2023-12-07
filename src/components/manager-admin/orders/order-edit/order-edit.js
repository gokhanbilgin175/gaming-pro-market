import React from "react";
import { Col, Row } from "react-bootstrap";
import OrderContentInfoTable from "../order-content-info-table/order-content-info-table";
import OrderMainInfo from "../order-main-info/order-main-info";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router";

import "./order-edit.scss";

const OrderEdit = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Row>
      <Col className="col-12 mb-5 page-title">
        Dashboard <MdKeyboardArrowRight />{" "}
        {pathname.startsWith(`/admin/orders/`) && "Order / Detail"}
      </Col>

      <div className="order-details-container">
        <Col className="order-main-info col-3">
          <OrderMainInfo />
        </Col>
        <Col className="order-content-info-table col-9">
          <OrderContentInfoTable />
        </Col>
      </div>
    </Row>
  );
};

export default OrderEdit;
