import React, { useState } from "react";
import { Button, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./forgot-password.scss";
import { AiOutlineMail } from "react-icons/ai";

const ForgotPassword = () => {
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
  });

  const onSubmit = async (values) => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <Container className="forgot-password">
      <Row>
        <h3>Forgot Password</h3>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="input-group">
            <span className="input-icon">
              <AiOutlineMail />
            </span>
            <Form.Control
              placeholder="Email"
              type="email"
              {...formik.getFieldProps("email")}
              isInvalid={formik.touched.email && formik.errors.email}
              isValid={formik.touched.email && !formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            className="btn-forgot"
            variant="secondary"
            type="submit"
            // disabled={!(formik.dirty && formik.isValid) || loading}
            onClick={() => navigate("/reset-password")}
          >
            {/* {loading && <Spinner animation="border" size="sm" />} */}
            Send Code
          </Button>

          <hr />
          <div className="forgot-link">
            <p>
              Don't have an account?
              <span>
                <Link to={`/register`} className="link ms-1">
                  Register Now !
                </Link>
              </span>
            </p>
            <p>
              Do you have already an account?
              <span>
                <Link to={`/login`} className="link ms-1">
                  Login Now !
                </Link>
              </span>
            </p>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
