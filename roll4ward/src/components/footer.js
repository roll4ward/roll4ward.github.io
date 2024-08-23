import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../images/logo.png';

const Footer = () => (
  <FooterContainer>
    <LogoLink to="/">
      <Logo src={logo} alt="Logo" />
    </LogoLink>
    <CopyText>&copy; {new Date().getFullYear()} roll4ward</CopyText>
    <ContactLink href="https://open.kakao.com/o/sfqsZ7Yf" target="_blank" rel="noopener noreferrer">
      문의사항
    </ContactLink>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #f5f6f7;
  color: #00712A;
  border-top: 1px solid #ebebeb;
  margin-top: 5rem;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  filter: invert(56%) sepia(0%) saturate(5%) hue-rotate(134deg) brightness(96%) contrast(88%);
  width: 20px;
  height: 20px;
  margin-bottom: 0;
`;

const CopyText = styled.p`
  margin: 0 1rem;
  font-size: 0.875rem;
  color: #888;
`;

const ContactLink = styled.a`
  font-size: 0.875rem;
  color: #888;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;