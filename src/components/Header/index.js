
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks';

import { Container, Navbar } from "./styles";

import logo from "../../assets/logo.png";

import Burger from "../Burger";
import Menu from "../Menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Container ref={node}>
      <img src={logo} alt="Brenda Matias" />

      <Navbar>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        
        <div className="separator">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <a href="#contact" className="btn">
          CONTACT
        </a>
      </Navbar>
    </Container>
  );
}
