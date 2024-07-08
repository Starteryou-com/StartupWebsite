import { useState } from 'react';
import { Container, Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

type UserType = 'student' | 'organization' | null;

function Navibar() {
  const [auth, setAuth] = useState<{ isAuthenticated: boolean; userType: UserType }>({
    isAuthenticated: false,
    userType: null,
  });

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginUserType, setLoginUserType] = useState<UserType>(null);
  const [signupUserType, setSignupUserType] = useState<UserType>(null);

  const handleLogin = (userType: 'student' | 'organization') => {
    setAuth({ isAuthenticated: true, userType });
    setShowLogin(false);
  };

  const handleSignup = (userType: 'student' | 'organization') => {
    setAuth({ isAuthenticated: true, userType });
    setShowSignup(false);
  };

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, userType: null });
  };

  return (
    <Router>
      <div>
        <Navbar expand="lg" className="shadow-5-strong navibar" fixed="top">
          <Container>
            <Navbar.Brand href="#home" className="nav-starteryou">
              Starteryou
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {auth.isAuthenticated ? (
                <>
                  <Nav className="me-auto">
                    <NavLink to="/" className="nav-everything">
                      Home
                    </NavLink>
                    <NavLink to="/Joblistingpage" className="nav-everything">
                      Jobs
                    </NavLink>
                    {auth.userType === 'student' && (
                      <NavLink to="/Educationpage" className="nav-everything">
                        Education
                      </NavLink>
                    )}
                    <NavLink to="/Aboutuspage" className="nav-everything">
                      About Us
                    </NavLink>
                  </Nav>
                  <Nav className="loginbuttons">
                    <Button variant="outline-secondary" className="btn btn-sm" onClick={handleLogout}>
                      Logout
                    </Button>
                  </Nav>
                </>
              ) : (
                <Nav className="loginbuttons ms-auto">
                  <Button variant="primary" className="btn btn-sm me-2" onClick={() => { setLoginUserType('student'); setShowLogin(true); }}>
                    Login
                  </Button>
                  <Button variant="outline-secondary" className="btn btn-sm" onClick={() => { setSignupUserType('student'); setShowSignup(true); }}>
                    Signup
                  </Button>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal show={showLogin} onHide={() => setShowLogin(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm userType={loginUserType!} onLogin={() => handleLogin(loginUserType!)} />
          </Modal.Body>
        </Modal>

        <Modal show={showSignup} onHide={() => setShowSignup(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Signup</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignupForm userType={signupUserType!} onSignup={() => handleSignup(signupUserType!)} />
          </Modal.Body>
        </Modal>

        {auth.isAuthenticated && (
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/Joblistingpage" element={<div>Job Listing Page</div>} />
            <Route path="/Educationpage" element={<div>Education Page</div>} />
            <Route path="/Aboutuspage" element={<div>About Us Page</div>} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default Navibar;
