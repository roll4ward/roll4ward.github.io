// src/components/Section.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SectionContainer = styled.div`
  width: 100%;
  height: ${ props => props.height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-top: 2px solid;
  border-botton: 2px solid;
`;

const SectionTitle = styled.h3`
  text-align: center;
`;

const SectionDescription = styled.p`
  text-align: center;
`;

const SectionToDetail = styled(Link)`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  
  background-color: ${props => props.background};
  color: ${props => props.color};

  &:visited {
    color: ${props => props.color};
  }
`;


const Section = ({ children, title, to,
                   button_text = "자세히 보기",
                   height = "50vh",
                   button_color = "white",
                   button_background = "black",
                   }) => (
  <SectionContainer height = {height}>
    <SectionTitle>{title}</SectionTitle>
    <SectionDescription>{children}</SectionDescription>
    <SectionToDetail color = {button_color} 
                     background = {button_background}
                     to={to}
    >
      {button_text}
    </SectionToDetail>
  </SectionContainer>
);

export default Section;
