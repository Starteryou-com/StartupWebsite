import Navibar from "../components/Navibar";
import { Container } from "react-bootstrap";
import "../App.css";
import Banner from "../components/Banner";

import Featuredvideos from "../components/Featuredvideos";
import Footer from "../components/Footer";
function Homepage() {
  return (
    <Container id="Homepage">
      <Navibar />
      <Banner />

      <Featuredvideos />
      <Footer />
    </Container>
  );
}

export default Homepage;
