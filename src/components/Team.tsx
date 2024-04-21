import { Button, Col, Container, Row } from "react-bootstrap";
import rohithImg from "../assets/team/rohith.jpg";
import Card from "react-bootstrap/Card";

function Team() {
  return (
    <Container>
      <div className="team">
        <h1>Meet Our Team</h1>
        <Row>
          {members.map((d) => (
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "18rem" }} className="card rounded">
                <Card.Img variant="top" src={rohithImg} />
                <Card.Body>
                  <Card.Title>{d.name}</Card.Title>
                  <Card.Text>{d.about}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

const members = [
  {
    name: "Venkata Sai Rohith",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    name: "Anjali singh",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    name: "Bharadwaj",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    name: "Venkata Sai Rohith",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    name: "Venkata Sai Rohith",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    name: "Venkata Sai Rohith",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    name: "Venkata Sai Rohith",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
];

export default Team;
