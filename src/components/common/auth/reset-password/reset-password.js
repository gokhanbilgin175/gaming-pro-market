import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
//  Spinner
import "./reset-password.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import ReactInputMask from "react-input-mask-next";
import { RiLockPasswordLine, RiShieldKeyholeLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../password-input/password-input";

const ResetPassword = () => {
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    password: "",
    confirmPassword: "",
    resetCode: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Please enter a password")
      .min(8, "Please provide at least 8 characters")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&.]+/, "One special character")
      .matches(/\d+/, "One number"),
    confirmPassword: Yup.string()
      .required("Please re-enter your new password")
      .oneOf([Yup.ref("newPassword")], "Password fields doesn't match"),
    resetCode: Yup.string()
      .required("Please enter your reset code")
      .matches(/\d+/, "Four number"),
    // // .test(
    // //   "is_includes_",

    // //   (val) => val && !val.includes("_")
    // ),
  });
  const onSubmit = async (values) => {
    // setLoading(true);
    // try {
    //   // await updatePassword(values);
    //   // toast("Password was updated", "success");
    //   formik.resetForm();
    // } catch (err) {
    //   // toast(err.response.data.message, "error");
    // } finally {
    //   setLoading(false);
    // }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container className="reset-form">
      <Row>
        <h3>Reset Password</h3>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="input-group-first ">
            <span className="input-icon-first">
              <RiShieldKeyholeLine />
            </span>
            <Form.Control
              type="text"
              placeholder="Reset Code"
              as={ReactInputMask}
              mask="9 9 9 9"
              {...formik.getFieldProps("resetCode")}
              isValid={formik.touched.resetCode && !formik.errors.resetCode}
              isInvalid={formik.touched.resetCode && !!formik.errors.resetCode}
              error={formik.errors.resetCode}
            />
          </Form.Group>

          <Form.Group className="input-group">
            <span className="input-icon">
              <RiLockPasswordLine />
            </span>
            <PasswordInput
              placeholder="Password"
              {...formik.getFieldProps("password")}
              isValid={formik.touched.password && !formik.errors.password}
              isInvalid={formik.touched.password && !!formik.errors.password}
              error={formik.errors.password}
            />
          </Form.Group>
          <Form.Group className="input-group">
            <span className="input-icon">
              <RiLockPasswordLine />
            </span>
            <PasswordInput
              placeholder="Password Confirm"
              {...formik.getFieldProps("confirmPassword")}
              isValid={
                formik.touched.confirmPassword && !formik.errors.confirmPassword
              }
              isInvalid={
                formik.touched.confirmPassword &&
                !!formik.errors.confirmPassword
              }
              error={formik.errors.confirmPassword}
            />
          </Form.Group>

          {/* <Form.Group className="input-group">
            <span className="input-icon">
              <RiLockPasswordLine />
            </span>
            <Form.Control
              placeholder="Password"
              {...formik.getFieldProps("password")}
              isValid={formik.touched.password && !formik.errors.password}
              isInvalid={formik.touched.password && !!formik.errors.password}
              error={formik.errors.password}
            />
          </Form.Group>
          <Form.Group className="input-group">
            <span className="input-icon">
              <RiLockPasswordLine />
            </span>
            <Form.Control
              placeholder="Password Confirm"
              {...formik.getFieldProps("confirmPassword")}
              isValid={
                formik.touched.confirmPassword && !formik.errors.confirmPassword
              }
              isInvalid={
                formik.touched.confirmPassword &&
                !!formik.errors.confirmPassword
              }
              error={formik.errors.confirmPassword}
            />
          </Form.Group> */}
          <Button
            className="btn-reset"
            variant="secondary"
            type="submit"
            // disabled={!(formik.dirty && formik.isValid) || loading}
            onClick={() => navigate("/reset-password")}
          >
            {/* {loading && <Spinner animation="border" size="sm" />} */}
            Reset Password
          </Button>

          <hr />
          <div className="reset-link my-3">
            <p>
              Don't have an account?
              <span>
                <Link to={`/register`} className="link ms-1">
                  Register Now!
                </Link>
              </span>
            </p>
            <p>
              Do you have already an account?
              <span>
                <Link to={`/login`} className="link ms-1">
                  Login Now!
                </Link>
              </span>
            </p>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default ResetPassword;
