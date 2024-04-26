import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Contact() {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7} className="contactinfo">
            <h2>GET IN TOUCH</h2>
            <a>
              please fill out the form below to send us an email and we will get
              back to you as soon as possible.
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Container className="mailbox rounded">
              <Row>
                <Col xs={12} md={6} xl={6}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  ></input>
                </Col>
                <Col xs={12} md={6} xl={6}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  ></input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Please enter message."
                  />
                </Col>
              </Row>
              <Button>Submit</Button>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
