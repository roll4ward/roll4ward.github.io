import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  margin: 2rem auto;
  text-align: center;

  @media (max-width: 768px){
    
  }
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
    <Content dangerouslySetInnerHTML={{ __html: content }} />
  </Container>
);

export default Detail;
