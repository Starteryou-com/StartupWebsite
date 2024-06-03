import { Card, Carousel, CarouselItem, Container } from "react-bootstrap";

function Featuredvideos() {
  return (
    <Container className="Featuredvideos">
      <Carousel fade>
        <CarouselItem>
          <div>
            <Card>
              <Card.Img />
              <Card.Body>
                <Card.Title>Video 1</Card.Title>
                <Card.Text>description 1</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Video 2</Card.Title>
              <Card.Text>description 2</Card.Text>
            </Card.Body>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Video 2</Card.Title>
              <Card.Text>description 3</Card.Text>
            </Card.Body>
          </Card>
        </CarouselItem>
      </Carousel>
    </Container>
  );
}

export default Featuredvideos;
