import { createGlobalStyle } from "styled-components";
import "@fontsource/rajdhani";
import "@fontsource/zen-maru-gothic";

const GlobalStyle = createGlobalStyle`
*,*::before, *::after {
    margin: 0;
    padding: 0;
}

body{
    font-family:  "Rajdhani";
    overflow-x: hidden;
    background-color: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};
    transition: background-color 0.5s, color 0.5s;
}


h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;
}

 `;

export default GlobalStyle;
