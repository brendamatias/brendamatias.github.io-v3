import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <div className="root">
        <Header />
        <Home />
        <About />
        <Skills />
        <Experiences />
        <Contact />
      </div>

      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
