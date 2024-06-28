import Navibar from "../components/Navibar";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "../App.css";
import Footer from "../components/Footer";
import Courses from "../components/Courses";

function Educationpage() {
  return (
    <Container className="Educationpage">
      <Navibar />
      <div className="pt-5">
        <h1>Education</h1>
        <a>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure
        </a>
        <br />

        <Form className="mt-3">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="search courses"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" variant="dark">
                Search
              </Button>
            </Col>
          </Row>
        </Form>

        <Button className="float-end mb-1 mt-3" variant="dark">
          Filters
        </Button>
        <Courses />
        <h2 className="mt-3">FAQ'S</h2>
        <a>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure
        </a>
        <Footer />
      </div>
    </Container>
  );
}

export default Educationpage;
