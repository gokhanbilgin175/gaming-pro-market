import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import DataTable from "react-data-table-component";
import "./categories.scss";

const columns = [
  {
    selector: (row) => row.category,
  },
];

const data = [
  {
    id: 1,
    category: "PC",
  },
];

const Categories = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleChange = (e) => {
    // get search input value from event
    setQuery(e.target.value);
  };

  const handleRowClicked = (row) => {
    navigate(`/admin/categories/${row.id}`);
  };

  return (
    <Container className="categories">
      <Row>
        <Col>
          <div className="keyboard mb-5">
            <p>
              {pathname === "/admin/categories" && " Dashboard > Categories "}
            </p>
          </div>

          <div>
            <Form className="category-search">
              <InputGroup>
                <Form.Control
                  className=" input-search"
                  placeholder="Type something"
                  type="text"
                  onChange={handleChange}
                  aria-label="Text input"
                />

                <Button className="btn-search">
                  <BsSearch className="text-light fs-4" />
                </Button>

                <Button
                  variant="secondary text-light"
                  type="button"
                  className="new-category"
                  onClick={() => navigate(`/admin/categories/new`)}
                >
                  New Category
                </Button>
              </InputGroup>
            </Form>
          </div>
          <div className="categories-show">
            <DataTable
              columns={columns}
              data={data.filter((val) => {
                if (query === "") {
                  return val;
                } else if (
                  val.category.toLowerCase().includes(query.toLowerCase())
                ) {
                  return val;
                }
              })}
              pagination
              onRowClicked={handleRowClicked}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
