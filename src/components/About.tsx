import { Container, Row, Col } from "react-bootstrap";

function About() {
  //about component for homepage.
  return (
    <Container className="About">
      <Row>
        <Col xs={12} md={7} xl={6}>
          <h1>About the description</h1>
          <a>something about the page</a>
        </Col>
        <Col xs={12} md={7} xl={6}>
          <a>image</a>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
