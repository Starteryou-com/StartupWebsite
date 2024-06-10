// src/Features.js
import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const featuresData = [
  {
    title: "Feature 1",
    description: "Description for feature 1.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Feature 2",
    description: "Description for feature 2.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Feature 3",
    description: "Description for feature 3.",
    image: "https://via.placeholder.com/150",
  },
];

const Ourfeatures = () => {
  return (
    <Container>
      <h2 className="text-center my-4">Our Features</h2>
      <Row>
        {featuresData.map((feature, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={feature.image} />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="primary">Learn More</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Ourfeatures;
