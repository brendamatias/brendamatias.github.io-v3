import React from "react";
import { bool } from "prop-types";

import { StyledMenu } from "./styles";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experiences">Experiences</a>
      <a href="#cases">Cases</a>
      <a href="#contact">Contact</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
