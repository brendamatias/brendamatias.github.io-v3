import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  } 

  html, body, #root {
    height: 100%;
    background: #131219;
  }

  .root {
    width: 70%;
    margin: 0 auto;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Calibri', sans-serif;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: 64px;
    line-height: 64px;
  }

  h2 {
    font-size: 36px;
  }

  p {
    font-size: 16px;
  }

  /* Telefones em paisagem a tablet em retrato */
  @media (max-width: 767px) {
    h1 {
      font-size: 32px;
      line-height: 38px;
    }
    
    h2 {
      font-size: 26px;
    }

    .root {
      width: 100%;
      padding: 0 30px;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1200px) { 
    h1 {
      font-size: 48px;
      line-height: 54px;
    }
    
    .root {
      width: 100%;
      padding: 0 80px;
    }
  }
`; 