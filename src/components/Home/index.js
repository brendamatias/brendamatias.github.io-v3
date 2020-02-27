import React from "react";

import { Container } from "./styles";


export default function Home() {
  return (
    <Container id="home">
      <div>
        <h1 className="name">hey! i'm <span>Brenda Matias</span>.</h1>
        <h1>Full Stack Software Enginner.</h1>
        <p>I am passionate about software development, where I seek to improve myself in technologies that simplify and evolve people's daily lives. I currently reside in Recife, Pernambuco and have experience in full stack development.</p>
        
        <a href="#cases" className="btn">PORTFOLIO</a>
      </div>
    </Container>
  );
}
