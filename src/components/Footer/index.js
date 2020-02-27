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

      <span>Copyright 2020 - Todos os direitos reservados à Brenda Matias</span>
    </Container>
  );
}
