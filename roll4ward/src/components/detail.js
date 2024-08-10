import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For GitHub flavored Markdown

const Detail = ({ title, content }) => (
  <div style={styles.container}>
    <h2 style={styles.title}>{title}</h2>
    <div style={styles.content}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  </div>
);

const styles = {
  container: {
    padding: '1rem',
    maxWidth: '23rem',
    margin: '2rem auto',
    textAlign: 'center',
    },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  content: {
    fontSize: '1.125rem',
    lineHeight: '1.6',
  },
};

export default Detail;
