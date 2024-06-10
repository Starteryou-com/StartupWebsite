import Navibar from "../components/Navibar";
import {Container} from "react-bootstrap";
import "../App.css";
import Footer from "../components/Footer";
import Jobcard from "../components/Jobcard";
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
function Joblistingpage() {
  return (
    <Container className="Joblistingpage mt-5 pt-5">
      <Navibar />
      <h1>This is Job listing page</h1>
      <Jobcard />
      <Footer />
    </Container>
  );
}

export default Joblistingpage;
