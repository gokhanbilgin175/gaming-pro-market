import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsTrash, BsPencil, BsCheck2 } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./saved-addresses.scss";

// import { question, toast } from "../../../helpers/functions/swal";

const SavedAddresses = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    setBgColor(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setBgColor(false);
  };

  // loading
  const [loading, setLoading] = useState(false);

  // deleting state
  const [deleting, setDeleting] = useState(false);

  // toggle edit saved address
  const [showEditaddress, setShowEditaddress] = useState(false);

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

  /*
    // ****** Adres silme butonu icin kullanilacak *****

  const removeUser = async () => {
    setDeleting(true);
    try {
      await deleteUserById(userId);
      toast("User was deleted", "success");
      navigate(-1);
    } catch (err) {
      toast(err.response.data.message, "error");
    } finally {
      setDeleting(false);
    }
  };

    const handleDelete = () => {
      question("Are you sure to delete?", "You won't be able to undo it!").then(
        (result) => {
          if (result.isConfirmed) {
            removeUser();
          }
        }
      );
    };
*/

  const testDelete = () => {
    window.confirm("Are you sure?");
  };

  const btnCancel = () => {
    formik.resetForm();
    setShowEditaddress(false);
  };

  return (
    <div className="p-3">
      <div
        className={
          bgColor ? "saved-address-box bg-active" : "saved-address-box"
        }
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="saved-addresses">
          <div className="address-content">
            <h5 className="address-title">Home</h5>
            <p className="address-detail">
              3224 Edenwold Heights NW Calgary, AB T3A 3Y8, CANADA
            </p>
          </div>

          {/* BUTTONS for SAVED ADDRESS */}
          {isHovering && (
            <div className="saved-address-box-buttons">
              {/* delete & edit buttons */}
              <div className="btn-delete-edit">
                <span
                  className="btn btn-delete"
                  onClick={() => testDelete()}
                  disabled={deleting}
                >
                  <BsTrash />
                </span>
                <span
                  className="btn btn-edit"
                  onClick={() => setShowEditaddress(true)}
                >
                  <BsPencil />
                </span>
              </div>
            </div>
          )}
        </div>

        {showEditaddress && (
          // EDIT ADDRESS FORM
          <div className="edit-address-form">
            <Form noValidate onSubmit={formik.handleSubmit} className="">
              {/* ADDRESS Field */}
              <Form.Group className="mb-3">
                <Form.Label>Address title</Form.Label>
                <Form.Control
                  placeholder="Home"
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

              {/* ADDRESS Field */}
              <Form.Group className="mb-3">
                <Form.Label>Address field</Form.Label>
                <Form.Control
                  placeholder="3224 Edenwold Heights NW, T3A3Y8 "
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
                {/* CITY Field */}
                <Form.Group className="mb-3 second-row-input">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    placeholder="Calgary"
                    type="text"
                    {...formik.getFieldProps("city")}
                    isValid={formik.touched.city && !formik.errors.city}
                    isInvalid={formik.touched.city && !!formik.errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.city}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* PROVINCE Field */}
                <Form.Group className="mb-3 second-row-input">
                  <Form.Label>Province</Form.Label>
                  <Form.Control
                    placeholder="AB"
                    type="text"
                    {...formik.getFieldProps("province")}
                    isValid={formik.touched.province && !formik.errors.province}
                    isInvalid={
                      formik.touched.province && !!formik.errors.province
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.province}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* COUNTRY Field */}
                <Form.Group className="mb-3 second-row-input">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    placeholder="Canada"
                    type="text"
                    {...formik.getFieldProps("country")}
                    isValid={formik.touched.country && !formik.errors.country}
                    isInvalid={
                      formik.touched.country && !!formik.errors.country
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.country}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>

              {/* confirm & cancel buttons */}
              <div className="btn-confirm-cancel-box">
                <span
                  className="btn btn-confirm"
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid) || loading}
                >
                  {loading && <Spinner animation="border" size="sm" />}
                  <BsCheck2 />
                </span>
                <span className="btn btn-cancel" onClick={() => btnCancel()}>
                  <AiOutlineClose />
                </span>
              </div>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedAddresses;
