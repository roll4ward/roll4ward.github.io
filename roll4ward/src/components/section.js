// src/components/Section.js
import React from 'react';

const Section = ({ children, borderColor = '#000' }) => (
  <div style={ {...styles.container, borderTop: `2px solid ${borderColor}`, borderBottom: `2px solid ${borderColor}`}}>
    {children}
  </div>
);

const styles = {
  container: {
    maxWidth: '23rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '40rem 0',
    alignItems: 'space-between',
  },
};

export default Section;
