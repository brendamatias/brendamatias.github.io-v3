import styled from "styled-components";

export const Container = styled.div`
  h2 {
    font-size: 36px;
    color: #ffffffbb;

    margin: 80px 0 22px 0;
    text-align: center;
  }

  margin-bottom: 80px;
`;

export const Content = styled.div`
display: grid;
justify-content: center;

  p {
    font-size: 16px;
    color: #fff;
    text-align: center;
    font-weight: 300;

    max-width: 650px;
    margin: 0 auto;
  }

  .btn {
    background: none;
    border: 2px solid #FF5C5C;
    color: #FF5C5C;
    padding: 12px 40px;
    margin: 45px auto 60px auto;
    text-transform: uppercase;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0px;

  div {
    margin: 10px 0;
  }

  .margin {
    margin-left: 50px;
  }

  span {
    font-weight: 600;
  }

  svg {
    color: #ffffff;
    margin-right: 10px;
    transition: all 300ms;  
  }

  a:hover {
    svg {
      color: #FF5C5C;
    }
  }
`;
