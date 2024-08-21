import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../images/logo.png';
import menu from '../images/menu.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
        <Title>앞구르기</Title>
      </LogoContainer>
      <HamburgerMenu src={menu} alt="Menu" onClick={toggleMenu} />
      <Nav menuOpen={menuOpen}>
        <NavItem to="/about">동아리 소개</NavItem>
        <NavItem to="/projects">프로젝트 소개</NavItem>
        <NavItem to="/join">가입신청</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(153, 228, 149, 0.8);
  color: #00712A;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  vertical-align: middle;
  margin-bottom: 0;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  display: flex;
  align-items: center;
  color: #00712A; /* Updated text color */
`;

const HamburgerMenu = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: none;
  margin-bottom: 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-top: 1rem;
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')}; 
    position: absolute;
    top: 5rem;
    left: 0;
    background-color: rgba(153, 228, 149, 0.8);
    padding: 1rem;
  }
`;

const NavItem = styled(Link)`
  color: #00712A; /* Updated text color */
  text-decoration: none;
  font-size: 1.25rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;
