import styled from "styled-components";
import { lighten } from "polished";

export const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;

  * {
    font-family:'Roboto', sans-serif;
  }

  a {
    color: #ffffffdd;
    text-transform: uppercase;
    transition: all 300ms;

    
    &:hover {
      color: #ff5c5cdd;
    }
  }
  
  @media (min-width: 768px) {
    align-items: center;
    flex-wrap: wrap;

    a {
      padding: 0 5px;
      margin: 0 25px;
      font-size: 13px;
    }
  }
  
  @media (max-width: 767px) {
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-180%)'};
    justify-content: center;
    flex-direction: column;
    background: ${lighten(0.04, "#131219")};
    height: 100vh;
    text-align: center;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.4s ease-in-out;
    width: 70%;
    
    a {
      font-size: 16px;
      padding: 20px 0;
    }
  }
`;
