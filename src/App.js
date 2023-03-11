import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sociallinks from "./components/Sociallinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Sociallinks />
      <Skills />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
