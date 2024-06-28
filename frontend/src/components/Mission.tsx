import { Col, Container, Row } from "react-bootstrap";

function Mission() {
  return (
    <div className="mission rounded mt-2">
      <Container id="mission">
        <Row>
          <Col xs={12} md={12} xl={12}>
            <h1>Our Mission</h1>
          </Col>
          <Col className="mission-message" xs={12} md={12} xl={12}>
            <a>
              Starteryou is dedicated to empowering students by providing a
              vibrant and inclusive platform for discovering career
              opportunities. We foster a supportive community that bridges the
              gap between students and employers, facilitating skill development
              and guiding them towards meaningful career paths. We aim to
              transform the student learning experience, equipping individuals
              with essential career skills often overlooked in traditional
              education settings. We're committed to providing the tools and
              opportunities necessary for students to succeed in their future
              careers. Our commitment to innovation, affordability, and
              collaboration ensures that every student can confidently navigate
              their way to valuable work experiences year-round.
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Mission;
