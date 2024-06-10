import Navibar from "../components/Navibar";
import {Container} from "react-bootstrap";
import "../App.css";
import Jobtab from "../components/Jobtab";
import Footer from "../components/Footer";
import Jobcard from "../components/Jobcard";
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
