import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./order-main-info.scss";

const OrderMainInfo = () => {
  return (
    <div className="order-main-info-container">
      <div className="status mb-5">
        {/* ****** Status ******** */}
        <Form.Select aria-label="Default select example" className="mb-3">
          <option value="1">Pending</option>
          <option value="2">Cancelled</option>
          <option value="3">Completed</option>
        </Form.Select>
        <Button variant="secondary" className="btn-status">
          Set Status
        </Button>
      </div>
      <div className="order-code mb-4">
        <p>
          <strong>Order Code :</strong> XA1234
        </p>
      </div>
      <div className="order-date mb-4">
        <p>
          <strong>Order Date :</strong> Jun 12, 2020
        </p>
      </div>
      <div className="customer mb-4">
        <p>
          <strong>Customer :</strong> Ali GEL
        </p>
      </div>
      <hr />
      <div className="contact-name gap-div">
        <strong>Contact Name</strong>
        <p> Ali Gel</p>
      </div>
      <div className="phone gap-div">
        <strong>Phone</strong> <p>+1 455 544-4546</p>
      </div>
      <hr />
      <div className="subtotal gap-div mb-1">
        <strong>Subtotal</strong> <p className="pe-4">$45</p>
      </div>
      <div className="discount gap-div mb-1">
        <strong>Discount</strong> <p className="pe-4">$5</p>
      </div>
      <div className="tax gap-div mb-1">
        <strong>Tax</strong> <p className="pe-4">$3</p>
      </div>

      <div className="shipping-cost gap-div mb-1">
        <strong>Shipping Cost</strong> <p className="pe-4">$3</p>
      </div>
      <div className="grand-total gap-div">
        <strong>Grand Total</strong> <p className="pe-4">$46</p>
      </div>
      <hr />

      <div className="shipping-details mb-4">
        <strong>Shipping Details</strong>
        <p className="order-text">
          Lorem ipsum dolor sit, t quae dolores, ipsam nihil a voluptatum quia
          praesentium iusto omnis atque ipsum totam
        </p>
      </div>
      <div className="shipping-address mb-4">
        <strong>Shipping Address</strong>
        <p className="order-text">3224 Edenwold Heights Nw, Calgary</p>
      </div>
      <div className="invoice-address">
        <strong>Invoice Address</strong>
        <p className="order-text">3224 Edenwold Heights Nw, Calgary</p>
      </div>
    </div>
  );
};

export default OrderMainInfo;
