import React, { useState } from "react";
import styled from "styled-components";
import { NavBarInterface } from "./navbar.types";
import { PageLink } from "../componentsindex";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const StyledNavBar = styled.div`
    position: relative;     
    z-index: 1; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 110px;
    background-color: ${(props: NavBarInterface) =>
        props.isTransparent ? "rgba(31, 31, 31, 0)" : "rgba(31, 31, 31, 1)"};
    color: #fff;
    width: 100vw;
`;

const List = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #fff;
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
    color: #fff;
    cursor: pointer;

    @media (min-width: 769px) {
        display: none;
    }
`;

const MobileMenuDropdown = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    background-color: #1f1f1f;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 10px;
    width: 100%;

    a {
        display: block;
        color: #fff;
        font-size: 18px;
        margin-bottom: 5px;
        text-decoration: none;
    }
`;

const CloseIcon = styled(FaTimes)`
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
`;

export const NavBar: React.FC<NavBarInterface> = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <StyledNavBar isTransparent={props.isTransparent}>
      <PageLink href="/" isLarge>
        The Drop Shop
      </PageLink>

      <List>
        <Item>
          <PageLink href="/">Home</PageLink>
        </Item>
        <Item>
          <PageLink href="/shop">Shop</PageLink>
        </Item>
        <Item>
          <PageLink href="/about">About</PageLink>
        </Item>
        <Item>
          <PageLink href="/cart"><FaShoppingCart /></PageLink>
        </Item>
      </List>

      <MobileMenuIcon onClick={toggleMobileMenu} />

      {isMobileMenuOpen && (
        <MobileMenuDropdown isOpen={isMobileMenuOpen}>
          <CloseIcon onClick={toggleMobileMenu} />
          <PageLink href="/">Home</PageLink>
          <PageLink href="/shop">Shop</PageLink>
          <PageLink href="/about">About</PageLink>
          <PageLink href="/cart">Cart</PageLink>
        </MobileMenuDropdown>
      )}
    </StyledNavBar>
  );
};
