import React from "react";

import { Content, Flex } from "./styles";
import { Container, Title } from "../../styles/styles";

export default function Skills() {
  return (
    <Container id="skills">
      <Title>Skills</Title>
      <Flex>
        <Content>
          <div>
            <span>Languages</span>
            <ul>
              <li>CSS3/Sass</li>
              <li>Delphi/Object Pascal</li>
              <li>HTML5</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <span>Frameworks</span>
            <ul>
              <li>Adonis</li>
              <li>Bootstrap</li>
              <li>Express</li>
              <li>React JS</li>
              <li>Vue.js</li>
            </ul>
          </div>
          <div>
            <span>Tools</span>
            <ul>
              <li>Bash</li>
              <li>Git/Github</li>
              <li>Gulp</li>
              <li>Insomnia</li>
              <li>MongoDB</li>
              <li>Postman</li>
            </ul>
          </div>
          <div>
            <span>Design</span>
            <ul>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe XD</li>
              <li>Figma</li>
            </ul>
          </div>
        </Content>
      </Flex>
    </Container>
  );
}
