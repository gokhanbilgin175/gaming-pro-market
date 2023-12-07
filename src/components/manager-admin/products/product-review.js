import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import "../reviews/reviews.scss";

const ProductReview = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  // eslint-disable-next-line
  const [switchBtn, setSwitchBtn] = useState(false);

  /* const [loading, setLoading] = useState(true);
  const [paging, setPaging] = useState({});

  const loadData = async (page) => {
    try {
      const resp = await getVehiclesByPage(page);
      const { content, totalPages, pageable } = resp.data;
      setVehicles(content);

      setPaging({ totalPages, pageNumber: pageable.pageNumber });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(0);
  }, []); */

  const handleChange = (e) => {
    setSearchInputValue(e.target.value);
    setSwitchBtn(e.target.checked);
  };

  return (
    <Container className="reviews">
      <Form>
        <Row className="gy-5">
          <Col className="col-12 review-layer">
            <div className="review-pic">
              <p>AY</p>
            </div>
            <div className="review-comment">
              <div className="review-stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standart dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived
              </p>
            </div>
            <div className="review-form-icons">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Active"
                onChange={handleChange}
              />
              <FiTrash2 />
            </div>
          </Col>
          <Col className="col-12 review-layer">
            <div className="review-pic">
              <p>AY</p>
            </div>
            <div className="review-comment">
              <div className="review-stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standart dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived
              </p>
            </div>
            <div className="review-form-icons">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Active"
                onChange={handleChange}
              />
              <FiTrash2 />
            </div>
          </Col>
          <Col className="col-12 review-layer">
            <div className="review-pic">
              <p>AY</p>
            </div>
            <div className="review-comment">
              <div className="review-stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standart dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived
              </p>
            </div>
            <div className="review-form-icons">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Active"
                onChange={handleChange}
              />
              <FiTrash2 />
            </div>
          </Col>
          <Col className="col-12 review-pagination ">
            <Pagination className="justify-content-end">
              <Pagination.First
              /*  onClick={() => loadData(0)}
              disabled={paging.pageNumber <= 0} */
              />
              <Pagination.Prev
              /* onClick={() => loadData(paging.pageNumber - 1)}
              disabled={paging.pageNumber <= 0} */
              />

              {/*     {[...Array(paging.totalPages)].map((item, index) => (
              <Pagination.Item
                active={index === paging.pageNumber}
                key={index}
                onClick={() => index !== paging.pageNumber && loadData(index)}
              >
                {index + 1}
              </Pagination.Item>
            ))} */}

              <Pagination.Next
              /*       onClick={() => loadData(paging.pageNumber + 1)}
              disabled={paging.pageNumber >= paging.totalPages - 1} */
              />
              <Pagination.Last
              /*  onClick={() => loadData(paging.totalPages - 1)}
              disabled={paging.pageNumber >= paging.totalPages - 1} */
              />
            </Pagination>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ProductReview;
