import React from "react";
import { Container, NavLink, Navbar, Nav } from "react-bootstrap";

function Navibar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Leadme</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="Home">Home</NavLink>
              <NavLink href="About us">About us</NavLink>
              <NavLink href="Our vision">Our vision</NavLink>
              <NavLink href="Our team">Our team</NavLink>
              <NavLink href="Contact us">Contact us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;
