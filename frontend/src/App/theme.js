import { createGlobalStyle } from "styled-components";

export const theme = {
  darkGray: "#45525b",
  lightGray: "#a8bbc6",
  darkOrange: "#fe7e02",
  lightOrange: "#f9b24e",
  background: "#4e4e4e",
};

export const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin : 0;
    /* box-sizing: border-box; */
    font-size: 16px;
  };

  button {
    cursor: pointer;
  };

  body {
    background: ${theme.background};
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  };

`;