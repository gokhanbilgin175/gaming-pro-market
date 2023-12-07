import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/anonymous/common/footer/footer";
import Header from "../components/anonymous/common/header/header";
import PageHeader from "../components/anonymous/common/page-header/page-header";
import CartAll from "../components/customer/cart/cart-all";
import Sidebar from "../components/customer/common/sidebar";

const CustomerTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <PageHeader title="Profile" />
      <CartAll />
      <Container>
        <Row>
          <Col lg={3}>
            <Sidebar />
          </Col>
          <Col lg={9}>{children}</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CustomerTemplate;
