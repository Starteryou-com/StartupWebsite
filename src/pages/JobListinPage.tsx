import React from "react";
import Jobcard from "../components/Jobcard";
import {Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const JobListingPage = () => {
  const jobListings = [
    {
      image: "https://example.com/image1.jpg",
      title: "Cashier",
      description: "We are looking for a cashier.",
      applyLink: "https://example.com/apply1",
    },
    {
      image: "https://example.com/image2.jpg",
      title: "Store Attendant",
      description: "We need a store attendant.",
      applyLink: "https://example.com/apply2",
    },
  ];

  return (
    <Container>
      <h2 className="text-center my-4">Job Listings</h2>
      <Row>
        {jobListings.map((job, index) => (
          <Col md={6} key={index}>
            <Jobcard
              image={job.image}
              title={job.title}
              description={job.description}
              applyLink={job.applyLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default JobListingPage;
