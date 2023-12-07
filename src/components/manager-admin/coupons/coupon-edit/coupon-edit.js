import { useFormik } from "formik";
import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import ReactInputMask from "react-input-mask-next";
import * as Yup from "yup";
import "./coupon-edit.scss";
import { FaEquals } from "react-icons/fa";
import { BsPercent } from "react-icons/bs";
import { BsSquare } from "react-icons/bs";
import { useLocation, useParams } from "react-router-dom";

const CouponEdit = () => {
  const { pathname } = useLocation();
  const { couponId } = useParams();

  const initialValues = {
    code: "",
    amount: "",
    type: "",
    life: "",
    toggle: false,
  };

  const validationSchema = Yup.object({
    code: Yup.string().required("please enter your product code"),
    amount: Yup.string().required("please enter your product amount"),
    type: Yup.string().required("please enter your product type"),
    live: Yup.string().required("please enter your product live"),
    toggle: Yup.string().required("please enter your product toggle"),
  });

  const onSubmit = (values) => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <Form className="form" noValidate onSubmit={formik.handleSubmit}>
        <div className="path-name">
          {pathname === `/admin/coupons/${couponId}` &&
            `Dashboard > Coupons > Edit `}
        </div>
        <Row>
          <Col sm={8}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Code</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("code")}
                isValid={formik.touched.code && !formik.errors.code}
                isInvalid={formik.touched.code && !!formik.errors.code}
                as={ReactInputMask}
                mask="****-****-****"
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.code}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                {...formik.getFieldProps("amount")}
                isValid={formik.touched.amount && !formik.errors.amount}
                isInvalid={formik.touched.amount && !!formik.errors.amount}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.amount}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <Form.Label>Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...formik.getFieldProps("type")}
            >
              <option>Eşittir</option>
              <option value="1">Yüzde</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {formik.errors.type}
            </Form.Control.Feedback>

            <Form.Control.Feedback type="invalid">
              {formik.errors.type}
            </Form.Control.Feedback>
          </Col>

          <Col sm={4}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Life</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  {...formik.getFieldProps("life")}
                  isValid={formik.touched.life && !formik.errors.life}
                  isInvalid={formik.touched.life && !!formik.errors.life}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.life}
                </Form.Control.Feedback>
                <Button variant="outline-secondary">
                  <BsSquare /> Infinity
                </Button>
              </InputGroup>
            </Form.Group>
          </Col>

          <Col sm={4} className="check">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Active"
              active="false"
            />
          </Col>
        </Row>
        <div className="button-group">
          <Button as="input" type="reset" value="Delete" variant="secondary" />
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default CouponEdit;
