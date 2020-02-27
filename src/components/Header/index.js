import React from "react";

import { Container, Navbar } from "./styles";

import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Brenda Matias" />

      <Navbar>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <li><a href="#cases">Cases</a></li>
        </ul>

        <div className="separator">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <a href="#contact" className="btn">CONTATO</a>
      </Navbar>
    </Container>
  );
}
