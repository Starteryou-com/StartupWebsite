import Navibar from "../components/Navibar";
import { Container } from "react-bootstrap";
import "../App.css";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Jobbox from "../components/Jobbox";
import Imagejob from "../components/Imagejob";
import Titlejob from "../components/Titlejob";
import Jobdescription from "../components/Jobdescription";
import Footer from "../components/Footer";
function Joblistingpage() {
  return (
    <Container id="Joblistingpage">
      <Navibar />
      <h1>This is Job listing page</h1>
      <Search />
      <Filter />
      <Jobbox />
      <Imagejob />
      <Titlejob />
      <Jobdescription />
      <Footer />
    </Container>
  );
}

export default Joblistingpage;
