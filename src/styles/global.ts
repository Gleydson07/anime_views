import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body{
    padding-bottom: 20px;
    background: #110920;
    -webkit-font-smooth: antialiased;
  }

  body, input, text-area, button{
    font-family: 'Nunito', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;