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

  border-bottom: 1px solid black;

  padding: 0 5%;
`;

const Section = ({ children, height = "50vh"}) => (
  <SectionContainer height = {height}>
    {children}
  </SectionContainer>
);

export default Section;
