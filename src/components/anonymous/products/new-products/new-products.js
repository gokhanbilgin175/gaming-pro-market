import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Spacer from "../../../common/spacer/spacer";
import NewProductCard from "./new-product-card";
import "./new-products.scss";

const NewProducts = () => {
  return (
    <div>
      <Spacer />
      <Container className="new-products">
        <Row>
          <Col className="section-top">
            <h3>New products</h3>
            <h4 className="btn fs-5">View All</h4>
          </Col>
        </Row>
        {/* asagidaki kisim end point ile maplenecek */}
        <Row className="section-content">
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <NewProductCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <NewProductCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <NewProductCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <NewProductCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <NewProductCard />
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <NewProductCard />
          </Col>
        </Row>
      </Container>
      <Spacer />
    </div>
  );
};

export default NewProducts;
