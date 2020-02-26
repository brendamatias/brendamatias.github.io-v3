import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faBehance,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import { Container, Content, Footer } from "./styles";

export default function Contact() {
  return (
    <Container>
      <h2>Contact</h2>

      <Content>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
        <button>Contact</button>

        <Footer>
          <div>
            <span>Contact info</span>
            <div><FontAwesomeIcon icon={faLinkedinIn} /> brenda@gmailcom</div>
            <div><FontAwesomeIcon icon={faLinkedinIn} /> +55 81 998626092</div>
          </div>

          <div className="margin">
            <span>Follow me</span>

            <div>
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faBehance} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </Footer>
      </Content>
    </Container>
  );
}
