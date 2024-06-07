import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <Container>
        <hr></hr>
        <Row>
          <Col xs={6} md={3}>
            <h1>Starteryou</h1>
          </Col>
          <Col xs={6} md={9}>
            <Row>
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
                    <a
                      href="https://www.facebook.com/people/Starter-You/pfbid0cDVAWPa4hqRpbPhD5QzCgc5U36K1pLYkPWYRdwc4iAL9A1ahspYw1bYdbFxmLq4Wl/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/starteryou_official/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/starteryou/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@Starteryou"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Youtube Channel
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@starteryou_official"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TikTok
                    </a>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
