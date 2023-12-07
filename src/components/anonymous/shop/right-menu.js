import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./menu.scss";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import NewProductCard from "../products/new-products/new-product-card";

const RightMenu = () => {
  return (
    <div className="right-menu">
      <Row>
        <Col md={9}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col md={3}>
          <ButtonGroup className="w-100 ">
            <DropdownButton as={ButtonGroup} title="Sıralama" variant="light">
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <Button variant="light">
              <TfiLayoutGrid2 />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="product-card">
        <Col sm={6} md={4}>
          <NewProductCard />
        </Col>
        <Col sm={6} md={4}>
          <NewProductCard />
        </Col>
        <Col sm={6} lg={4}>
          <NewProductCard />
        </Col>
        <Col sm={6} lg={4}>
          <NewProductCard />
        </Col>
        <Col sm={6} lg={4}>
          <NewProductCard />
        </Col>
        <Col sm={6} lg={4}>
          <NewProductCard />
        </Col>
        <Col sm={6} lg={4}>
          <NewProductCard />
        </Col>
        <Col sm={6} lg={4}>
          <NewProductCard />
        </Col>
        <Col sm={6} lg={4}>
          <NewProductCard />
        </Col>
        <Col sm={6} lg={4}>
          <NewProductCard />
        </Col>
        <Col sm={6} lg={4}>
          <NewProductCard />
        </Col>
        <Col sm={6} lg={4}>
          <NewProductCard />
        </Col>
      </Row>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default RightMenu;
