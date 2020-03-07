import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faBehance,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import { Content } from "./styles";
import { Container, Title } from "../../styles/styles";

import perfil from "../../assets/perfil.jpg";

export default function About() {
  return (
    <Container id="about">
      <Title>About Me</Title>
      <Content>
        <div className="image">
          <img src={perfil} alt="Brenda Matias" />
        </div>
        <div>
          <p>
            Hello! I'm Brenda Matias, a computer engineer, who likes to build 
            things for the internet.
          </p>
          <p>
            I graduated in 2019.2 at Maurício de Nassau University. Lorem Ipsum 
            has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <div className="icons">
            <a href="https://www.linkedin.com/in/brenda-matias/" alt="Linkedin Brenda Matias" target="_blank" rel="nofollow noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.behance.net/brendamatias" alt="Behance Brenda Matias" target="_blank" rel="nofollow noopener noreferrer">
              <FontAwesomeIcon icon={faBehance} />
            </a>
            <a href="https://www.instagram.com/brendamatiass_/" alt="Instagram Brenda Matias" target="_blank" rel="nofollow noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/brendamatias" alt="Github Brenda Matias" target="_blank" rel="nofollow noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </Content>
    </Container>
  );
}
