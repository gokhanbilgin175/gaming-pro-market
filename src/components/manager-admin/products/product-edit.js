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
import "./product-edit.scss";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ProductReview from "./product-review";
import Spacer from "../../common/spacer/spacer";
import ProductImgEdit from "./product-img-edit";

const ProductEdit = () => {
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
            {pathname.startsWith(`/admin/products/${productId}`) &&
              `Dashboard > Products > ${productId}`}
          </p>
          {/* {:brandId} */}
        </Col>

        <>
          <Container className="brand-new">
            <Form noValidate onSubmit={formik.handleSubmit}>
              <Row>
                <Col md={3} className="mt-2">
                  <Table borderless>
                    <tbody>
                      <tr>
                        <td>Like</td>
                        <td>1234</td>
                      </tr>
                      <tr>
                        <td>Created Date</td>
                        <td>10/12/2022</td>
                      </tr>
                      <tr>
                        <td>Updated Date</td>
                        <td>10/12/2022</td>
                      </tr>
                      <tr>
                        <td>Bull in True</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Active"
                    variant="secondary"
                    className="fs-5 mt-3"
                    {...formik.getFieldProps("checked")}
                    isValid={formik.touched.checked && !formik.errors.checked}
                    isInvalid={
                      formik.touched.checked && !!formik.errors.checked
                    }
                  />
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="New Product"
                    variant="secondary"
                    className="fs-5 mt-3"
                    {...formik.getFieldProps("checked")}
                    isValid={formik.touched.checked && !formik.errors.checked}
                    isInvalid={
                      formik.touched.checked && !!formik.errors.checked
                    }
                  />
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Featured"
                    variant="secondary"
                    className="fs-5 mt-3"
                    {...formik.getFieldProps("checked")}
                    isValid={formik.touched.checked && !formik.errors.checked}
                    isInvalid={
                      formik.touched.checked && !!formik.errors.checked
                    }
                  />
                </Col>
                <Col md={9} className="left-new product-edit">
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
            <Spacer bg="white" />
            <ProductImgEdit />
            <Spacer bg="white" />
            <ProductReview />
          </Container>
        </>
      </Row>
    </Container>
  );
};

export default ProductEdit;
