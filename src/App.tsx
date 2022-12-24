import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import "animate.css/animate.min.css";

const App = () => {
  return (
    <div id="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
