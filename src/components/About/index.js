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
    <Container>
      <Title>About Me</Title>
      <Content>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            dummy text of the printing and.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <div className="icons">
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faBehance} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
        <div className="image">
          <img src={perfil} alt="Brenda Matias" />
        </div>
      </Content>
    </Container>
  );
}
