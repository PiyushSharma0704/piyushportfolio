import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import SocialLinks from "./Components/SocialLinks";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";
// import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
        <div className="app">      
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
        <Footer />
        </div>
    </div>
  );

}

export default App;
