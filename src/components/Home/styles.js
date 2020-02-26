import styled from 'styled-components';

export const Container = styled.header`
  height: 89vh;
  display: flex;
  align-items: center;

  padding: 30px 0;

  h1 {
    color: #ffffff88;
    font-size: 64px;
    line-height: 64px;
  }

  .name {
    color: #ffffffdd;
  }

  h3 {
    color: #FF5C5C;
    font-size: 18px;
    margin-bottom: 20px;
  }

  p {
    margin: 40px 0 55px 0; 
    color: #ffffff88;
    max-width: 400px;
  }

  button {
    background: none;
    border: 2px solid #FF5C5C;
    color: #FF5C5C;
    padding: 12px 0;
    width: 160px;
  }
`;
