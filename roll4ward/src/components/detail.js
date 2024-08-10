import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';


const Container = styled.div`
  padding: 1rem;
  max-width: 23rem;
  margin: 2rem auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  font-size: 1.125rem;
  line-height: 1.6;
`;


const Detail = ({ title, content }) => (
  <Container>
    <Title>{title}</Title>
    <Content>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </Content>
  </Container>
);

export default Detail;
