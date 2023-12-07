import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import "./profile.scss";
import { BsTelephone } from "react-icons/bs";
import { CgBox } from "react-icons/cg";
import { MdDateRange } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import * as Yup from "yup";
import { useFormik } from "formik";
import ReactInputMask from "react-input-mask-next";

const Profile = () => {

  const [loading, setLoading] = useState(false)


  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    date: "",
    email: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your First Name"),
    lastName: Yup.string().required("Please enter your Last Name"),
    phoneNumber: Yup.string().required("Please enter your First Name"),
    date: Yup.string().required("Please enter your First Name"),
    email: Yup.string().email().required("Please enter your email"),
  });

  

  const onSubmit = (values) => {};

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="profile-form">
      <Form className="profile w-50" noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="form-group mb-3">
          <span>
            <CgBox />
          </span>
          <Form.Control
            type="text"
            placeholder="First Name"
            {...formik.getFieldProps("firstName")}
            isValid={formik.touched.firstName && !formik.errors.firstName}
            isInvalid={formik.touched.firstName && !!formik.errors.firstName}
          />
           <Form.Control.Feedback type="invalid">
            {formik.errors.firstName}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form-group mb-3">
          <span>
            <CgBox />
          </span>
          <Form.Control
            type="text"
            placeholder="Last Name"
            {...formik.getFieldProps("lastName")}
            isValid={formik.touched.lastName && !formik.errors.lastName}
            isInvalid={formik.touched.lastName && !!formik.errors.lastName}
          />
           <Form.Control.Feedback type="invalid">
            {formik.errors.lastName}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form-group mb-3">
          <span>
            <BsTelephone />
          </span>
          <Form.Control
            type="text"
            as={ReactInputMask}
            mask="+9 (999) 999-9999"
            placeholder="Phone Number"
            {...formik.getFieldProps("phoneNumber")}
            isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
            isInvalid={
              formik.touched.phoneNumber && !!formik.errors.phoneNumber
            }
          />
           <Form.Control.Feedback type="invalid">
            {formik.errors.phoneNumber}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form-group mb-3">
          <span>
            <MdDateRange />
          </span>
          <Form.Control
            type="text"
            placeholder="Date"
            {...formik.getFieldProps("date")}
            isValid={formik.touched.date && !formik.errors.date}
            isInvalid={formik.touched.date && !!formik.errors.date}
          />
           <Form.Control.Feedback type="invalid">
            {formik.errors.date}
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form-group mb-3">
          <span>
            <AiOutlineMail />
          </span>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...formik.getFieldProps("email")}
            isValid={formik.touched.email && !formik.errors.email}
            isInvalid={formik.touched.email && !!formik.errors.email}
          />
           <Form.Control.Feedback type="invalid">
            {formik.errors.email}
            </Form.Control.Feedback>
        </Form.Group>

        <Button disabled={!(formik.dirty && formik.isValid) || loading} variant="secondary" type="submit">
          {loading && <Spinner border="animation" size="sm" />}Submit
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
