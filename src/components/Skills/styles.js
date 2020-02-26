import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;


export const Content = styled.div`
  display: flex;

  div {
    margin-right: 100px;
  }

  div:last-child {
    margin-right: 0px;
  }

  color: #fff;

  span {
    display: flex;
    align-items: center;

    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;

    margin-bottom: 20px;

    &::before {
      content: "";
      display: block;
      background: #FF5C5C;
      width: 8px;
      height: 8px;
      margin-right: 20px;
    }
  }

  li {
    margin-top: 5px;
  }
`;
