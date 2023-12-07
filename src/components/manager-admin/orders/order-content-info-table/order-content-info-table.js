import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import "./order-content-info-table.scss";

const OrderContentInfoTable = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const testDelete = () => {
    window.confirm("Are you sure?");
  };

  return (
    <>
      <Table hover className="order-content-info-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Tax</th>
            <th>Discount</th>
            <th>Sub Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <td>Headphone</td>
            <td>GT-123</td>
            <td>1</td>
            <td>$$675</td>
            <td>15%</td>
            <td>$34</td>
            <td>$600</td>
            <td className="last-td">
              {isHovering && (
                <span className="btn btn-delete" onClick={() => testDelete()}>
                  <BsTrash />
                </span>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default OrderContentInfoTable;
