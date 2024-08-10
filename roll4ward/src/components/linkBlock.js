import React from 'react';
import { Link } from 'gatsby';

const LinkBlock = ({link, linkBgColor = '#333', linkTextColor = '#A8E05F' }) => (
  <div style={styles.container}>
    <div style={styles.linkContainer}>
      <Link to={link} style={{ ...styles.link, backgroundColor: linkBgColor, color: linkTextColor }}>
        Learn More
      </Link>
    </div>
  </div>
);

const styles = {
  container: {
    padding: '2rem',
    minWidth: '23rem',
    flex: '1 1 50%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '0.75rem', // Reduced margin for less spacing
  },
  linkContainer: {
    marginTop: '0', // Remove extra spacing between title and link
  },
  link: {
    fontSize: '1rem', // Adjusted font size to match the overall design
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#333',
    color: '#A8E05F',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  linkHover: {
    backgroundColor: '#555',
  },
};

export default LinkBlock;
