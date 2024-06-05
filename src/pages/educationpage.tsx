import Navibar from "../components/Navibar";
import { Container } from "react-bootstrap";
import "../App.css";
import Text from "../components/Text";
import Description from "../components/description";
import React from 'react';
import Filter from "../components/Filter";
import Tiles from "../components/Tiles";
import Tile2 from "../components/Tile2";
import Tile3 from "../components/Tile3";
import Image from "../components/Image";
import Faq from "../components/Faq";
import FaqText from "../components/FaqText";
import Footer from "../components/Footer";
import Titlejob from "../components/Titlejob";
import Titleedu from "../components/Titleedu";
import Edudescription from "../components/Edudescription";

const styles = {
  Educationpage: {
    backgroundColor: '#ededed',
  },
};

const Educationpage = (props) => {
  return (
    <Container id="Educationpages">  
    <div style={styles.Educationpage}>
    {props.children}
  </div>
  <Navibar />
  <Text />
  <Description />
  <Filter />
  <Tiles/>
  <Image />
  <Titleedu />
  <Edudescription />
  <Faq />
  <FaqText />
  <Footer />
  </Container>
  
  );
};

export default Educationpage;
