import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <section className="footer">
      <Container>
        <hr></hr>
        <Row>
          <Col>
            <h1>LeadMe</h1>
          </Col>
          <Col>
            <ul style={{ listStyle: "none" }}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#mission">Our Mission</a>
              </li>
              <li>
                <a href="#vision">Our vision</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul style={{ listStyle: "none" }}>
              <li>
                <a>Facebook</a>
              </li>
              <li>
                <a>Instagram</a>
              </li>
              <li>
                <a>Linkedin</a>
              </li>
              <li>
                <a>X</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul style={{ listStyle: "none" }}>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Terms of Service</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
