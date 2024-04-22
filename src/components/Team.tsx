import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { members } from "./TeamsInfo";
import instagram from "../assets/team/insta.jpg";

function Team() {
  return (
    <Container>
      <div className="team" id="team">
        <h1>Meet Our Team</h1>
        <Row>
          {members.map((d) => (
            <Col className="d-flex justify-content-center">
              <Card
                style={{ width: "18rem", alignItems: "center" }}
                className="card rounded"
              >
                <Card.Img
                  variant="top"
                  src={d.path}
                  className="rounded-circle"
                  style={{ width: 150, marginTop: 10 }}
                />
                <Card.Body>
                  <Card.Title>{d.name}</Card.Title>
                  <Card.Text>{d.about}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-left">
                  <a href={d.insta}>
                    <img src={instagram} style={{ width: 30 }} />
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Team;
