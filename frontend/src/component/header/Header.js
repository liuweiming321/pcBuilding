import React, { useState } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import * as Io5Icons from "react-icons/io5";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div class="basicSetup">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand style={{ fontFamily: "Train One", paddingLeft: "10px" }}>
          <Nav.Link href="/home" style={{ color: "#ffffff" }}>
            Very Own PC
          </Nav.Link>
        </Navbar.Brand>
        <Container style={{ marginRight: "30%" }}>
          {/* <Nav className="mr-auto"></Nav> */}
          <Nav className="optionLink">
            <Nav.Link href="/prebuilt">Prebuilt</Nav.Link>
            <Nav.Link href="/buildyourown">Build Your Own</Nav.Link>
            <Nav.Link href="/order">Order</Nav.Link>
          </Nav>
        </Container>
        <Nav className="languageOption">
          <NavDropdown title="Language" id="language-dropdown">
            <NavDropdown.Item href="#English"> English </NavDropdown.Item>
            <NavDropdown.Item href="#Chinese"> Chinese </NavDropdown.Item>
            <NavDropdown.Item href="#Japanese"> Japanese </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <div>
            <Nav.Link className="menu-icon">
              <Io5Icons.IoCartOutline onClick={showSidebar} />
            </Nav.Link>
          </div>
          {/* <nav className={sidebar ? "navMenu active" : "navMenu"}>
              <p>This is a Shopping cart</p>
            </nav> */}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
