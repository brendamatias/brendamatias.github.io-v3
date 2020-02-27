import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  margin-bottom: 290px;

  span, p {
    color: #fff;
  }

  span {
    font-size: 20px;
    font-weight: 600;
  }

  h3 {
    color: #ffffff55;
    font-size: 14px;
    margin: 12px 0 5px 0;
  }

  p {
    display: flex;
    align-items: center;
    max-width: 530px;

    font-size: 16px;
    font-weight: 300;
    margin-top: 25px;
    text-align: justify;

    &::before {
      content: "";
      display: block;
      background: #FF5C5C;
      width: 11.6px;
      height: 8px;
      margin-right: 20px;
    }
  }

  ul {
    button {
      content: "";
      display: block;
      background: #ffffff66;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 0 40px 12px 100px;
      cursor: pointer;
      border: none;
    }
  }

  .works {
    position: relative;
    width: 100%;

    div {
      position: absolute;
    }
  }

  .visible {
    visibility: visible;
    z-index: 0;
  }

  .not-visible {
    visibility: hidden;
    width: 0;
    z-index: -1;
  }

  .active button {
    background: #FF5C5C;
  }

  .disabled button {
    opacity: 0.6;   
    cursor: not-allowed;
  }
`;
