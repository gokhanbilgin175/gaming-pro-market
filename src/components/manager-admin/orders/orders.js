import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router";
import { BsSearch } from "react-icons/bs";
import DataTable from "react-data-table-component";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./orders.scss";

const columns = [
  {
    name: "Contact Name",
    selector: (row) => row.fullName,
  },
  {
    name: "Date",
    selector: (row) => row.date,
  },
  {
    name: "Code",
    selector: (row) => row.code,
  },
  {
    name: "Items",
    selector: (row) => row.items,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Total",
    selector: (row) => row.total,
  },
];

const data = [
  {
    id: 1,
    fullName: "Aaron, Hank",
    date: "12/05/2022",
    code: "ABC-123",
    items: 2,
    status: "Pending",
    total: "$55",
  },
  {
    id: 2,
    fullName: "Tomas, Hank",
    date: "12/05/2022",
    code: "ABC-123",
    items: 2,
    status: "Pending",
    total: "$55",
  },
];

const Orders = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleRowClicked = (row) => {
    navigate(`/admin/orders/:orderId`);
  };

  return (
    <Container>
      <Row className="orders-list">
        <Col className="col-12 mb-5 page-title">
          Dashboard <MdKeyboardArrowRight />{" "}
          {pathname === "/admin/orders" && "Orders"}
        </Col>
        <Col className="col-12 searchbar">
          <Form>
            <InputGroup className="mb-3">
              <Form.Control
                className="searchbar-input"
                placeholder="Search..."
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Text input"
              />

              <Button
                variant="primary"
                id="button-addon2"
                className="btn-search"
              >
                <BsSearch className="fs-4" />
              </Button>
            </InputGroup>

            <div className="second-row">
              {/* ****** Beginning Date ******** */}
              <InputGroup className="date-input">
                <InputGroup.Text>Beginning Date</InputGroup.Text>
                <Form.Control
                  type="date"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>

              {/* ****** Ending Date ******** */}
              <InputGroup className="date-input">
                <InputGroup.Text>Ending Date</InputGroup.Text>
                <Form.Control
                  type="date"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>

              {/* ****** Status ******** */}
              <InputGroup className="status">
                <InputGroup.Text>Status</InputGroup.Text>
                <Form.Select aria-label="Default select example">
                  <option></option>
                  <option value="1">Pending</option>
                  <option value="2">Cancelled</option>
                  <option value="3">Completed</option>
                </Form.Select>
              </InputGroup>
            </div>
          </Form>
        </Col>

        <Col className="col-12 orders-list-table">
          <DataTable
            columns={columns}
            data={data}
            pagination
            onRowClicked={handleRowClicked}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Orders;
