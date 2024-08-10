// src/pages/index.js
import React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';

const BlockPage = () => (
  <Layout>
    <Section title="시작은 히어로" 
             to="/about"
             height='100vh'
    >
    시작은 기분 좋게 히어로 보이면 좋잖아요?<br/>
    임팩트 빡 주고 시작하기
    </Section>
    <Section title="앞구르기는" 
             to="/about"
    >
    스마트팜 연구 동아리로 다양한 분야의 사람들이 프로젝트 기반으로 활동하고 있습니다.<br/>
    근데 어쩌라고요
    </Section>
    <Section title="오리너구리" to="/projects">
    오스트레일리아 대륙 동부와 태즈메이니아에서 서식하는 포유류 동물이다<br/>
    이거를 대체 왜 적어둔거야
    </Section>
  </Layout>
);

export default BlockPage;
