import "../App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import prsn from "../assets/prsn.png";

function Banner() {
  return (
    <section className="banner d-flex align-items-center" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={6} className="bannerText">
            <h1>Starteryou.</h1>
            <h3>Find your path, Build your future</h3>
            <Button className="btn rounded" variant="outline-secondary">
              Learn More
            </Button>
            <Button className="btn rounded" variant="primary">
              Try for Free
            </Button>
          </Col>
          <Col xs={12} md={5} xl={6} className="prsnImage">
            <div className="prsn">
              <img src={prsn} />
            </div>
          </Col>
        </Row>
        <div className="col align-self-center"></div>
      </Container>
    </section>
  );
}

export default Banner;
