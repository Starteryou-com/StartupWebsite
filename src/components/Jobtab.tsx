import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { Jobsposted } from "./Jobdescriptiontab";
import React from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Jobtab() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container className="jobscontainer">
      <Row style={{ alignItems: "center" }}>
        {Jobsposted.map((d) => (
          <Col className="d-flex justify-content-center">
            <Card
              style={{
                width: "18rem",
                textAlign: "justify",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <Card.Title>{d.title}</Card.Title>
              <Card.Text>{d.description}</Card.Text>
              <Card.Footer>
                <Button onClick={() => setModalShow(true)}>Apply</Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  title={d.title}
                  description={d.description}
                />
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Jobtab;
