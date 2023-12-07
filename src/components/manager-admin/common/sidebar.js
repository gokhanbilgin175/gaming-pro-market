import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/img/Logos/logo3.png";
import { useAppSelector } from "../../../store/hooks";
import "./sidebar.scss";

const Sidebar = () => {
  const { sidebarLeft } = useAppSelector((state) => state.left);
  const { pathname } = useLocation();

  return (
    <Navbar
      bg="primary"
      expand="lg"
      className={sidebarLeft ? "admin-navbar admin-left" : "admin-navbar"}
      variant="dark"
    >
      <Container>
        <div className="admin-brand">
          <Navbar.Brand as={Link} to="/admin">
            <img src={logo} alt="Admin Panel" className="img-fluid" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin" active={pathname === "/admin"}>
              Dashboard
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/products"
              active={pathname.startsWith("/admin/products")}
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/categories"
              active={pathname.startsWith("/admin/categories")}
            >
              Categories
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/brands"
              active={pathname.startsWith("/admin/brands")}
            >
              Brands
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/users"
              active={pathname.startsWith("/admin/users")}
            >
              Users
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/reviews"
              active={pathname.startsWith("/admin/reviews")}
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/orders"
              active={pathname.startsWith("/admin/orders")}
            >
              Orders
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/coupons"
              active={pathname.startsWith("/admin/coupons")}
            >
              Coupons
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin/reports"
              active={pathname === "/admin/reports"}
            >
              Reports
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Web Site
            </Nav.Link>
            <Nav.Link>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
