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
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;

  font-size: 36px;
  color: #ffffffbb;

  margin-bottom: 40px;

  &::after {
    margin-left: 35px;
    content: "";
    width: 250px;
    height: 1px;
    background: #FF5C5C33;
  }
`;
