import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 20vh;
    width: 100%;
    text-align: center;

    border-bottom: solid;

    & > h1 {
        font-size: 3rem;
        margin-bottom: 1.5vh;
    }

    & > p {
        margin:0;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    margin-top: 5vh;
`;

const PageTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <TitleContainer>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
    </TitleContainer>
      <ContentContainer dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;

export default PageTemplate;