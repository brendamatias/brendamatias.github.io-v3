import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  margin-bottom: 290px;

  a, p {
    color: #fff;
  }

  a {
    font-size: 20px;
    font-weight: 600;
  }

  span {
    margin: 4px 0 16px 0;
  }

  span, h3 {
    display: block;
    color: #ffffff55;
  }

  h3 {
    font-size: 14px;
    margin: 12px 0 5px 0;
  }

  p {
    display: flex;
    align-items: center;
    max-width: 530px;

    font-weight: 300;
    margin-top: 25px;
    text-align: justify;

    &::before {
      content: "";
      display: block;
      background: #FF5C5C;
      min-width: 8px;
      min-height: 8px;
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

    
  @media (max-width: 767px) { 
    margin-bottom: 320px;

    span {
      font-size: 16px;
    }

    h3 {
      font-size: 12px;
    }

    p {
      margin-top: 15px;

      &::before {
        width: 16px;
        height: 6px;
        margin-right: 15px;
      }
    }

    ul {
      button {
        margin: 0 25px 12px 8px;
      }
    }
  }
`;
