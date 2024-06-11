import "../App.css";
import Banner from "../components/Banner";
import Navibar from "../components/Navibar";
import Vision from "../components/Vision";
import Team from "../components/Team";
import Features from "../components/Features";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import ContactUs from "./ContactUs";

function Aboutuspage() {
  return (
    <div id="Aboutuspage">
      <Navibar />
      <Banner />
      <Features />
      <Mission />
      <Vision />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Aboutuspage;
