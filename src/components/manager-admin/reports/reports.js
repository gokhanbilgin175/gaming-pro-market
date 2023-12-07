import React from "react";
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiPrinter } from "react-icons/fi";
import "./reports.scss";

const Reports = () => {
  return (
    <Container className="admin-reports">
      <Form>
        <Row>
          <Col className="col-12">
            Dashboard <MdKeyboardArrowRight /> Reports
          </Col>
          <Col className="col-12">
            <Card>
              <div className="admin-reports-all">
                <div className="admin-reports-left">
                  <p>Orders</p>
                  <InputGroup className="mb-3">
                    <Form.Group
                      className="mb-3"
                      controlId="formGroupBeginningDate"
                    >
                      <FloatingLabel label="Beginning date">
                        <Form.Control
                          type="date"
                          placeholder="Beginning date"
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formGroupEndingDate"
                    >
                      <FloatingLabel label="Ending date">
                        <Form.Control type="date" placeholder="Ending date" />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formGroupTypeSelect"
                    >
                      <Form.Select
                        aria-label="Default select example"
                        defaultValue={"type"}
                      >
                        <option disabled value="type">
                          Type
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </InputGroup>
                </div>
                <div className="admin-reports-right">
                  <FiPrinter />
                </div>
              </div>
            </Card>
          </Col>
          <Col className="col-12">
            <Card>
              <div className="admin-reports-all">
                <div className="admin-reports-left">
                  <p>Most Popular Products</p>
                  <InputGroup className="mb-3">
                    <Form.Group
                      className="mb-3"
                      controlId="formGroupBeginningDate"
                    >
                      <Form.Control
                        type="text"
                        placeholder="How many products?"
                      />
                    </Form.Group>
                  </InputGroup>
                </div>
                <div className="admin-reports-right">
                  <FiPrinter />
                </div>
              </div>
            </Card>
          </Col>
          <Col className="col-12">
            <Card>
              <div className="admin-reports-all">
                <div className="admin-reports-left">
                  <p>Stock Alarm</p>
                </div>
                <div className="admin-reports-right">
                  <FiPrinter />
                </div>
              </div>
            </Card>
          </Col>
          <Col className="col-12">
            <Card>
              <div className="admin-reports-all">
                <div className="admin-reports-left">
                  <p>Unordered Products</p>
                </div>
                <div className="admin-reports-right">
                  <FiPrinter />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Reports;
