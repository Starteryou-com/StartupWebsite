import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navibar from "./components/Navibar";
import Vision from "./components/Vision";
import Team from "./components/Team";
import Features from "./components/Features";
import Mission from "./components/Mission";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Banner />
      <Features />
      <About />
      <Mission />
      <Vision />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
