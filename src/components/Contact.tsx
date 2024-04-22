import { Col, Container, Row } from "react-bootstrap";

function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <h2>GET IN TOUCH</h2>
            <a>
              please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <a>contact info</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
