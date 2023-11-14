import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavContainer = styled.div`
  position: fixed;
  /* left: 50%; */
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};
  transition: all 0.3s ease;
  /* transform: translateX(-50%); */
  z-index: 6;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fc4308;

  @media (max-width: 40em) {
    top: ${(props) => (props.click ? "0" : `calc(-50vh - 4rem)`)};
  }
`;
const MenuBtn = styled.li`
  background-color: #fc4308;
  width: 15rem;
  height: 2.5rem;
  border: none;
  outline: none;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  position: absolute;
  top: 100%;
  left: 48%;
  transform: translateX(-50%);

  font-size: 18px;
  font-weight: bold;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
  }
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};

  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`;

const Item = styled(motion.li)`
  text-transform: uppercase;
  font-weight: 700;
  color: #fc4308;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    setIsOpen(!isOpen);
    scroll.scrollTo(elem, {
      offset: "0",
      duration: "4000",
      easing: [0.75, 0.5, 0.5, 1.5],
    });
  };

  return (
    <NavContainer
      click={+isOpen}
      initial={{ y: `-100%` }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 5 }}>
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin>
        <MenuBtn onClick={() => setIsOpen(!isOpen)}>Menu</MenuBtn>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#home")}>
          {" "}
          <Link to="/">Home</Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#services")}>
          {" "}
          <Link to="/">Services</Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#prices")}>
          {" "}
          <Link to="/">Prices</Link>
        </Item>
        {/* <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#team")}>
          {" "}
          <Link to="/">Team</Link>
        </Item> */}
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#portfolio")}>
          {" "}
          <Link to="/">Portfolio</Link>
        </Item>
        <Item
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#contact")}>
          {" "}
          <Link to="/">Contact</Link>
        </Item>
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;
