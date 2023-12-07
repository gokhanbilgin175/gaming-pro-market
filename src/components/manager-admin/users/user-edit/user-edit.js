import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router";
import "./user-edit.scss";
import UserUpdateForm from "../user-update/user-update-form";
import UserAllInfo from "../user-all-info/user-all-info";

const UserEdit = () => {
  const { pathname } = useLocation();
  const { userId } = useParams();

  return (
    <Container>
      <Row className="user-edit">
        <Col className="col-12 mb-5 page-title">
          <br />
          Dashboard <MdKeyboardArrowRight />{" "}
          {pathname.startsWith(`/admin/users/${userId}`) && "User / Edit"}
        </Col>
        <Col className="col-12 user-update-form">
          <UserUpdateForm />
        </Col>
        <Col className="col-12 user-all-info">
          <UserAllInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default UserEdit;
