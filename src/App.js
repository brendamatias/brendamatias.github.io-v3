import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <GlobalStyle />
    </>
  );
}

export default App;
