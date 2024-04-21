import { Col, Container, Row } from "react-bootstrap";
import visionImg from "../assets/visionImg.png";

function Vision() {
  return (
    <Container className="Vision rounded" id="vision">
      <Row>
        <Col xs={12} md={6} xl={7}>
          <h1>Our Vision</h1>
          <a>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </a>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <img src={visionImg}></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Vision;
