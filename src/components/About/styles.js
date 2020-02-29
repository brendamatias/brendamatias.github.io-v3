import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  text-align: justify;

  p {
    width: 530px;
    color: #fff;
    margin-bottom: 20px;
    font-weight: 300;
  }

  .image {
    margin-right: 100px;

    img {
      width: 280px;
      height: 280px;

      border-radius: 4px;
    }
    
    &::after {
      content: "";
      display: block;
      border: 3px solid #FF5C5C;
      border-radius: 4px;

      width: 100%;
      height: 100%;
      z-index: -1;
      position: relative;
      bottom: 276px;
      left: 20px;
    }
  }

  .icons {
    display: flex;
    align-items: center;
    margin-top: 30px;

    svg {
      font-size: 20px;
      color: #fff;
      margin-right: 10px;
      transition: all 300ms;  
    }
      
    a:hover {
      svg {
        color: #FF5C5C;
      }
    }
  }

  @media (max-width: 767px) { 
    flex-direction: column;

    p {
      width: 100%;
      margin-bottom: 10px;
    }

    .image {
      margin: 0 auto -155px auto;

      img {
        width: 200px;
        height: 200px;
      }
    
      &::after {
        height: 185px;
        bottom: 180px;
        left: 10px;
      }
    }

    .icons {
      margin-top: 20px;
    }
  }
`;
