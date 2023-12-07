import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./cart-all.scss";

const CartAll = () => {
  return (
    <Link to="/cart" className="cart-all">
      <div className="cart-top">
        <RiShoppingBagLine />
        <p>4 items</p>
      </div>
      <div className="cart-price">
        <p>$52.5</p>
      </div>
    </Link>
  );
};

export default CartAll;
