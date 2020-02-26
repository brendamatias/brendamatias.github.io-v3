import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 0;

  * {
    font-family:'Roboto', sans-serif;
  }
`;

export const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      padding: 0 30px;
      color: #ffffffdd;
      font-size: 13px;

      text-transform: uppercase;
    }
  }

  .separator {
    margin: 0 60px 0 30px;

    div {
      content: "";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #ffffffaa;
      margin-bottom: 4px;
    }

    div:last-child {
      margin-bottom: 0px;
    }
  }

  button {
    background: #FF5C5C;
    border: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 13px;
    border-radius: 20px;
    padding: 12px 46px;
  }
`;