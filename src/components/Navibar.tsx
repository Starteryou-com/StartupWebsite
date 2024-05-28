import { Container, NavLink, Navbar, Nav } from "react-bootstrap";

function Navibar() {
  return (
    <div>
      <Navbar expand="lg" className=" shadow-5-strong navibar" >
        <Container>
          <Navbar.Brand href="#home" className="nav-starteryou">Starteryou</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="#home" className="nav-everything">Home</NavLink>
              <NavLink href="#features" className="nav-everything">Features</NavLink>
              <NavLink href="#aboutUs" className="nav-everything">About Us</NavLink>
              <NavLink href="#mission" className="nav-everything">Our Mission</NavLink>
              <NavLink href="#vision" className="nav-everything">Our Vision</NavLink>
              <NavLink href="#team" className="nav-everything">Our Team</NavLink>
              <NavLink href="#contact" className="nav-everything">Contact us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;
