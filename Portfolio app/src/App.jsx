import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Portfolio />
    </>
  );
}

export default App;
