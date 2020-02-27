import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Content } from "./styles";
import { Container, Title } from "../../styles/styles";

import rodaacessivel from "../../assets/roda-acessivel2.png";

export default function Cases() {
  return (
    <Container>
      <Title>Cases</Title>
      <Content>
        <img src={rodaacessivel} alt="Brenda Matias" />
        <div>
          <span>Roda Acessível</span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and  text of the printing and typesetting dummy text of the printing and.</p>

          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Docker</li>
            <li>Postgres</li>
            <li>React Native</li>
          </ul>

          <a target="_blank" href="https://github.com/brendamatias/roda-acessivel-web" alt="Roda Acessível Github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </Content>
    </Container>
  );
}
