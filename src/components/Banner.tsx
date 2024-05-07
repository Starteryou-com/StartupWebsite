import "../App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import prsn from "../assets/prsn.png";

function Banner() {
  return (
    <section className="banner d-flex align-items-center" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="bannerText">
            <h1>Starteryou.</h1>
            <h3>Find your path, Build your future</h3>
          </Col>
          <Col xs={12} md={6} xl={5} className="prsnImage">
            <div className="prsn">
              <img src={prsn} />
            </div>
          </Col>
        </Row>
        <div className="col align-self-center">
          <Button className="btn rounded" variant="outline-secondary">
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
