import React from "react";
import { Link } from "react-router-dom";
import productEditImg from "../../../assets/img/controller-small-size.png";
import "./product-img-edit.scss";
import { BsPlusCircleFill } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";

const ProductImgEdit = () => {
  return (
    <div>
      <div>
        <BsPlusCircleFill className="img-plus-icon" />
      </div>
      <div className="product-edit-img">
        <div className="edit-img">
          <HiMinusCircle className="img-minus-icon" />
          <img
            width="175px"
            src={productEditImg}
            alt={"productEditImg"}
            className="img-fluid"
          />
        </div>
        <div className="edit-img">
          <HiMinusCircle className="img-minus-icon" />
          <img
            width="175px"
            src={productEditImg}
            alt={"productEditImg"}
            className="img-fluid"
          />
        </div>
        <div className="edit-img">
          <HiMinusCircle className="img-minus-icon" />
          <img
            width="175px"
            src={productEditImg}
            alt={"productEditImg"}
            className="img-fluid"
          />
        </div>
        <div className="edit-img">
          <HiMinusCircle className="img-minus-icon" />
          <img
            width="175px"
            src={productEditImg}
            alt={"productEditImg"}
            className="img-fluid"
          />
        </div>
        <div className="edit-img">
          <HiMinusCircle className="img-minus-icon" />
          <img
            width="175px"
            src={productEditImg}
            alt={"productEditImg"}
            className="img-fluid"
          />
        </div>
        <div className="edit-img">
          <HiMinusCircle className="img-minus-icon" />
          <img
            width="175px"
            src={productEditImg}
            alt={"productEditImg"}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImgEdit;
