import NavBar from "./components/NavBar";
import "./index.css";
import Home from "./components/Home";
import Socials from "./components/Socials";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
