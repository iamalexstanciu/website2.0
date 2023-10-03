import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { dark } from "../src/style/Themes.js";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <main className="App" ref={containerRef}>
          App File
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
