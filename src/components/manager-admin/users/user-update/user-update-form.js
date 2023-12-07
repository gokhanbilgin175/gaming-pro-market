import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Col, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import ReactInputMask from "react-input-mask-next";
import "./user-update-form.scss";

const UserUpdateForm = () => {
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    firstName: "Ergin",
    lastName: "Adem",
    email: "ergin@gmail.com",
    phoneNumber: "12312341234",
    address: "3224 Edenwold Heights NW",
    birthDate: "2000-09-29",
    roles: ["Customer", "Administrator"],
    builtIn: false, //bazı kayıtların değiştirilmesi ve silinmesini engellemek için kullanıyoruz.
  });

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string()
      .email("Plese enter a valid email address")
      .required("Please enter an email address"),

    phoneNumber: Yup.string()
      .required("Please enter your phone number")
      .test(
        "is_includes_",
        "Please enter a valid phone number",
        (val) => val && !val.includes("_")
      ),
    address: Yup.string().required("Please enter your address"),
    birthDate: Yup.string().required("Enter the birth date"),
    roles: Yup.array().test(
      "role_check",
      "Please select a role",
      (val) => val.length > 0
    ),
  });

  const onSubmit = async (values) => {
    // setUpdating(true);
    // try {
    //   await updateUserById(userId, values);
    //   toast("User was updated", "success");
    // } catch (err) {
    //   toast(err.response.data.message, "error");
    // } finally {
    //   setUpdating(false);
    // }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const loadData = async () => {
    // setLoading(true);
    // try {
    //   const resp = await getUserById(userId);
    //   setInitialValues({ ...resp.data });
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setLoading(false);
    // }
  };

  const removeUser = async () => {
    setDeleting(true);
    // try {
    //   await deleteUserById(userId);
    //   toast("User was deleted", "success");
    //   navigate(-1);
    // } catch (err) {
    //   toast(err.response.data.message, "error");
    // } finally {
    //   setDeleting(false);
    // }
  };

  const handleDelete = () => {
    // question("Are you sure to delete?", "You won't be able to undo it!").then(
    //   (result) => {
    //     if (result.isConfirmed) {
    //       removeUser();
    //     }
    //   }
    // );
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Row className="user-edit-form">
        <div className="first-last-name">
          {/* ******* Firstname ******** */}
          <Form.Group as={Col} className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("firstName")}
              isValid={formik.touched.firstName && !formik.errors.firstName}
              isInvalid={formik.touched.firstName && !!formik.errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          {/* ******* Lastname ******** */}
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              {...formik.getFieldProps("lastName")}
              isValid={formik.touched.lastName && !formik.errors.lastName}
              isInvalid={formik.touched.lastName && !!formik.errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        {/* ******* Address ******** */}
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
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

        <div className="third-row mb-3">
          {/* ******* Phone ******** */}
          <Form.Group className="input">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              as={ReactInputMask}
              mask="(999) 9999 99 99"
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

          {/* ******* Email ******** */}
          <Form.Group className="input">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              {...formik.getFieldProps("email")}
              isValid={formik.touched.email && !formik.errors.email}
              isInvalid={formik.touched.email && !!formik.errors.email}
              disabled
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          {/* ******* Birth date ******** */}
          <Form.Group className="input">
            <Form.Label>Birth Date</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type="date"
                {...formik.getFieldProps("birthDate")}
                isValid={formik.touched.birthDate && !formik.errors.birthDate}
                isInvalid={
                  formik.touched.birthDate && !!formik.errors.birthDate
                }
              />
            </InputGroup>
            <Form.Control.Feedback type="invalid">
              {formik.errors.birthDate || formik.errors.birthDate}
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        {/* ******* Role ******** */}
        <div className="roles">
          <p>Role</p>
          <Form.Group as={Col} className="role-checkbox">
            <Form.Check
              label="Customer"
              type="checkbox"
              name="roles"
              value="Customer"
              checked={formik.values.roles.includes("Customer")}
              onChange={formik.handleChange}
              isValid={formik.touched.roles && !formik.errors.roles}
              isInvalid={formik.touched.roles && !!formik.errors.roles}
            />
            <Form.Check
              label="Manager"
              type="checkbox"
              name="roles"
              value="Manager"
              checked={formik.values.roles.includes("Administrator")}
              onChange={formik.handleChange}
              isValid={formik.touched.roles && !formik.errors.roles}
              isInvalid={formik.touched.roles && !!formik.errors.roles}
              feedback={formik.errors.roles}
              feedbackType="invalid"
            />

            <Form.Check
              label="Admin"
              type="checkbox"
              name="roles"
              value="Admin"
              checked={formik.values.roles.includes("Administrator")}
              onChange={formik.handleChange}
              isValid={formik.touched.roles && !formik.errors.roles}
              isInvalid={formik.touched.roles && !!formik.errors.roles}
              feedback={formik.errors.roles}
              feedbackType="invalid"
            />
          </Form.Group>
        </div>
      </Row>

      <div className="user-edit-buttons">
        {/* *** Delete Button *** */}
        <Button
          variant="danger"
          onClick={handleDelete}
          disabled={deleting}
          className="btn-delete"
        >
          {deleting && <Spinner animation="border" size="sm" />} Delete
        </Button>

        {/* *** Save Button *** */}
        <Button
          variant="primary"
          type="submit"
          disabled={!(formik.dirty && formik.isValid) || updating}
          className="btn-save"
        >
          {updating && <Spinner animation="border" size="sm" />} Save
        </Button>
      </div>
    </Form>
  );
};

export default UserUpdateForm;
