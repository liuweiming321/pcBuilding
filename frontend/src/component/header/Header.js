import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div class="basicSetup">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand style={{ fontFamily: "Train One", paddingLeft: "20px" }}>
          Very Own PC
        </Navbar.Brand>
        <Container style={{ marginRight: "30%" }}>
          {/* <Nav className="mr-auto"></Nav> */}
          <Nav className="optionLink">
            <Nav.Link href="#prebuilt">Prebuilt</Nav.Link>
            <Nav.Link href="#build">Build Your Own</Nav.Link>
            <Nav.Link href="#order">Order</Nav.Link>
          </Nav>
        </Container>
        <Nav className="languageOption">
          <NavDropdown title="Language" id="language-dropdown">
            <NavDropdown.Item href="#English"> English </NavDropdown.Item>
            <NavDropdown.Item href="#Chinese"> Chinese </NavDropdown.Item>
            <NavDropdown.Item href="#Japanese"> Japanese </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
