import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { members } from "./TeamsInfo";

function Team() {
  return (
    <Container>
      <div className="team mt-5" id="team">
        <h1 style={{ textAlign: "center" }}>Meet Our Team</h1>
        <Row>
          {members.map((d) => (
            <Col className="d-flex justify-content-center mt-1">
              <Card
                style={{ width: "18rem", alignItems: "center" }}
                className="card rounded"
              >
                <Card.Img
                  variant="top"
                  src={d.path}
                  className="rounded-circle"
                  style={{ width: 150, marginTop: 10 }}
                  alt="No image avaliable"
                />
                <Card.Body>
                  <Card.Title>{d.name}</Card.Title>
                  <Card.Text>{d.about}</Card.Text>
                </Card.Body>

                <Card.Footer>
                  <div>
                    {d.links.map((l) => (
                      <a href={l.link}>
                        <img src={l.icon} style={{ width: 30 }} />
                      </a>
                    ))}
                  </div>
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
