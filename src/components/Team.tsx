import { Button, Col, Container, Row } from "react-bootstrap";
import rohithImg from "../assets/team/rohith.jpg";
import Card from "react-bootstrap/Card";

function Team() {
  return (
    <Container className="team">
      {members.map((d) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{d.name}</Card.Title>
              <Card.Text>{d.about}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Container>
  );
}

const members = [
  {
    name: "Venkata Sai Rohith",
    about: "hello guys how are you",
  },
  {
    name: "Anjali singh",
    about: "hi ppl how are you",
  },
  {
    name: "Bharadwaj",
    about: "hey guys how are you",
  },
];

export default Team;
