import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { dark, light } from "../src/style/Themes.js";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { createContext, useEffect, useRef, useState } from "react";
import Home from "./sections/Home";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Loader from "./components/Loader";
import { ParallaxProvider } from "react-scroll-parallax";
import Prices from "./sections/Prices";
import Contact from "./sections/Contact";
import "./style/footer.css";
import Footer from "./components/Footer";
import ReactSwitch from "react-switch";
import Navbar from "./components/Navbar.js";
import AnimatedCursor from "react-animated-cursor";

export const ThemeContext = createContext(null);

function App() {
  const containerRef = useRef(null);
  const [showFooter, setShowFooter] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden
        ? "We really miss you! 😞"
        : "upvisionMedia | your partner in web development.";
    };

    // Attach event listener to handle visibility changes
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
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

  return (
    <>
      <AnimatedCursor
        innerSize={15}
        outerSize={45}
        color="253, 69, 8"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={8}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <ParallaxProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className="App" id={theme}>
            <div className="switch">
              <ReactSwitch
                onChange={toggleTheme}
                checked={theme === "dark"}
                onColor="#fff"
                onHandleColor="#fc4308"
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={10}
                width={30}
                className="react-switch"
                id="material-switch"
              />
            </div>
          </div>
        </ThemeContext.Provider>
        <GlobalStyle theme={theme} />
        <ThemeProvider theme={theme === "dark" ? dark : light}>
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
            watch={[]}
            containerRef={containerRef}
            onLocationChange={(scroll) =>
              scroll.scrollTo(0, { duration: 0, disableLerp: true })
            } // If you want to reset the scroll position to 0 for example
            onUpdate={() =>
              console.log("Updated, but not on location change!")
            }>
            <Navbar />
            <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <section id="home">
                <Home />
              </section>
              <section className={`section-services ${theme}`} id="services">
                <Services />
              </section>
              <section id="portfolio">
                <Portfolio />
              </section>
              <section id="prices">
                <Prices />
              </section>
              <section id="contact">
                <Contact />
              </section>
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
