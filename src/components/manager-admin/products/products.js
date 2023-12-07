import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
// import products1 from "../../../assets/img/products/kotaku.png";
import "./products.scss";
import dataProducts from "./dataProducts.json";
import DataTable from "react-data-table-component";
import { GiPineTree } from "react-icons/gi";
import { MdMovie } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineBarcode } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

// import axios from "axios";

// const columns = [
//   {
//     selector: (row) => (
//       <img height="70px" width="75px" alt={row.name} src={row.avatar} />
//     ),
//   },
//   {
//     selector: (row) => row.name,
//   },
//   {
//     selector: (row) => row.price,
//   },
// ];

const columns = [
  {
    selector: (row) => (
      <img
        height="75px"
        width="75px"
        alt={row.name}
        src={row.avatar}
        classNameName="img-fluid"
      />
    ),
  },
  {
    selector: (row) => (
      <div className="main">
        <p>PS5 Bundle with Battlefield 2042</p>
        <Container className="container products-icons">
          <div className="products-row">
            <div className="first-group-icons">
              <div className="icons">
                <GiPineTree size={15} />
                <span>Console</span>
              </div>
              <div className="icons">
                <MdMovie size={15} />
                <span>KM-1239</span>
              </div>
              <div className="icons">
                <HiAcademicCap size={15} />
                <span>45</span>
              </div>
            </div>
            <div className="second-group-icons">
              <div className="icons">
                <AiOutlineBarcode size={15} />
                <span>Sony</span>
              </div>
              <div className="icons">
                <TiTick size={15} />
                <span>Published</span>
              </div>
              <div className="icons">
                <AiOutlineHeart size={15} />
                <span>254</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    ),
  },
  {
    selector: (row) => row.price,
  },
];

const Products = () => {
  const [query, setQuery] = useState("");
  // const [products, setproducts] = useState([]);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  // const loadData = async (page) => {
  //   try {
  //     // //   const resp = await getproducts(page);
  //     //   const resp = await axios.get(`${API_URL}/products?q=${query}`);
  //     //     const { content, totalPages, pageable } = resp.data;
  //     //   setproducts(content);
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
    navigate(`/admin/products/${row.id}`);
  };

  return (
    <Container className="brands-admin ">
      <Row>
        <Col>
          <div className=" admin-header mb-5">
            <p>{pathname === "/admin/products" && " Dashboard > Products "}</p>
          </div>

          <div className="brands-search">
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  className="bg-light input-search"
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
                  onClick={() => navigate(`/admin/products/new`)}
                >
                  New Products
                </Button>
              </InputGroup>
            </Form>
          </div>
          <Row>
            <Col lg={4}>
              <Form.Select
                aria-label="Default select example"
                className="select-products"
              >
                <option className="select-products">Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col lg={4}>
              <Form.Select
                aria-label="Default select example"
                className="select-products"
              >
                <option>Brands</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col lg={4}>
              <Form.Select
                aria-label="Default select example"
                className="select-products"
              >
                <option>Price</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <div className="admin-product">
            <DataTable
              columns={columns}
              data={dataProducts.filter((val) => {
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

export default Products;
