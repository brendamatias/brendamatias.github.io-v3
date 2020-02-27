import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faBehance,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import { Container, Content, Footer } from "./styles";

export default function Contact() {
  return (
    <Container id="contact">
      <h2>Contact</h2>

      <Content>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
        <a href="mailto:brendamatias.sobral@gmail.com" target="_blank" rel="nofollow noopener noreferrer" className="btn">Contact</a>

        <Footer>
          <div>
            <span>Contact info</span>
            <div><FontAwesomeIcon icon={faEnvelope} /> brendamatias.sobral@gmail.com</div>
            <div><FontAwesomeIcon icon={faPhoneAlt} /> +55 81 998626092</div>
          </div>

          <div className="margin">
            <span>Follow me</span>

            <div>
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
        </Footer>
      </Content>
    </Container>
  );
}
