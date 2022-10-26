import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --bg: black;
        --main: white;
        --sub: #C7C7C7;
        --primary: blue;
        --secondary: yellow;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 10px;
        color: var(--main);
        font-family: 'Roboto', sans-serif;
        /* font-family: 'Roboto Mono', monospace; */
        /* font-family: 'Ubuntu', sans-serif; */
    }

    button {
        background: none;
        border: none;
        outline: none;
    }
    
    input {
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
    }
`;

const GlobalStyles = (): JSX.Element => {
  return <GlobalStyle />;
};

export default GlobalStyles;
