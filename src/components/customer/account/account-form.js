import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";

import * as Yup from "yup";

import { AiOutlineMail } from "react-icons/ai";
import { useFormik } from "formik";
import { RiLockPasswordLine } from "react-icons/ri";
import "./account-form.scss"

const AccountForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string()
      .required("Please enter your password")
      .min(8, "Must be at least ( characters")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number"),
    confirmPassword: Yup.string()     
      .required("Please enter your email")
      .oneOf([Yup.ref("password")], "Password field doesn't match"),
  });

  const onSubmit = (values) => {
    setLoading(true)
    try {
      
    } catch (err) {
      
    }
    finally{
      setLoading(false)
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="account-form">
    <Form className="account w-50"  noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="form-group mb-3" controlId="formBasicEmail">
        <span>
    <AiOutlineMail/>
        </span>
        <Form.Control type="email" placeholder="Enter email"
        {...formik.getFieldProps("email")}
          isValid={formik.touched.email && !formik.errors.email}
        isInvalid={formik.touched.email && !!formik.errors.email}
      
        />
          <Form.Control.Feedback type="invalid">
           {formik.errors.email}
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="form-group mb-3" >
      <span>
    <RiLockPasswordLine/>
        </span>
        <Form.Control type="password" placeholder="Password"
         {...formik.getFieldProps("password")}
         isValid={formik.touched.password && !formik.errors.password}
       isInvalid={formik.touched.password && !!formik.errors.password} />
        <Form.Control.Feedback type="invalid">
           {formik.errors.password}
          </Form.Control.Feedback>
      </Form.Group>



      <Form.Group className="form-group mb-3" >
      <span>
    <RiLockPasswordLine/>
        </span>
        <Form.Control type="password" placeholder="Confirm Password"
          {...formik.getFieldProps("confirmPassword")}
          isValid={formik.touched.confirmPassword && !formik.errors.confirmPassword}
        isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword} />
        <Form.Control.Feedback type="invalid">
           {formik.errors.confirmPassword}
          </Form.Control.Feedback> 
      </Form.Group>

      <Button disabled={!(formik.dirty && formik.isValid) || loading} variant="secondary" type="submit">
       {loading && <Spinner border="animation" size="sm" />} Submit
      </Button>
    </Form>
    </div>
  );
};

export default AccountForm;
