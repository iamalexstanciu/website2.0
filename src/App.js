import { ThemeProvider } from "styled-components";
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
import Team from "./sections/Team";
import Contact from "./sections/Contact";

function App() {
  const containerRef = useRef(null);

  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <ParallaxProvider>
        <GlobalStyle />
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
            {/* <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence> */}
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
                <section id="team">
                  <Team />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </AnimatePresence>
            </main>
          </LocomotiveScrollProvider>
        </ThemeProvider>
      </ParallaxProvider>
    </>
  );
}

export default App;
