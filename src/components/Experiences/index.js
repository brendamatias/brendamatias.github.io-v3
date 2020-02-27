import React, { useState } from 'react';

import { Content } from './styles';
import { Container, Title } from "../../styles/styles";

export default function Experiences() {
  const [work, setWork] = useState("kurier");
  
  function getWork(change) {
    setWork(change);
  }

  return (
    <Container id="experiences">
      <Title>Experiences</Title>
      <Content>
        <ul>
          <li className="disabled"><button></button></li>
          <li className={work === "kurier" ? "active" : ""}><button onClick={() => getWork("kurier")}></button></li>
          <li className={work === "mv" ? "active" : ""}><button onClick={() => getWork("mv")}></button></li>
        </ul>
        <div className="works">
          <div id="kurier" className={work === "kurier" ? "visible" : "not-visible"}>
            <span>Kurier (Mk Tecnologia em Informação Ltda)</span>
            <h3>Agosto 2019 - Fevereiro 2020</h3>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and.</p>
          </div>
          <div id="mv" className={work === "mv" ? "visible" : "not-visible"}>
            <span>MV Sistemas</span>
            <h3>Agosto 2018 - Agosto 2019</h3>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and.</p>
          </div>
        </div>
      </Content>
    </Container>
  );
}
