import React from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import "./order-details.scss";
import { BsArrow90DegLeft } from "react-icons/bs";

const OrderDetails = () => {
  return (
    <Container fluid className="flex-column mt-5">
      <Row>
        <div className="orders-situation d-flex">
          <div>
            {" "}
            <p>
              <strong>Order Code :</strong> 34534634
            </p>
          </div>
          <div>
            {" "}
            <p>
              <strong>Status :</strong> Completed
            </p>
          </div>
          <div>
            {" "}
            <p>
              <strong>Order Date :</strong> 22.10.2022
            </p>
          </div>
          <div>
            {" "}
            <p>
              <strong>Contact Name :</strong> Ali Gel
            </p>
          </div>
          <div>
            {" "}
            <p>
              <strong>Contact Phone :</strong> +13455677888
            </p>
          </div>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>P5 Bundle with BattleField 2042</td>
              <td>5</td>
              <td>$45</td>
            </tr>
            <tr>
              <td>P5 Bundle with BattleField 2042</td>
              <td>12</td>
              <td>$125</td>
            </tr>
            <tr>
              <td>P5 Bundle with BattleField 2042</td>
              <td>15</td>
              <td>$155</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="light" className="btn-order text-bg-light text-end">
          {" "}
          <BsArrow90DegLeft /> <span>Back to the orders</span>
        </Button>
      </Row>
    </Container>
  );
};

export default OrderDetails;
