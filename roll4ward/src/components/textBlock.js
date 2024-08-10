// src/components/TextBlock.js
import React from 'react';

const TextBlock = ({ title, content }) => (
  <div style={styles.container}>
    <h3 style={styles.title}>{title}</h3>
    <p style={styles.content}>{content}</p>
  </div>
);

const styles = {
  container: {
    padding: '0.5rem',
    minWidth: '23rem',
    flex: '1 1 50%',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  content: {
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
  },
};

export default TextBlock;
