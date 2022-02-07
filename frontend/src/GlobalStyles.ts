import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #ffffff;

    --gray-100: #eaeaea;
    --gray-200: #e1e1e6;
    --gray-300: #c3c3c3;
    --gray-400: #6f6f6f;

    --black: #001414;

    --green-900: #002727;
    --green-800: #003b3b;
    --green-700: #004e4e;
    --green-600: #006262;
    --green-500: #007676;
    --green-400: #008989;
    --green-300: #009d9d;
    --green-200: #00b1b1;
    --green-100: #00d8d8;


  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  ul {
    list-style: none;
  }

  button {
    border: 0;
  }

  a {
    text-decoration: none;
  }
`;
