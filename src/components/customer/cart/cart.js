import React, { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import Spacer from "../../common/spacer/spacer";
import img from "../../../assets/img/controller-extra-small-size.png";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import "./cart.scss";

const Cart = () => {
  const [count, setCount] = useState(Number(0));

  return (
    <>
      <Spacer />
      <Card className="cart">
        <Card.Body className="cart-body">
          <Table hover className="cart-table">
            <thead>
              <tr>
                <td>
                  <p>Product</p>
                </td>
                <td>
                  <p>Amount</p>
                </td>
                <td>
                  <p>Sub Total</p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={img} alt="" className="img-fluid" /> PS5 Bundle with
                  Battlefield 2042
                </td>
                <td>
                  <HiOutlineMinusCircle
                    onClick={() =>
                      setCount((prev) => (count <= 0 ? 0 : prev - 1))
                    }
                  />
                  {count}
                  <HiOutlinePlusCircle
                    onClick={() => setCount((prev) => prev + 1)}
                  />
                </td>
                <td>
                  <p>$23.50</p>
                </td>
                <td>
                  <FaRegTimesCircle />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={img} alt="" className="img-fluid" /> PS5 Bundle with
                  Battlefield 2042
                </td>
                <td>
                  <HiOutlineMinusCircle
                    onClick={() =>
                      setCount((prev) => (count <= 0 ? 0 : prev - 1))
                    }
                  />
                  {count}
                  <HiOutlinePlusCircle
                    onClick={() => setCount((prev) => prev + 1)}
                  />
                </td>
                <td>
                  <p>$23.50</p>
                </td>
                <td>
                  <FaRegTimesCircle />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={img} alt="" className="img-fluid" /> PS5 Bundle with
                  Battlefield 2042
                </td>
                <td>
                  <HiOutlineMinusCircle
                    onClick={() =>
                      setCount((prev) => (count <= 0 ? 0 : prev - 1))
                    }
                  />
                  {count}
                  <HiOutlinePlusCircle
                    onClick={() => setCount((prev) => prev + 1)}
                  />
                </td>
                <td>
                  <p>$23.50</p>
                </td>
                <td>
                  <FaRegTimesCircle />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <p>Sub Total</p>
                  <p>3 items</p>
                </td>
                <td>
                  <p>$70.50</p>
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td colSpan={2}>
                  <div className="btn-checkout">
                    <Button variant="secondary">CHECKOUT</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Spacer />
    </>
  );
};

export default Cart;
