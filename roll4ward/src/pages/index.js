// src/pages/index.js
import React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';

import HeroSection from '../components/hero';
import ExplainSection from '../components/explain';

import content_config from './main_page_content.json';

const type_to_component = {
  "hero" : HeroSection,
  "explain" : ExplainSection
};

const BlockPage = () => (
  

  <Layout>
    { content_config.map(content => 
      {
        const SectionComponent = type_to_component[content.type];

        return (
        <Section height={content.height}>
           <SectionComponent content = {content.content}/>
        </Section>
       );
      }
    )}
  </Layout>
);

export default BlockPage;
