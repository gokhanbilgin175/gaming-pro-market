import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiHeadphoneLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";
import { settings } from "../../../helpers/settings";
import Spacer from "../../common/spacer/spacer";
import contact from "../../../assets/img/contact.png";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <Spacer />
      <Container>
        <Row className="contact-info-1 gy-5">
          <Col md={4}>
            <div>
              <RiHeadphoneLine />
              <a href={`tel:${settings.phone1}`}>{settings.phone1}</a>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <RiWhatsappLine />
              <a
                href={`https://api.whatsapp.com/send?phone=${settings.email2}`}
                target="_blank"
                rel="noreferrer"
              >
                {settings.email2}
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <RiMailLine />
              <a href={`mailto:${settings.email2}`}>{settings.email2}</a>
            </div>
          </Col>
        </Row>
        <Spacer />
        <Row className="contact-info-2 gy-5">
          <Col md={5}>
            <img src={contact} alt="" className="img-fluid" />
          </Col>
          <Col md={7}>
            <p>
              If you have any questions, comments or concerns, please don't
              hesitate to contact us. Our customer service team is available
              24/7 to assist you with any inquiries you may have. Whether you
              need help with a reservation, have a question about our rental
              policies or need assistance during your rental period, we are here
              to help. You can reach us by phone, email or through our website's
              live chat feature. We value your feedback and strive to provide
              the best possible service to our customers. Your satisfaction is
              our top priority, and we look forward to serving you all of your
              future rental car needs
            </p>
          </Col>
        </Row>
      </Container>
      <Spacer />
    </div>
  );
};

export default Contact;
