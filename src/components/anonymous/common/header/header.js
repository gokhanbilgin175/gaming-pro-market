import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { settings } from "../../../../helpers/settings";
import { AiOutlineHome, AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import { TiLocationOutline } from "react-icons/ti";
import logo from "../../../../assets/img/Logos/logo4.png";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // add background color to header-menu when scrolling
  const [change, setChange] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;

    if (scrollValue > 20) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  window.addEventListener("scroll", changeValueOnScroll);

  const { pathname } = useLocation();

  return (
    <div className="top-menu">
      <Navbar
        expand="lg"
        className={
          !change
            ? "pt-3 pb-3 fixed-top top-menu-nav"
            : "pt-3 pb-3 fixed-top bg-light top-menu-nav"
        }
      >
        <Container fluid className="ps-5 pe-5">
          {/* ***** LOGO ***** */}
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt={settings.siteName}
              className="img-fluid logo"
            />
          </Navbar.Brand>
          {/* ***** MENU ***** */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link as={Link} to="/" active={pathname === "/"}>
                <AiOutlineHome className="fs-5" /> Home
              </Nav.Link>

              <NavDropdown
                className="shop-link"
                active={pathname === "/shop"}
                title={
                  <>
                    <AiOutlineShop className="fs-5" /> Shop
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/shop">
                  PC, Notebook
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop">
                  Tablet
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop">
                  Mobile Phone
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop">
                  Storage Devices
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop">
                  Gaming Eyewear
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop">
                  Keyboard & Mouse
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop">
                  Console
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop">
                  Chair
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shop">
                  Speaker & Headphone
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/contact"
                active={pathname === "/contact"}
              >
                <TiLocationOutline className="fs-5" /> Contact Us
              </Nav.Link>

              <div className="btn-account">
                <Button variant="primary" size="sm" as={Link} to="/login">
                  <AiOutlineUser className="fs-4 me-1" /> Account
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
