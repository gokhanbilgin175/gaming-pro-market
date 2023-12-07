import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import "./register-form.scss";
import ReactInputMask from "react-input-mask-next";
import PasswordInput from "../../common/password-input/password-input";
import { FaRegCalendarAlt, FaRegAddressCard } from "react-icons/fa";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";
import { Link } from "react-router-dom";
import Spacer from "../../common/spacer/spacer";

const RegisterForm = () => {
  const [loading, setloading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    birthDate: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name."),
    lastName: Yup.string().required("Please enter your last name."),
    phoneNumber: Yup.string()
      .required("Please enter your phone number")
      .test(
        "is_includes_",
        "Please enter a valid phone number",
        (val) => val && !val.includes("_")
      ),
    birthDate: Yup.string()
      .required("Please enter a date of birth")
      .max(new Date(), "You can't be born in the future!")
      .test(
        "is_includes_",
        "Please enter a date of birth",
        (val) => val && !val.includes("_")
      ),
    email: Yup.string()
      .email("Plese enter a valid email address")
      .required("Please enter an email address"),
    password: Yup.string()
      .required("Please enter a password")
      .min(8, "Please provide at least 8 characters")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&.]+/, "One special character")
      .matches(/\d+/, "One number"),
    confirmPassword: Yup.string()
      .required("Please re-enter your password")
      .oneOf([Yup.ref("password")], "Password fields dosen't match"),
  });

  const onSubmit = (values) => {
    setloading(true);
    try {
    } catch (err) {}
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="register-form">
      <Spacer height={40} />
      <Card>
        <Card.Body className="card-body">
          <Card.Title>REGISTER</Card.Title>
          <Card.Text className="card-text">
            <Form noValidate onSubmit={formik.handleSubmit} className="p-4">
              <Form.Group className="mb-3 input-group">
                <span className="input-icon">
                  <FaRegAddressCard />
                </span>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  {...formik.getFieldProps("firstName")}
                  isValid={formik.touched.firstName && !formik.errors.firstName}
                  isInvalid={
                    formik.touched.firstName && !!formik.errors.firstName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3 input-group">
                <span className="input-icon">
                  <FaRegAddressCard />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  {...formik.getFieldProps("lastName")}
                  isValid={formik.touched.lastName && !formik.errors.lastName}
                  isInvalid={
                    formik.touched.lastName && !!formik.errors.lastName
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3 input-group">
                <span className="input-icon">
                  <SlPhone />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  as={ReactInputMask}
                  mask="(999) 999-9999"
                  {...formik.getFieldProps("phoneNumber")}
                  isValid={
                    formik.touched.phoneNumber && !formik.errors.phoneNumber
                  }
                  isInvalid={
                    formik.touched.phoneNumber && !!formik.errors.phoneNumber
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3 input-group">
                <span className="input-icon">
                  <FaRegCalendarAlt />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Birth Date"
                  as={ReactInputMask}
                  mask="99-99-99"
                  {...formik.getFieldProps("birthDate")}
                  isValid={formik.touched.birthDate && !formik.errors.birthDate}
                  isInvalid={
                    formik.touched.birthDate && !!formik.errors.birthDate
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.birthDate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3 input-group">
                <span className="input-icon">
                  <MdOutlineEmail />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                  isValid={formik.touched.email && !formik.errors.email}
                  isInvalid={formik.touched.email && !!formik.errors.email}
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
                  isValid={formik.touched.password && !formik.errors.password}
                  isInvalid={
                    formik.touched.password && !!formik.errors.password
                  }
                  error={formik.errors.password}
                />
              </Form.Group>
              <Form.Group className="input-group">
                <span className="input-icon">
                  <MdLockOutline />
                </span>
                <PasswordInput
                  placeholder="Password Confirm"
                  {...formik.getFieldProps("confirmPassword")}
                  isValid={
                    formik.touched.confirmPassword &&
                    !formik.errors.confirmPassword
                  }
                  isInvalid={
                    formik.touched.confirmPassword &&
                    !!formik.errors.confirmPassword
                  }
                  error={formik.errors.confirmPassword}
                />
              </Form.Group>

              <Button
                className="btn-register"
                variant="secondary"
                type="submit"
                disabled={!(formik.dirty && formik.isValid) || loading}
              >
                {loading && <Spinner animation="border" size="sm" />} Register
              </Button>
              <hr></hr>
              <p>
                Do you have already an account?{" "}
                <span>
                  <Link to={`/login`} className="link">
                    Login Now !
                  </Link>
                </span>
              </p>

              <Button className="btn-login" variant="secondary" type="submit">
                Login
              </Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      <Spacer />
    </div>
  );
};

export default RegisterForm;
