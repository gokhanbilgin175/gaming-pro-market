import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Badge } from "react-bootstrap";
import "./brand-new.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const BrandNew = () => {
  // const [loading, setLoading] = useState(true);
  // const [deleting, setDeleting] = useState(false);
  // const [saving, setSaving] = useState(false);
  // const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const { brandId } = useParams();
  const [initialValues, setInitialValues] = useState({
    name: "",
    image: "",
    checked: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter the brand title"),
    image: Yup.mixed().required("Please select an image"),
    checked: Yup.string().required("Please click active or not"),
  });
  const onSubmit = async (values) => {
    // setSaving(true);
    // try {
    //   // await updateReservationById(values.carId, reservationId, dto);
    //   toast("Reservation updated", "success");
    // } catch (err) {
    //   toast(err.response.data.message, "error");
    // } finally {
    //   setSaving(false);
    // }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });

  // const loadData = async () => {
  //   // try {
  //   //   const respRes = await getReservationById(reservationId);
  //   //   const respVeh = await getVehicles();
  //   //   const dto = {
  //   //     ...respRes.data,
  //   //     pickUpDate: getDate(respRes.data.pickUpTime),
  //   //     pickUpTime: getTime(respRes.data.pickUpTime),
  //   //     dropOffDate: getDate(respRes.data.dropOffTime),
  //   //     dropOffTime: getTime(respRes.data.dropOffTime),
  //   //     carId: respRes.data.car.id
  //   //   };
  //   //   setInitialValues(dto);
  //   // } catch (err) {
  //   //   console.log(err)
  //   // }
  //   // finally{
  //   //   setLoading(false);
  //   // }
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
    <Container className="brands-new-page">
      <Row>
        <Col sm={12} className=" admin-header ms-3">
          <p>
            {pathname === "/admin/brands/new" &&
              ` Dashboard > Brands > New
          `}
          </p>
          {/* {:brandId} */}
        </Col>

        <>
          <Container className="brand-new">
            <Form noValidate onSubmit={formik.handleSubmit}>
              <Row>
                <Col md={3} className="image-area">
                  {/* <img src={brands1} alt="" className="img-fluid " /> */}
                  {/* src={imageSrc} */}
                  <Form.Group controlId="fileSelect">
                    <Form.Control
                      type="file"
                      name="image"
                      accept=".jpg,.jpeg,.png"
                      // onChange={handleChangeImage}
                      className="d-none"
                    />
                    <Form.Label>Select Image</Form.Label>
                  </Form.Group>
                  <Badge bg="danger" className="image-error">
                    {formik.errors.image}
                  </Badge>
                </Col>
                <Col md={9} className="left-new">
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

                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Active"
                    variant="secondary"
                    className="fs-2 mt-3"
                    {...formik.getFieldProps("checked")}
                    isValid={formik.touched.checked && !formik.errors.checked}
                    isInvalid={
                      formik.touched.checked && !!formik.errors.checked
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.checked}
                  </Form.Control.Feedback>

                  <div className="btn-grup-edit">
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={() => navigate(-1)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      // disabled={!(formik.dirty && formik.isValid) || loading}
                    >
                      {/* {loading && <Spinner animation="border" size="sm" />} */}
                      Create
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

export default BrandNew;
