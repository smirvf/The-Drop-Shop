import React, { useState } from "react";
import styled from "styled-components";
import { NavBarInterface } from "./navbar.types";
// import { PageLink } from "../componentsindex";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";

const StyledNavBar = styled.div<{isTransparent?: boolean}>`
    position: relative;     
    z-index: 1; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 110px;
    background-color: ${({isTransparent}) => isTransparent ? "rgba(31, 31, 31, 0)" : "rgba(31, 31, 31, 1)"};
    color: #003399;
    width: 100vw;
`;

const List = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #003399;
    font-size: 22px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Item = styled.li`
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }
`;

const MobileMenuIcon = styled(FaBars)`
    font-size: 24px;
    color: #003399;
    cursor: pointer;

    @media (min-width: 769px) {
        display: none;
    }
`;

const MobileMenuDropdown = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    background-color: #003399;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 10px;
    width: 100%;

    a {
        display: block;
        color: #003399;
        font-size: 18px;
        margin-bottom: 5px;
        text-decoration: none;
    }
`;

const CloseIcon = styled(FaTimes)`
    font-size: 24px;
    color: #003399;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
`;

export const NavBar: React.FC<NavBarInterface> = (props: NavBarInterface) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <StyledNavBar isTransparent={props.isTransparent}>
      <Link href="/" >
        Netbuster
      </Link>

      <List>
        <Item>
          <Link href="/">Home</Link>
        </Item>
        <Item>
          <Link href="/shop">Shop</Link>
        </Item>
        <Item>
          <Link href="/about">About</Link>
        </Item>
        <Item>
          <Link href="/login"><FaUser /></Link>
        </Item>
      </List>

      <MobileMenuIcon onClick={toggleMobileMenu} />

      {isMobileMenuOpen && (
        <MobileMenuDropdown isOpen={isMobileMenuOpen}>
          <CloseIcon onClick={toggleMobileMenu} />
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/">Account</Link>
        </MobileMenuDropdown>
      )}
    </StyledNavBar>
  );
};
