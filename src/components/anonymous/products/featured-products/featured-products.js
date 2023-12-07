import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Spacer from "../../../common/spacer/spacer";
import FeaturedProductCard from "./featured-product-card";
import "./featured-products.scss";

const FeaturedProducts = () => {
  return (
    <div>
      <Spacer />
      <Container className="featured-products">
        <Row>
          <Col className="section-top">
            <h3>Featured products</h3>
            <h4 className="btn fs-5">View All</h4>
          </Col>
        </Row>
        {/* asagidaki kisim end point ile maplenecek */}
        <Row className="section-content">
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <FeaturedProductCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <FeaturedProductCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <FeaturedProductCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <FeaturedProductCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <FeaturedProductCard />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <FeaturedProductCard />
          </Col>
        </Row>
      </Container>
      <Spacer />
    </div>
  );
};

export default FeaturedProducts;
