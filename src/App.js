import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <GlobalStyle />
    </>
  );
}

export default App;
