import "../App.css";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Navibar from "../components/Navibar";
import Vision from "../components/Vision";
import Team from "../components/Team";
import Features from "../components/Features";
import Mission from "../components/Mission";
import Footer from "../components/Footer";

function Aboutuspage() {
  return (
    <div id="Aboutuspage">
      <Navibar />
      <Banner />
      <Features />
      <Mission />
      <Vision />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default Aboutuspage;
