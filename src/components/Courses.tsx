import { Card, Container, Row, Col } from "react-bootstrap";
import { courses } from "./Coursedetails";

function Courses() {
  return (
    <Container className="coursecontainer">
      <Row style={{ alignItems: "center" }}>
        {courses.map((d) => (
          <Col className="d-flex justify-content-center">
            <Card
              style={{
                width: "25rem",
                textAlign: "justify",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <Card.Img src={d.cover} />
              <Card.Title>{d.title}</Card.Title>
              <Card.Text>{d.description}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Courses;
