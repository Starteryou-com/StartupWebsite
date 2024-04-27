import { Col, Container, Row } from "react-bootstrap";

function Mission() {
  return (
    <div className="mission rounded mt-2">
      <Container>
        <Row>
          <Col className="d-flex align-items-center m-5">
            <h1>Our Mission</h1>
          </Col>
          <Col className="m-5">
            <a>
              At Leadme, our mission is to empower the aspirations of students
              by providing a dynamic and inclusive platform for discovering
              entry level and minimum-wage job opportunities. We are dedicated
              to fostering a supportive community that bridges the gap between
              students and employers, facilitating skill development, and
              igniting the path towards meaningful career journeys. Leadme is
              committed to innovation, affordability, and collaboration,
              ensuring that every student can confidently navigate their way to
              valuable work experiences year round.
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Mission;
