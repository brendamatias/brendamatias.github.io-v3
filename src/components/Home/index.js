import React from "react";

import { Container } from "./styles";


export default function Home() {
  return (
    <Container>
      <div>
        <h3>Hi, my name is</h3>
        <h1 className="name">Brenda Matias</h1>
        <h1>Lorem ipsum is simply text.</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
        <button>PORTFOLIO</button>
      </div>
    </Container>
  );
}
