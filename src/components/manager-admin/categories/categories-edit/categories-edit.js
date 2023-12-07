import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  // Spinner,
  Badge,
  ButtonGroup,
  // Alert,
} from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { useFormik } from "formik";
import "./categories-edit.scss";

const CategoriesEdit = () => {
  const { pathname } = useLocation();
  const { categoryId } = useParams();

  const [initialValues, setInitialValues] = useState({
    name: "",
    checked: "",
  });
  const onSubmit = async (values) => {
    // setSaving(true);
    // try {
    //   let imageId = values.image[0];
    //   if (imageChanged) {
    //     // Mevcut resmi siliyoruz
    //     await deleteVehicleImage(imageId);
    //     const newImageFile = fileImageRef.current.files[0];
    //     const formData = new FormData();
    //     formData.append("file", newImageFile);
    //     const resp = await uploadVehicleImage(formData);
    //     imageId = resp.data.imageId;
    //     imageChanged = false;
    //   }
    //   delete values.image;
    //   await updateVehicle(vehicleId, imageId, values);
    //   toast("Vehicle was updated", "success");
    //   navigate(-1);
    // } catch (err) {
    //   toast(err.response.data.message, "error");
    // } finally {
    //   setSaving(false);
    // }
  };
  // const loadData = async () => {
  //   try {
  //     const resp = await getVehicle(vehicleId);
  //     setInitialValues(resp.data);
  //     setImageSrc(`${settings.apiURL}/files/display/${resp.data.image[0]}`);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const formik = useFormik({
    initialValues,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <Container className="category-edit">
      <Row>
        <Col>
          <div className="keyboard-edit">
            <p>
              {pathname.startsWith(`/admin/categories/${categoryId}`) &&
                `Dashboard > Categories > Edit`}
              {/*{:categoryId} */}
            </p>
          </div>

          <div className="input-category-search">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="PS5 Bundle With Battlefield 2042"
              className="input-search"
              {...formik.getFieldProps("name")}
              isValid={formik.touched.name && !formik.errors.name}
              isInvalid={formik.touched.name && !!formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.checked}
            </Form.Control.Feedback>

            <Form.Check
              type="switch"
              id="custom-switch"
              label="Active"
              variant="secondary"
              className="fs-2 mt-3 active-btn"
              {...formik.getFieldProps("checked")}
              isValid={formik.touched.checked && !formik.errors.checked}
              isInvalid={formik.touched.checked && !!formik.errors.checked}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.checked}
            </Form.Control.Feedback>
          </div>
          <div className="btn-category-edit">
            <ButtonGroup className="btn-group-edit">
              <Button
                className="btn-delete"
                variant="secondary"
                type="button"
                // onClick={handleDelete}
                // disabled={deleting}
              >
                {/* {deleting && <Spinner animation="border" size="sm" />} */}
                Delete
              </Button>
              <Button
                className="btn-save"
                variant="primary"
                type="submit"
                // disabled={!(formik.dirty && formik.isValid) || saving}
              >
                {/* {saving && <Spinner animation="border" size="sm" />}  */}
                Save
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesEdit;
