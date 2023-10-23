import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { dark } from "../src/style/Themes.js";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import Home from "./sections/Home";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Loader from "./components/Loader";
import { ParallaxProvider } from "react-scroll-parallax";
import Prices from "./sections/Prices";
// import Team from "./sections/Team";
import Contact from "./sections/Contact";
import "./style/footer.css";
import Footer from "./components/Footer";

const ButtonTheme = styled.button`
  display: inline-block;
  position: absolute;
  top: 12.5%;
  right: 3%;
  padding: 0.3%;
  color: white;
  width: 7%;
  z-index: 200;
  border-radius: 30px;
  background-color: gray;
  color: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 2px solid white;
    border-radius: 30px;
    padding: 0.5em;
    background: black;
    color: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};
    transform: translateY(-0.1em);
    transition: transform 0.1s ease;
  }

  button:hover .button_top {
    /* Pull the button upwards when hovered */
    transform: translateY(-0.33em);
  }

  button:active .button_top {
    /* Push the button downwards when pressed */
    transform: translateY(0);
  }
`;

function App() {
  const containerRef = useRef(null);
  const [showFooter, setShowFooter] = useState(false);

  const [theme, setTheme] = useState("dark"); // Default theme is dark

  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleFooter = (props) => {
    setShowFooter(props);
  };

  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    // Apply the theme class to the body element
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <ParallaxProvider>
        <ButtonTheme
          onClick={toggleTheme}
          style={{
            position: "absolute",
            zIndex: 100,
          }}>
          <span class="button_top">
            {theme === "dark" ? "More Light" : "Dark Side"}
          </span>
        </ButtonTheme>
        <GlobalStyle theme={theme} />
        <ThemeProvider theme={dark}>
          <LocomotiveScrollProvider
            options={{
              smooth: true,
              // ... all available Locomotive Scroll instance options
              smartphone: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            }}
            watch={
              [
                //..all the dependencies you want to watch to update the scroll.
                //  Basicaly, you would want to watch page/location changes
                //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
              ]
            }
            containerRef={containerRef}>
            <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <AnimatePresence>
                <section id="home">
                  <Home />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="portfolio">
                  <Portfolio />
                </section>
                <section id="prices">
                  <Prices />
                </section>
                {/* <section id="team">
                  <Team />
                </section> */}
                <section id="contact">
                  <Contact />
                </section>
              </AnimatePresence>
              <div className="open-footer">
                Hey there, curious soul, fancy a peek at our fancy footer?
                <div className="buttons-footer">
                  <button
                    className="button-no"
                    onClick={() => handleFooter(false)}>
                    No, I'm ok!
                  </button>
                  <button
                    className="button-yes"
                    onClick={() => handleFooter(true)}>
                    Let's see what you've created!
                  </button>
                </div>
              </div>
              {showFooter ? <Footer /> : null}
            </main>
          </LocomotiveScrollProvider>
        </ThemeProvider>
      </ParallaxProvider>
    </>
  );
}

export default App;
