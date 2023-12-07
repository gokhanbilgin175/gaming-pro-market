import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BiSquare } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { RiLeafFill } from "react-icons/ri";
import {
  FaPrint,
  FaLayerGroup,
  FaHandshake,
  FaHandHolding,
  FaPrayingHands,
} from "react-icons/fa";
import "./dashboard.scss";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container className="admin-dashboard">
      <Row className="gy-4 align-items-center">
        <Col sm={6} xl={4}>
          <Card className="admin-card" as={Link} to={"/admin/users"}>
            <div className="admin-all">
              <div className="admin-left">
                <div className="admin-left-top">
                  <BiSquare />
                  <p>Customers</p>
                </div>
                <p className="admin-left-bottom">1231</p>
              </div>
              <div className="admin-right">
                <IoIosPeople />
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={6} xl={4}>
          <Card className="admin-card" as={Link} to={"/admin/brands"}>
            <div className="admin-all">
              <div className="admin-left">
                <div className="admin-left-top">
                  <BiSquare />
                  <p>Brands</p>
                </div>
                <p className="admin-left-bottom">1231</p>
              </div>
              <div className="admin-right">
                <RiLeafFill />
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={6} xl={4} as={Link} to={"/admin/products"}>
          <Card className="admin-card">
            <div className="admin-all">
              <div className="admin-left">
                <div className="admin-left-top">
                  <BiSquare />
                  <p>Products</p>
                </div>
                <p className="admin-left-bottom">1231</p>
              </div>
              <div className="admin-right">
                <FaPrint />
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={6} xl={4}>
          <Card className="admin-card" as={Link} to={"/admin/categories"}>
            <div className="admin-all">
              <div className="admin-left">
                <div className="admin-left-top">
                  <BiSquare />
                  <p>Categories</p>
                </div>
                <p className="admin-left-bottom">1231</p>
              </div>
              <div className="admin-right">
                <FaLayerGroup />
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={6} xl={4} as={Link} to={"/admin/orders"}>
          <Card className="admin-card">
            <div className="admin-all">
              <div className="admin-left">
                <div className="admin-left-top">
                  <BiSquare />
                  <p>Today's Orders</p>
                </div>
                <p className="admin-left-bottom">1231</p>
              </div>
              <div className="admin-right">
                <FaHandshake />
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={6} xl={4} as={Link} to={"/admin/coupons"}>
          <Card className="admin-card">
            <div className="admin-all">
              <div className="admin-left">
                <div className="admin-left-top">
                  <BiSquare />
                  <p>Coupons</p>
                </div>
                <p className="admin-left-bottom">1231</p>
              </div>
              <div className="admin-right">
                <FaHandHolding />
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={6} xl={4} as={Link} to={"/admin/reviews"}>
          <Card className="admin-card">
            <div className="admin-all">
              <div className="admin-left">
                <div className="admin-left-top">
                  <BiSquare />
                  <p>Reviews Not Admited</p>
                </div>
                <p className="admin-left-bottom">1231</p>
              </div>
              <div className="admin-right">
                <FaPrayingHands />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
