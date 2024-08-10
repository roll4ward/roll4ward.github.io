// src/pages/index.js
import React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';
import TextBlock from '../components/textBlock';
import LinkBox from '../components/linkBlock';

const BlockPage = () => (
  <Layout>
    <Section>
      <TextBlock 
        title="앞구르기는" 
        content="스마트팜 연구 동아리로 다양한 분야의 사람들이 프로젝트 기반으로 활동하고 있습니다." 
      />
      <LinkBox 
        link="/about" 
        linkBgColor="#f00"
        linkTextColor="#0f0"
      />
    </Section>
    <Section>
      <TextBlock 
        title="오리너구리" 
        content="오스트레일리아 대륙 동부와 태즈메이니아에서 서식하는 포유류 동물이다." 
      />
      <LinkBox 
        link="/projects" 
      />
    </Section>
  </Layout>
);

export default BlockPage;
