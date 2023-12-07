import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Badge,
  Alert,
  Table,
} from "react-bootstrap";
import "./product-new.scss";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const ProductNew = () => {
  // const [loading, setLoading] = useState(true);
  // const [deleting, setDeleting] = useState(false);
  // const [saving, setSaving] = useState(false);
  // const [imageSrc, setImageSrc] = useState("");
  // const fileImageRef = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { productId } = useParams();

  const [initialValues, setInitialValues] = useState({
    name: "",
    image: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter the brand title"),
    image: Yup.mixed().required("Please select an image"),
    checked: Yup.string().required("Please click to active or true and false"),
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
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  // const handleChangeImage = (e) => {
  //   const file = fileImageRef.current.files[0];
  //   if (!file) return;

  //   //Görüntüyü image içinde göstermek için:
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);

  //   reader.onloadend = () => {
  //     setImageSrc(reader.result);
  //   };

  //   imageChanged = true;
  // };

  // const removeBrand = async () => {
  //   setDeleting(true);
  //   try {
  //     await deleteBrandById(brandById);
  //     toast("Brand was deleted", "success");
  //     navigate(-1);
  //   } catch (err) {
  //     toast(err.response.data.message, "error");
  //   } finally {
  //     setDeleting(false);
  //   }
  // };

  // const handleDelete = () => {
  //   question("Are you sure to delete?", "You won't be able to undo it!").then(
  //     (result) => {
  //       if (result.isConfirmed) {
  //         removeBrand();
  //       }
  //     }
  //   );
  // };

  // useEffect(() => {
  //   loadData();
  //  }, []);

  return (
    // loading? (<Loading/> ): ()
    <Container className="brands-new-page">
      <Row>
        <Col sm={12} className=" admin-header ms-3">
          <p>
            {pathname.startsWith("/admin/products/new") &&
              `Dashboard > Products > New`}
          </p>
          {/* {:brandId} */}
        </Col>

        <>
          <Container className="brand-new w-75">
            <Form noValidate onSubmit={formik.handleSubmit}>
              <Row>
                <Col className="left-new product-new">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    className="input-search"
                    {...formik.getFieldProps("name")}
                    isValid={formik.touched.name && !formik.errors.name}
                    isInvalid={formik.touched.name && !!formik.errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                  <Form.Label>Slug</Form.Label>
                  <Form.Control
                    type="text"
                    className="input-search"
                    {...formik.getFieldProps("name")}
                    isValid={formik.touched.name && !formik.errors.name}
                    isInvalid={formik.touched.name && !!formik.errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                  <Form.Label>Short Description</Form.Label>
                  <Form.Control
                    type="text"
                    className="input-search"
                    {...formik.getFieldProps("name")}
                    isValid={formik.touched.name && !formik.errors.name}
                    isInvalid={formik.touched.name && !!formik.errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                  <Form.Label>Long Description</Form.Label>
                  <Form.Control
                    type="text"
                    className="input-search long-description"
                    {...formik.getFieldProps("name")}
                    isValid={formik.touched.name && !formik.errors.name}
                    isInvalid={formik.touched.name && !!formik.errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                  <Form.Label>SKU</Form.Label>
                  <Form.Control
                    type="text"
                    className="input-search"
                    {...formik.getFieldProps("name")}
                    isValid={formik.touched.name && !formik.errors.name}
                    isInvalid={formik.touched.name && !!formik.errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                  <Row>
                    <Col md={4}>
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="text"
                        className="input-search"
                        {...formik.getFieldProps("name")}
                        isValid={formik.touched.name && !formik.errors.name}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={4}>
                      <Form.Label>Tax</Form.Label>
                      <Form.Control
                        type="text"
                        className="input-search"
                        {...formik.getFieldProps("name")}
                        isValid={formik.touched.name && !formik.errors.name}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={4}>
                      <Form.Label>Discount</Form.Label>
                      <Form.Control
                        type="text"
                        className="input-search"
                        {...formik.getFieldProps("name")}
                        isValid={formik.touched.name && !formik.errors.name}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={6}>
                      <Form.Label>Stock Amount</Form.Label>
                      <Form.Control
                        type="text"
                        className="input-search"
                        {...formik.getFieldProps("name")}
                        isValid={formik.touched.name && !formik.errors.name}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={6}>
                      <Form.Label>Stock Alarm Limit</Form.Label>
                      <Form.Control
                        type="text"
                        className="input-search"
                        {...formik.getFieldProps("name")}
                        isValid={formik.touched.name && !formik.errors.name}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={6}>
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        type="text"
                        className="input-search"
                        {...formik.getFieldProps("name")}
                        isValid={formik.touched.name && !formik.errors.name}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={6}>
                      <Form.Label>Brands</Form.Label>
                      <Form.Control
                        type="text"
                        className="input-search"
                        {...formik.getFieldProps("name")}
                        isValid={formik.touched.name && !formik.errors.name}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={4}>
                      <Form.Label>Width</Form.Label>
                      <Form.Control
                        type="text"
                        className="input-search"
                        {...formik.getFieldProps("name")}
                        isValid={formik.touched.name && !formik.errors.name}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={4}>
                      <Form.Label>Length</Form.Label>
                      <Form.Control
                        type="text"
                        className="input-search"
                        {...formik.getFieldProps("name")}
                        isValid={formik.touched.name && !formik.errors.name}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={4}>
                      <Form.Label>Height</Form.Label>
                      <Form.Control
                        type="text"
                        className="input-search"
                        {...formik.getFieldProps("name")}
                        isValid={formik.touched.name && !formik.errors.name}
                        isInvalid={formik.touched.name && !!formik.errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>

                  <div className="btn-grup-edit mt-4">
                    <Button
                      variant="secondary"
                      type="button"
                      // onClick={handleDelete}
                      // disabled={deleting}
                    >
                      {/* {deleting && <Spinner animation="border" size="sm" />} */}
                      Delete
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      // disabled={!(formik.dirty && formik.isValid) || saving}
                    >
                      {/* {saving && <Spinner animation="border" size="sm" />}  */}
                      Save
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Container>
        </>
      </Row>
    </Container>
  );
};

export default ProductNew;
