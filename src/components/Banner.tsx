import "../App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import prsn from "../assets/prsn.png";

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="bannerText">
            <h1>LeadMe.</h1>
            <h3>A friendly way to find a job</h3>
          </Col>
          <Col xs={12} md={6} xl={5} className="prsnImage">
            <div className="prsn">
              <img src={prsn} />
            </div>
          </Col>
        </Row>
        <Button className="btn rounded" variant="outline-secondary">
          Learn More
        </Button>
      </Container>
    </section>
  );
}

export default Banner;
