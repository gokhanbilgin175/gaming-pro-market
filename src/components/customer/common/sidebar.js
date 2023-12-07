import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HiOutlineUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import Spacer from "../../common/spacer/spacer";
import "./sidebar.scss";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <Spacer />
      <Navbar expand="lg" className="user-navbar">
        <Container>
          <Navbar.Brand className="user-icon">
            <HiOutlineUser />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto user-links">
              <Nav.Link as={Link} to="/user" active={pathname === "/user"}>
                Profile
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/user/account"
                active={pathname.startsWith("/user/account")}
              >
                Account
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/user/addresses"
                active={pathname.startsWith("/user/addresses")}
              >
                Addresses
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/user/favourites"
                active={pathname.startsWith("/user/favourites")}
              >
                Favourites
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/user/orders"
                active={pathname.startsWith("/user/orders")}
              >
                Orders
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Spacer />
    </div>
  );
};

export default Sidebar;
