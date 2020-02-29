import styled from "styled-components";

export const Container = styled.div`
  height: 89vh;
  display: flex;
  align-items: center;

  padding: 30px 0;

  span {
    color: #ff5c5cdd;
  }

  h1 {
    color: #ffffff88;
  }

  .name {
    color: #ffffffdd;
  }

  h3 {
    color: #ff5c5c;
    font-size: 18px;
    margin-bottom: 20px;
  }

  p {
    margin: 40px 0 55px 0;
    color: #ffffff88;
    text-align: justify;
    max-width: 400px;
    font-size: 18px;
  }

  .btn {
    background: none;
    border: 2px solid #ff5c5c;
    color: #ff5c5c;
    padding: 12px 40px;
  }

  @media (max-width: 767px) {
    p {
      margin-top: 20px;
      width: 100%;
      font-size: 16px;
    } 
  }
`;
