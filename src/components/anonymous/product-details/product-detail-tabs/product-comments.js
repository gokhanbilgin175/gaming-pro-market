import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./product-comments.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductComments = () => {
  return (
    <div className="comments">
      <Button>Write a comment</Button>
      {/* onClick={} eklenecek,login ise yorum yapabilecek */}

      <Form className="comment-form">
        <Form.Group>
          <Form.Label>Score</Form.Label>
          <Form.Select aria-label="Default select example">
            <option /* selected */ value="None"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 text-area">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows="5"
            // {...formik.getFieldProps("body")}
            // isInvalid={formik.touched.body && !!formik.errors.body}
            // isValid={formik.touched.body && !formik.errors.body}
          />
          {/* <Form.Control.Feedback type="invalid">
                {formik.errors.body}
              </Form.Control.Feedback> */}
        </Form.Group>
        <div className="btn-comment">
          <Button variant="secondary" type="submit" disabled>
            Send
          </Button>
        </div>
      </Form>

      <Container>
        <Row>
          <Col md={2}>AY</Col>
          <Col md={10}>
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in
              cumque deserunt quibusdam provident sequi maxime modi maiores
              officiis nisi. Cumque, nobis, ipsa perspiciatis tempora dolor
              cupiditate minus natus beatae non id vel dolorum officiis nulla
              labore? Perspiciatis hic ullam error voluptate exercitationem
              mollitia, nulla id. Veritatis itaque consequuntur eveniet?
            </p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col md={2}>ST</Col>
          <Col md={10}>
            <span>
              {" "}
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in
              cumque deserunt quibusdam provident sequi maxime modi maiores
              officiis nisi. Cumque, nobis, ipsa perspiciatis tempora dolor
              cupiditate minus natus beatae non id vel dolorum officiis nulla
              labore? Perspiciatis hic ullam error voluptate exercitationem
              mollitia, nulla id. Veritatis itaque consequuntur eveniet?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductComments;
