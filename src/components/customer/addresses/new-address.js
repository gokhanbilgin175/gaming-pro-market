import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsTrash, BsPencil, BsCheck2 } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
// import { toast } from "../../../helpers/functions/swal";
import "./new-address.scss";

const NewAddress = () => {
  // loading
  const [loading, setLoading] = useState(false);
  // add/remove d-none
  const [display, setDisplay] = useState("d-none");

  const btnCancel = () => {
    formik.resetForm();
    setDisplay("d-none");
  };

  const initialValues = {
    addressTitle: "",
    address: "",
    city: "",
    province: "",
    country: "",
  };

  const validationSchema = Yup.object({
    addressTitle: Yup.string()
      .min(2, "Please provide at least 2 characters")
      .max(70, "Please provide maximum 70 characters")
      .required("Please enter address an address title"),
    address: Yup.string()
      .min(2, "Please provide at least 2 characters")
      .max(70, "Please provide maximum 70 characters")
      .required("Please enter your address"),
    city: Yup.string()
      .min(2, "Please provide at least 2 characters")
      .max(70, "Please provide maximum 70 characters")
      .required("Please enter your city"),
    province: Yup.string()
      .min(2, "Please provide at least 2 characters")
      .max(70, "Please provide maximum 70 characters")
      .required("Please enter your province"),
    country: Yup.string()
      .min(2, "Please provide at least 2 characters")
      .max(70, "Please provide maximum 70 characters")
      .required("Please enter your country"),
  });

  // // ONSUBMIT
  // const onSubmit = async (values) => {
  //   setLoading(true);
  //   try {
  //     await register(values);
  //     toast("The address added", "success");
  //     formik.resetForm();
  //     // setKey("login");
  //   } catch (err) {
  //     toast(err.response.data.message, "error");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const formik = useFormik({
    initialValues,
    validationSchema,
    // onSubmit,
  });

  return (
    <div className="addresses-container p-3">
      <div className="btn-new-box">
        <Button
          className="btn-secondary btn-new-address"
          onClick={() => setDisplay("new-address-form")}
        >
          New
        </Button>
      </div>

      {/* NEW ADDRESS FORM */}
      <div className={display}>
        <Form noValidate onSubmit={formik.handleSubmit} className="">
          {/* TITLE field*/}
          <Form.Group className="mb-3">
            <Form.Label>Address title</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("addressTitle")}
              isValid={
                formik.touched.addressTitle && !formik.errors.addressTitle
              }
              isInvalid={
                formik.touched.addressTitle && !!formik.errors.addressTitle
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.addressTitle}
            </Form.Control.Feedback>
          </Form.Group>

          {/* ADDRESS field*/}
          <Form.Group className="mb-3">
            <Form.Label>Address field</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("address")}
              isValid={formik.touched.address && !formik.errors.address}
              isInvalid={formik.touched.address && !!formik.errors.address}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.address}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="form-second-row">
            {/* CITY Field*/}
            <Form.Group className="mb-3 second-row-input">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("city")}
                isValid={formik.touched.city && !formik.errors.city}
                isInvalid={formik.touched.city && !!formik.errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            {/* PROVINCE  Field*/}
            <Form.Group className="mb-3 second-row-input">
              <Form.Label>Province</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("province")}
                isValid={formik.touched.province && !formik.errors.province}
                isInvalid={formik.touched.province && !!formik.errors.province}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.province}
              </Form.Control.Feedback>
            </Form.Group>

            {/* COUNTRY Field */}
            <Form.Group className="mb-3 second-row-input">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                {...formik.getFieldProps("country")}
                isValid={formik.touched.country && !formik.errors.country}
                isInvalid={formik.touched.country && !!formik.errors.country}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.country}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <Button
            className="btn-save mt-2"
            variant="primary"
            type="submit"
            disabled={!(formik.dirty && formik.isValid) || loading}
          >
            {loading && <Spinner animation="border" size="sm" />} Save
          </Button>

          <Button
            className="btn-cancel mt-2"
            variant="secondary"
            onClick={() => btnCancel()}
          >
            Cancel
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewAddress;
