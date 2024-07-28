import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import NavBar from "./components/navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./Data/particlesConfig";

function App() {
  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const showParticles = location.pathname === "/";

  return (
    <div className="App">
      {/*particles.js */}
      lshowParticles && (
      <Particles id="particles" options={particlesConfig} init={handleInit} />)
      {/*navbar */}
      <NavBar />
      {/*main page content*/}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/resume" element={<Resume />} />
          <Route index path="/portfolio" element={<Portfolio />} />
          <Route index path="/skills" element={<Skills />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
