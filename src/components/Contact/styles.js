import styled from "styled-components";

export const Container = styled.div`
  h2 {
    color: #ffffffbb;

    margin: 80px 0 22px 0;
    text-align: center;
  }

  margin-bottom: 80px;
  
  @media (max-width: 767px) { 
    h2 {
      text-align: left;
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      &::after {
        margin-left: 35px;
        content: "";
        width: 250px;
        height: 1px;
        background: #FF5C5C33;
      }
    }
  }
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
  
  @media (max-width: 767px) { 
    p {
      text-align: justify;
    }

    .btn {
      margin: 35px auto 30px auto;
    }
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
  
  @media (max-width: 767px) { 
    flex-direction: column;

    div {
      margin: 10px 0;
    }

    .margin {
      margin-left: 0px;
    }
  }
`;
