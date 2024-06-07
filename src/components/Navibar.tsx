import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navibar() {
  return (
    <div>
      <Navbar expand="lg" className=" shadow-5-strong navibar" fixed="top">
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
            <Nav>
              <Nav.Link>
                <Button variant="primary" className="btn btn-sm">
                  Login
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button className="btn btn-sm" variant="outline-secondary">
                  signup
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navibar;
