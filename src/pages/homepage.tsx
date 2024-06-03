import Navibar from "../components/Navibar";
import { Container } from "react-bootstrap";
import "../App.css";
import Banner from "../components/Banner";
import About from "../components/About";
import Featuredvideos from "../components/Featuredvideos";
function Homepage() {
  return (
    <Container id="Homepage">
      <Navibar />
      <Banner />
      <About />
      <Featuredvideos />
    </Container>
  );
}

export default Homepage;
