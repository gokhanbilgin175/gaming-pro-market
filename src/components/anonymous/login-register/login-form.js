import React, { useState } from "react";
import { useFormik } from "formik";
import { Form, Button, Spinner, Card, Nav, Navbar } from "react-bootstrap";
import * as Yup from "yup";
import PasswordInput from "../../common/password-input/password-input";
import "./login-form.scss";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Spacer from "../../common/spacer/spacer";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  const onSubmit = async (values) => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div className="login-form">
      <Spacer height={40} />
      <Card>
        <Card.Body className="card-body">
          <Card.Title>LOGIN</Card.Title>
          <Card.Text className="card-text">
            <Form noValidate onSubmit={formik.handleSubmit} className="p-4">
              <Form.Group className="mb-3 input-group">
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
              <Form.Group className="input-group">
                <span className="input-icon">
                  <MdLockOutline />
                </span>
                <PasswordInput
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  isInvalid={formik.touched.password && formik.errors.password}
                  isValid={formik.touched.password && !formik.errors.password}
                  error={formik.errors.password}
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <div>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label ms-2 "
                    for="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
                <span>
                  <Link to={`/register`} className="link">
                    Forgot password?
                  </Link>
                </span>
              </div>

              <Button
                className="btn-login"
                variant="primary"
                type="submit"
                disabled={!(formik.dirty && formik.isValid) || loading}
              >
                {loading && <Spinner animation="border" size="sm" />} Login
              </Button>

              <hr></hr>

              <p>
                Don't have an account?
                <span>
                  <Link to={`/register`} className="link ms-1">
                    Register Now!
                  </Link>
                </span>
              </p>
              <Button
                className="btn-register "
                variant="secondary"
                type="submit"
              >
                Register
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      <Spacer />
    </div>
  );
};

export default LoginForm;
