import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import ProductComments from "./product-comments";
import ProductDesc from "./product-desc";
import "./detail-tabs.scss";

const DetailTabs = () => {
  const [key, setKey] = useState("description");
  return (
    <Container className="detail-tabs">
      <Row>
        <Col>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="description" title="Description">
              <ProductDesc />
            </Tab>
            <Tab eventKey="comments" title="Comments">
              <ProductComments />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailTabs;
