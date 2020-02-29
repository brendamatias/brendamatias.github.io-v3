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

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: 768px) {
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

    .btn {
      background: #FF5C5C;
      border: none;
      color: #ffffff;
      font-weight: bold;
      font-size: 13px;
      border-radius: 20px;
      padding: 12px 46px;
      transition: all 300ms;  

      &:hover {
        background: #FF5C5Cdd;
      }
    }
  }

  @media (max-width: 767px) {
    .separator, .btn {
        display: none;
        width: 0;
        height: 0;
      }
    }
`;