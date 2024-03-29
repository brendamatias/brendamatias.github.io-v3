import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Content } from "./styles";
import { Container, Title } from "../../styles/styles";

import rodaacessivel from "../../assets/roda-acessivel.png";

export default function Cases() {
  return (
    <Container id="cases">
      <Title>Cases</Title>
      <Content>
        <img src={rodaacessivel} alt="Brenda Matias" />
        <div>
          <span>Roda Acessível</span>
          <p>Roda Acessível is an application that aims to provide information about accessible places in the city of Recife to disabled people, especially wheelchair users.</p>

          <ul>
            <li>React JS</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Docker</li>
            <li>Postgres</li>
            <li>React Native</li>
          </ul>

          <a href="https://github.com/brendamatias/roda-acessivel-web" alt="Roda Acessível Github" target="_blank" rel="nofollow noopener noreferrer" >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </Content>
    </Container>
  );
}
