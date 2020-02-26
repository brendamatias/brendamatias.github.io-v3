import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faBehance,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div className="icons">
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faBehance} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faGithub} />
      </div>

      <span>Copyright 2020 - Todos os direitos reservados à Brenda Matias</span>
    </Container>
  );
}
