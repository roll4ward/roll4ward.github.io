// src/components/Section.js
import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  width: 100%;
  height: ${ props => props.height};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10% 5%;
`;

const Section = ({ children, height = "47vh"}) => (
  <SectionContainer height = {height}>
    {children}
  </SectionContainer>
);

export default Section;
