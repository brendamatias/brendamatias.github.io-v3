import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  color: #FFFFFF;
  text-align: justify;

  img {
    max-width: 800px;
    margin-right: 80px;
  }

  span {
    display: flex;
    align-items: center;

    font-size: 24px;
    font-weight: 600;

    &::before {
      content: "";
      display: block;
      background: #FF5C5C;
      width: 10px;
      height: 10px;
      margin-right: 10px;
    }
  }

  p {
    width: 285px;
    font-weight: 300;
    margin: 25px 0 25px 0;
  }

  ul {
    max-width: 285px;
    display: flex;
    flex-wrap: wrap;
    text-align: right;

      li {
        color: #FFFFFF77;
        font-size: 12px;
        margin: 10px 10px 0 0;
    }
  }

  svg {
    margin-top: 10px;
    font-size: 18px;
    float: right;
    color: #FFFFFFdd;
    transition: all 300ms;  
  }
  
  a:hover {
    svg {
      color: #FF5C5C;
    }
  }

  
  @media (max-width: 767px) {   
    flex-direction: column;
    margin-bottom: -10px;

    img {
      max-width: 300px;
      margin: 0px auto; 
    }

    span {
      font-size: 22px;

      &::before {
        width: 8px;
        height: 8px;
      }
    }

    p {
      width: 100%;
      margin: 15px 0 10px 0;
    }

    ul {
      max-width: 100%;

        li {
          font-size: 11px;
          margin: 7px 7px 0 0;
      }
    }

    svg {
      margin-top: 8px;
      float: left;
    }
  }
`;
