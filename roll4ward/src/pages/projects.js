import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Detail from '../components/detail';

const ProjectsPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Detail title={frontmatter.title} content={html} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/projects.md/" }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default ProjectsPage;
