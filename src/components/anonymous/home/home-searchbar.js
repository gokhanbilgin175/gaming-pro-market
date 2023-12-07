import React, { useState } from "react";
import { Col, Container, InputGroup, Row, Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./home-searchbar.scss";
import searchbarText from "../../../assets/img/header-searchbar-text.png";

const HomeSearchbar = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleChange = (e) => {
    // get search input value from event
    setSearchInputValue(e.target.value);
  };

  return (
    <div className="home-searchbar">
      <Container>
        <Row>
          <Col lg={7} md={9} sm={11} className="middle-content">
            <div className="message">
              {/* first option H1  */}
              {/* <h1>Your Gaming Store</h1> */}
              {/* second option img */}
              <img
                src={searchbarText}
                alt="message"
                className="img-fluid mb-3"
              />
            </div>
            {console.log(searchInputValue)}

            <div className="searchbar">
              <Form>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="bg-light"
                    placeholder="Search..."
                    type="text"
                    onChange={handleChange}
                    aria-label="Text input"
                  />

                  <Form.Select aria-label="Default select example">
                    <option>All categories</option>
                    <option value="1">PC, Notebook</option>
                    <option value="2">Tablet</option>
                    <option value="3">Mobile Phone</option>
                    <option value="3">Storage Devices</option>
                    <option value="3">Gaming Eyewear</option>
                    <option value="3">Keyboard & Mouse</option>
                    <option value="3">Console</option>
                    <option value="3">Chair</option>
                    <option value="3">Speaker</option>
                  </Form.Select>

                  <Button
                    variant="secondary"
                    id="button-addon2"
                    className="btn-search"
                    disabled={
                      searchInputValue.length < 3 ||
                      searchInputValue.length > 70
                    }
                  >
                    <BsSearch className="fs-4" />
                  </Button>
                </InputGroup>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeSearchbar;
