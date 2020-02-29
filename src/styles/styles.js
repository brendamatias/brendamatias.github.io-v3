import styled from "styled-components";

export const Container = styled.div`
  &::before, &&::after {
    display: block !important;
    content: "";
    width: 150px;
    height: 1px;
    background: #ff5c5c;
  }

  &::before {
    margin: 0 auto 80px auto;
  }
  &&::after {
    margin: 80px auto 0 auto;
  }
  
  @media (max-width: 767px) { 
    &::before, &&::after {
      width: 0px;
      height: 0px;
    }

    &::before {
      margin: 0 auto 60px auto;
    }

    &&::after {
      margin: 60px auto 0 auto;
    }
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;

  color: #ffffffbb;

  margin-bottom: 55px;

  &::after {
    margin-left: 35px;
    content: "";
    width: 250px;
    height: 1px;
    background: #FF5C5C33;
  }
  
  @media (max-width: 767px) { 
    margin-bottom: 30px;
    width: 100%;
    white-space: nowrap;

    &::after {
      margin-left: 20px;
      width: 100%;
    }
  }
`;
