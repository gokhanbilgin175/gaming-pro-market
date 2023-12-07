import { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  AiFillStar,
  AiOutlineStar,
  AiFillHeart,
  //   AiOutlineHeart,
  AiOutlinePlusCircle,
} from "react-icons/ai";

import { FaLocationArrow } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation, Thumbs } from "swiper";
import { Link } from "react-router-dom";
import { Img } from "./product-images";

import "./product-detail.scss";

const ProductDetail = () => {
  const [activeImg, setActiveImg] = useState(Img[0]);
  const clickHandler = (myIndex) => {
    setActiveImg(Img[myIndex]);
  };
  return (
    <Container className=" product-detail">
      <Row>
        <Col md={6}>
          <Card className="active-image">
            <img
              src={require(`../../../../assets/img/${activeImg.imgUrl}`)}
              alt="product-images"
              className="img-fluid"
            />
          </Card>
          <div className="product-images-sliders">
            <Card className="product-image-slider">
              <img
                src={require(`../../../../assets/img/${activeImg.imgUrl}`)}
                alt="product-images"
                className="img-fluid"
                key={Img[0].id}
                onClick={() => clickHandler(0)}
              />
            </Card>
            <Card className="product-image-slider">
              <img
                src={require(`../../../../assets/img/${activeImg.imgUrl}`)}
                alt="product-images"
                className="img-fluid"
                key={Img[1].id}
                onClick={() => clickHandler(1)}
              />
            </Card>
            <Card className="product-image-slider">
              <img
                src={require(`../../../../assets/img/${activeImg.imgUrl}`)}
                alt="product-images"
                className="img-fluid"
                key={Img[2].id}
                onClick={() => clickHandler(2)}
              />
            </Card>
            <Card className="product-image-slider">
              <img
                src={require(`../../../../assets/img/${activeImg.imgUrl}`)}
                alt="product-images"
                className="img-fluid"
                key={Img[3].id}
                onClick={() => clickHandler(3)}
              />
            </Card>
          </div>
        </Col>
        <Col md={6} className="right">
          <h5>PS5 Bundle with Battlefield 2042</h5>
          <div className="star">
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>
            <span> &nbsp;4 &nbsp;|&nbsp; 2 comments</span>
            {/* /* Link vereceğim */}
            <p>
              <del>$54.5</del>
            </p>
            <div className="discount">
              <p>$34.5</p>
              <span>
                <AiFillHeart />
                {/* <AiOutlineHeart /> */}
              </span>
            </div>
            <Button as={Link} to={`/shop-card`} className="add-cart">
              <AiOutlinePlusCircle /> &nbsp; Add to cart
            </Button>
            <div className="end">
              <p>Shipping</p>
              <hr />
              <p>
                <FaLocationArrow /> &nbsp; Fedex- Free to ship
              </p>
              <p>It will be sent within 2 days at the least</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
