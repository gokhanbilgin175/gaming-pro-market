import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import productImage from "../../../../assets/img/controller-small-size.png";
import "./related-products.scss";
import Spacer from "../../../common/spacer/spacer";

const RelatedProducts = () => {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(20);
  const [lastPrice, setLastPrice] = useState(price - (price * discount) / 100);

  // useState to set number of product
  const [count, setCount] = useState(0);

  return (
    <>
      <Container className="related-products">
        <h3 className="text-left mb-3">Related Products</h3>
        <Row className="section-content">
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <div className="related-product-card">
              <Card className="product-card">
                <div className="discount">Discount {discount}%</div>
                <Card.Img
                  variant="top"
                  src={productImage}
                  className="img-fluid product-card-image"
                />
                <Card.Body>
                  <Card.Title className="product-card-prices">
                    <h5>${lastPrice}</h5>
                    <h6>${price}</h6>
                  </Card.Title>
                  <Card.Text className="product-card-text text-center">
                    X-Box Bundle with Battlefield 2042
                  </Card.Text>

                  {count <= 0 ? (
                    <ButtonGroup aria-label="Basic example">
                      <Button className="number-add text-dark" disabled>
                        Add
                      </Button>
                      <Button
                        className="btn-add"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        className="text-light"
                        onClick={() => setCount((prev) => prev - 1)}
                      >
                        <AiOutlineMinus />
                      </Button>
                      <Button
                        variant="secondary"
                        disabled
                        className="number-info text-light"
                      >
                        {count}
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  )}
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <div className="related-product-card">
              <Card className="product-card">
                <div className="discount">Discount {discount}%</div>
                <Card.Img
                  variant="top"
                  src={productImage}
                  className="img-fluid product-card-image"
                />
                <Card.Body>
                  <Card.Title className="product-card-prices">
                    <h5>${lastPrice}</h5>
                    <h6>${price}</h6>
                  </Card.Title>
                  <Card.Text className="product-card-text text-center">
                    X-Box Bundle with Battlefield 2042
                  </Card.Text>

                  {count <= 0 ? (
                    <ButtonGroup aria-label="Basic example">
                      <Button className="number-add text-dark" disabled>
                        Add
                      </Button>
                      <Button
                        className="btn-add"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        className="text-light"
                        onClick={() => setCount((prev) => prev - 1)}
                      >
                        <AiOutlineMinus />
                      </Button>
                      <Button
                        variant="secondary"
                        disabled
                        className="number-info text-light"
                      >
                        {count}
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  )}
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <div className="related-product-card">
              <Card className="product-card">
                <div className="discount">Discount {discount}%</div>
                <Card.Img
                  variant="top"
                  src={productImage}
                  className="img-fluid product-card-image"
                />
                <Card.Body>
                  <Card.Title className="product-card-prices">
                    <h5>${lastPrice}</h5>
                    <h6>${price}</h6>
                  </Card.Title>
                  <Card.Text className="product-card-text text-center">
                    X-Box Bundle with Battlefield 2042
                  </Card.Text>

                  {count <= 0 ? (
                    <ButtonGroup aria-label="Basic example">
                      <Button className="number-add text-dark" disabled>
                        Add
                      </Button>
                      <Button
                        className="btn-add"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        className="text-light"
                        onClick={() => setCount((prev) => prev - 1)}
                      >
                        <AiOutlineMinus />
                      </Button>
                      <Button
                        variant="secondary"
                        disabled
                        className="number-info text-light"
                      >
                        {count}
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  )}
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <div className="related-product-card">
              <Card className="product-card">
                <div className="discount">Discount {discount}%</div>
                <Card.Img
                  variant="top"
                  src={productImage}
                  className="img-fluid product-card-image"
                />
                <Card.Body>
                  <Card.Title className="product-card-prices">
                    <h5>${lastPrice}</h5>
                    <h6>${price}</h6>
                  </Card.Title>
                  <Card.Text className="product-card-text text-center">
                    X-Box Bundle with Battlefield 2042
                  </Card.Text>

                  {count <= 0 ? (
                    <ButtonGroup aria-label="Basic example">
                      <Button className="number-add text-dark" disabled>
                        Add
                      </Button>
                      <Button
                        className="btn-add"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        className="text-light"
                        onClick={() => setCount((prev) => prev - 1)}
                      >
                        <AiOutlineMinus />
                      </Button>
                      <Button
                        variant="secondary"
                        disabled
                        className="number-info text-light"
                      >
                        {count}
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  )}
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <div className="related-product-card">
              <Card className="product-card">
                <div className="discount">Discount {discount}%</div>
                <Card.Img
                  variant="top"
                  src={productImage}
                  className="img-fluid product-card-image"
                />
                <Card.Body>
                  <Card.Title className="product-card-prices">
                    <h5>${lastPrice}</h5>
                    <h6>${price}</h6>
                  </Card.Title>
                  <Card.Text className="product-card-text text-center">
                    X-Box Bundle with Battlefield 2042
                  </Card.Text>

                  {count <= 0 ? (
                    <ButtonGroup aria-label="Basic example">
                      <Button className="number-add text-dark" disabled>
                        Add
                      </Button>
                      <Button
                        className="btn-add"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        className="text-light"
                        onClick={() => setCount((prev) => prev - 1)}
                      >
                        <AiOutlineMinus />
                      </Button>
                      <Button
                        variant="secondary"
                        disabled
                        className="number-info text-light"
                      >
                        {count}
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  )}
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <div className="related-product-card">
              <Card className="product-card">
                <div className="discount">Discount {discount}%</div>
                <Card.Img
                  variant="top"
                  src={productImage}
                  className="img-fluid product-card-image"
                />
                <Card.Body>
                  <Card.Title className="product-card-prices">
                    <h5>${lastPrice}</h5>
                    <h6>${price}</h6>
                  </Card.Title>
                  <Card.Text className="product-card-text text-center">
                    X-Box Bundle with Battlefield 2042
                  </Card.Text>

                  {count <= 0 ? (
                    <ButtonGroup aria-label="Basic example">
                      <Button className="number-add text-dark" disabled>
                        Add
                      </Button>
                      <Button
                        className="btn-add"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        className="text-light"
                        onClick={() => setCount((prev) => prev - 1)}
                      >
                        <AiOutlineMinus />
                      </Button>
                      <Button
                        variant="secondary"
                        disabled
                        className="number-info text-light"
                      >
                        {count}
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  )}
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <div className="related-product-card">
              <Card className="product-card">
                <div className="discount">Discount {discount}%</div>
                <Card.Img
                  variant="top"
                  src={productImage}
                  className="img-fluid product-card-image"
                />
                <Card.Body>
                  <Card.Title className="product-card-prices">
                    <h5>${lastPrice}</h5>
                    <h6>${price}</h6>
                  </Card.Title>
                  <Card.Text className="product-card-text text-center">
                    X-Box Bundle with Battlefield 2042
                  </Card.Text>

                  {count <= 0 ? (
                    <ButtonGroup aria-label="Basic example">
                      <Button className="number-add text-dark" disabled>
                        Add
                      </Button>
                      <Button
                        className="btn-add"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        className="text-light"
                        onClick={() => setCount((prev) => prev - 1)}
                      >
                        <AiOutlineMinus />
                      </Button>
                      <Button
                        variant="secondary"
                        disabled
                        className="number-info text-light"
                      >
                        {count}
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  )}
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={3} className="mt-4">
            <div className="related-product-card">
              <Card className="product-card">
                <div className="discount">Discount {discount}%</div>
                <Card.Img
                  variant="top"
                  src={productImage}
                  className="img-fluid product-card-image"
                />
                <Card.Body>
                  <Card.Title className="product-card-prices">
                    <h5>${lastPrice}</h5>
                    <h6>${price}</h6>
                  </Card.Title>
                  <Card.Text className="product-card-text text-center">
                    X-Box Bundle with Battlefield 2042
                  </Card.Text>

                  {count <= 0 ? (
                    <ButtonGroup aria-label="Basic example">
                      <Button className="number-add text-dark" disabled>
                        Add
                      </Button>
                      <Button
                        className="btn-add"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  ) : (
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        className="text-light"
                        onClick={() => setCount((prev) => prev - 1)}
                      >
                        <AiOutlineMinus />
                      </Button>
                      <Button
                        variant="secondary"
                        disabled
                        className="number-info text-light"
                      >
                        {count}
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        <AiOutlinePlus className="text-light" />
                      </Button>
                    </ButtonGroup>
                  )}
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default RelatedProducts;
