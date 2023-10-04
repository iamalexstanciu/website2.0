import React, { useState } from "react";
import styled from "styled-components";
import scroll from "locomotive-scroll";

const NavContainer = styled.div`
  position: absolute;
  /* left: 50%; */
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};
  transition: all 0.3s ease;
  /* transform: translateX(-50%); */
  z-index: 6;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    top: ${(props) => (props.click ? "0" : `calc(-50vh - 4rem)`)};
  }
`;
const MenuBtn = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
  list-style-type: style none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

const MenuItems = styled.ul`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 10rem;
`;

const MenuItem = styled.li`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer
      click={+isOpen}
      initial={{ y: `-100%` }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 5 /* 2 */ }}>
      <MenuItems>
        <MenuBtn onClick={() => setIsOpen(!isOpen)}>Menu</MenuBtn>
        <MenuItem>Home</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Team</MenuItem>
        <MenuItem>Portfolio</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;
