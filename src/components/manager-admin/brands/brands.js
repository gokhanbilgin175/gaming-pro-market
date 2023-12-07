import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
// import brands1 from "../../../assets/img/brands/kotaku.png";
import "./brands.scss";
import dataBrands from "./dataBrands.json";
import DataTable from "react-data-table-component";

// import axios from "axios";

const columns = [
  {
    selector: (row) => (
      <img
        height="75px"
        width="75px"
        alt={row.name}
        src={row.avatar}
        className="img-fluid"
      />
    ),
  },
  {
    selector: (row) => row.name,
  },
];

const Brands = () => {
  const [query, setQuery] = useState("");
  // const [brands, setBrands] = useState([]);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  // const loadData = async (page) => {
  //   try {
  //     // //   const resp = await getBrands(page);
  //     //   const resp = await axios.get(`${API_URL}/brands?q=${query}`);
  //     //     const { content, totalPages, pageable } = resp.data;
  //     //   setBrands(content);
  //     //   setPaging({ totalPages, pageNumber: pageable.pageNumber });
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     //   setLoading(false);
  //   }
  // };
  useEffect(() => {}, []);

  const handleChange = (e) => {
    // get search input value from event
    setQuery(e.target.value);
  };
  const handleRowClicked = (row) => {
    navigate(`/admin/brands/${row.id}`);
  };

  return (
    <Container className="brands-admin ">
      <Row>
        <Col>
          <div className=" admin-header mb-5">
            <p>{pathname === "/admin/brands" && " Dashboard > Brands "}</p>
          </div>

          <div className="brands-search">
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  className="bg-light input-search"
                  placeholder="Type something"
                  type="text"
                  onChange={handleChange}
                  aria-label="Text input"
                />

                <Button className="new-search">
                  <BsSearch className="text-light fs-4" />
                </Button>
                <Button
                  variant="secondary text-light"
                  type="button"
                  className="new-brand"
                  onClick={() => navigate(`/admin/brands/new`)}
                >
                  New Brand
                </Button>
              </InputGroup>
            </Form>
          </div>
          <div className="brands-show">
            <DataTable
              columns={columns}
              data={dataBrands.filter((val) => {
                if (query === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(query.toLowerCase())
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

export default Brands;
