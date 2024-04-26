import { Container, NavLink, Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navibar() {
  return (
    <div>
      <Navbar expand="lg" className=" shadow-5-strong navibar" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Leadme</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavDropdown title="Know More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#aboutUs">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#vision">Our Vision</NavDropdown.Item>
                <NavDropdown.Item href="#team">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#team">Rate Us</NavDropdown.Item>
              </NavDropdown>
              <NavLink href="#contact">Contact us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;
