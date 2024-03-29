import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0F0E13;

  text-align: center;
  color: #ffffff99;

  padding: 35px 0;

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    svg {
      font-size: 20px;
      color: #ffffff66;
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
    font-size: 11px;
    text-align: center;

    padding: 15px 0;

    .icons {
      margin-bottom: 8px;

      svg {
        font-size: 16px;
      }
    }
  }
`;
