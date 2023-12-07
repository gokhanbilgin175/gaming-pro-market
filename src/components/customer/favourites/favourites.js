import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import productImage from "../../../assets/img/controller-extra-small-size.png";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./favourites.scss";

const Favourites = () => {
  const [isHovering, setIsHovering] = useState(false);

  const [bgColor, setBgColor] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    setBgColor(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setBgColor(false);
  };

  return (
    <>
      <div className="favourites-container">
        <div
          className={bgColor ? "product-box bg-color-active" : "product-box"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="product-image">
            <img src={productImage} alt="" className="img-fluid" />
            <p>PS5 Bundle with Battlefield 2042</p>
          </div>
          {isHovering && (
            <div className="trash-cart-buttons">
              <span type="button" className="btn-move">
                <FiTrash2 />
              </span>
              <span type="button" className="ms-2 btn-move">
                <AiOutlineShoppingCart />
              </span>
            </div>
          )}
        </div>

        <div className="send-delete-buttons">
          <ButtonGroup className="button-group">
            <Button className="delete-btn">Delete all</Button>
            <Button className="send-btn">
              Send all to<br/>
              the cart
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Favourites;
