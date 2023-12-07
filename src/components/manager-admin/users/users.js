import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router";

import { BsSearch } from "react-icons/bs";
import UsersData from "./UsersData.json";
import DataTable from "react-data-table-component";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./users.scss";

const columns = [
  { selector: (row) => `${row.lastName}, ${row.firstName}` },
  {
    selector: (row) => row.email,
  },
  {
    selector: (row) => row.phone,
  },
];

const Users = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleRowClicked = (row) => {
    navigate(`/admin/users/${row.id}`);
  };

  return (
    <Container>
      <Row className="user-list">
        <Col className="col-12 mb-5 page-title">
          Dashboard <MdKeyboardArrowRight />{" "}
          {pathname === "/admin/users" && "Users"}
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
          </Form>
        </Col>

        <Col className="col-12 users-list-table">
          <DataTable
            columns={columns}
            data={UsersData.filter((val) => {
              if (query === "") {
                return val;
              } else if (
                val.firstName.toLowerCase().includes(query.toLowerCase())
              ) {
                return val;
              }
            })}
            pagination
            onRowClicked={handleRowClicked}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
