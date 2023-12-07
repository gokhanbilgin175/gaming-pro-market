import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/manager-admin/common/sidebar";
import SidebarHamburger from "../components/manager-admin/common/sidebar-hamburger";
import { useAppSelector } from "../store/hooks";
import "./manager-admin-template.scss";

const ManagerAdminTemplate = ({ children }) => {
  const { sidebarLeft } = useAppSelector((state) => state.left);

  return (
    <>
      <SidebarHamburger />
      <Container fluid>
        <Row className="bg-white manager-admin-template">
          <Col lg={3} xxl={2} className="p-0 ">
            <Sidebar />
          </Col>
          <Col
            lg={9}
            xxl={10}
            className={sidebarLeft ? "p-5 children-left" : "p-5"}
          >
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ManagerAdminTemplate;
