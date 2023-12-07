import React from "react";
import "./footer.scss";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../../assets/img/Logos/logo3.png";
import googlepay from "../../../../assets/img/payment icons/Gpay.png";
import applepay from "../../../../assets/img/payment icons/apple-pay.png";
import amexpay from "../../../../assets/img/payment icons/Amex.png";
import spay from "../../../../assets/img/payment icons/s-pay.jpg";
import mastercard from "../../../../assets/img/payment icons/mastercard.png";
import visa from "../../../../assets/img/payment icons/visa.png";
import { settings } from "../../../../helpers/settings";
import {
  MdOutlineHome,
  MdOutlineHeadphones,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import { GiConsoleController } from "react-icons/gi";
import ContactInfo from "../../contact/contact-info";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer>
      <Container className="footer-container">
        <Row className="footer-row">
          <Col lg={6} xl={3}>
            <Link to="/">
              <img src={logo} alt={settings.siteName} className="img-fluid" />
            </Link>
          </Col>
          <Col lg={6} xl={3}>
            <h2>About Us</h2>
            <div className="about-text">
              Gaming e-commerce refers to the buying and selling of video games
              and related products through online platforms. Gaming Pro Market
              offers gamers a convenient and often cost-effective way to
              purchase games and related products, while providing gaming
              companies with new revenue streams and opportunities to engage
              with their fanbase.
            </div>
          </Col>
          <Col lg={6} xl={3}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/" className={pathname === "/" ? "active" : ""}>
                  <MdOutlineHome /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className={pathname.startsWith("/shop") ? "active" : ""}
                >
                  <GiConsoleController /> Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={pathname === "/contact" ? "active" : ""}
                >
                  <MdOutlineHeadphones /> Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className={pathname === "/privacy-policy" ? "active" : ""}
                >
                  <MdOutlinePrivacyTip /> Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={6} xl={3}>
            <h2>Contact Us</h2>
            <ContactInfo />
          </Col>
        </Row>
        <Row lg={12} className="copyright-row">
          <Col lg={6} xl={5} className="copyright">
            <div className="copyright-text">
              © 2023 - Copyright by gamingpromarket.com
            </div>
          </Col>
          <Col lg={6} xl={7}>
            <div className="payment-icons">
              <div>
                <img src={amexpay} alt={`amexpay`} className="img-fluid" />
              </div>
              <div>
                <img src={applepay} alt={`applepay`} className="img-fluid" />
              </div>
              <div>
                <img src={googlepay} alt={`googlepay`} className="img-fluid" />
              </div>
              <div>
                <img
                  src={mastercard}
                  alt={`mastercard`}
                  className="img-fluid"
                />
              </div>
              <div>
                <img src={spay} alt={`spay`} className="img-fluid" />
              </div>
              <div>
                <img src={visa} alt={`visa`} className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
