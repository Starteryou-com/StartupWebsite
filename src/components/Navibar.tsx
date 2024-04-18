import React from "react";
import { Container, NavLink, Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navibar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Leadme</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="Home">Home</NavLink>
              <NavLink href="Features">Features</NavLink>
              <NavDropdown title="About Us" id="navbarScrollingDropdown">
                <NavDropdown.Item>Our Vision</NavDropdown.Item>
                <NavDropdown.Item>Our Team</NavDropdown.Item>
              </NavDropdown>
              <NavLink href="Contact us">Contact us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;
