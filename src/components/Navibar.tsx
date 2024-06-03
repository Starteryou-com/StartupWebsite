import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navibar() {
  return (
    <div>
      <Navbar expand="lg" className=" shadow-5-strong navibar">
        <Container>
          <Navbar.Brand href="#home" className="nav-starteryou">
            Starteryou
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-everything">
                Home
              </NavLink>
              <NavLink to="/Joblistingpage" className="nav-everything">
                Jobs
              </NavLink>
              <NavLink to="/Educationpage" className="nav-everything">
                Education
              </NavLink>
              <NavLink to="/Aboutuspage" className="nav-everything">
                about us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;
