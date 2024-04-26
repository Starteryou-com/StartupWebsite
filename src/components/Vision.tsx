import { Col, Container, Row } from "react-bootstrap";
import visionImg from "../assets/visionImg.png";

function Vision() {
  return (
    <div className="Vision rounded">
      <Container id="vision">
        <Row>
          <Col xs={12} md={6} xl={7}>
            <h1>Our Vision</h1>
            <a>
              Leadme envisions a world where every student has access to diverse
              job opportunities, gaining essential work experience and building
              a foundation for their future careers. We aspire to be the go-to
              Student Employment Hub, continually innovating and expanding our
              offerings to enhance the job-seeking journey for both students and
              employers.
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={visionImg}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Vision;
