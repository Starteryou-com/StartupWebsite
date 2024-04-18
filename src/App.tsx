import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navibar from "./components/Navibar";
import Vision from "./components/Vision";
import Team from "./components/Team";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Navibar />
      <Banner />
      <Features />
      <About />
      <Vision />
      <Team />
      <Contact />
    </>
  );
}

export default App;
