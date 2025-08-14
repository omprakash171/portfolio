import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";
import Learnings from "./components/Learnings";
import Blog from "./components/Blog";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Learnings />
      <Blog />
    </div>
  );
};

export default App;
