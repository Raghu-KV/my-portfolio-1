import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import "./components/Scroll/scroll.css";

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800">
      <NavBar />
      <Home />
      <About />
      <Tools />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
