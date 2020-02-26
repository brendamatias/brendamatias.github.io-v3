import React from "react";

import { Container, Navbar } from "./styles";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Brenda Matias" />

      <Navbar>
        <ul>
          <li>Home</li>
          <li>About</li> 
          <li>Experience</li>
          <li>Cases</li>
        </ul>

        <div className="separator">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <button>CONTATO</button>
      </Navbar>
    </Container>
  );
}
