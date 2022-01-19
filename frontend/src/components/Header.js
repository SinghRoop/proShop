import React from "react";
import { Nav, Navbar, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="justify-content-end"
          >
            <Row>
              <Nav className="justify-content-end">
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <Nav.Link>
                    <i className="fas fa-shopping-cart p-1"></i> Cart
                  </Nav.Link>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Nav.Link>
                    <i className="fas fa-user p-1"></i>Login
                  </Nav.Link>
                </Link>
              </Nav>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
