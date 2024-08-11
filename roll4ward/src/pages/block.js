// src/pages/index.js
import React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';

import HeroSection from '../components/hero';

const BlockPage = () => (
  <Layout>
    <Section height='94vh'>
      <HeroSection
        title = "안녕하세요!"
        subtitle = {"스마트팜 연구 동아리\n앞구르기 입니다!"}
        description= {"우리는 진짜 문제를 해결하려고 노력합니다.\n\
                      이 뜻깊은 여정을 함께하세요!"}
      />
    </Section>
    <Section>
    스마트팜 연구 동아리로 다양한 분야의 사람들이 프로젝트 기반으로 활동하고 있습니다.<br/>
    근데 어쩌라고요
    </Section>
    <Section>
    오스트레일리아 대륙 동부와 태즈메이니아에서 서식하는 포유류 동물이다<br/>
    이거를 대체 왜 적어둔거야
    </Section>
  </Layout>
);

export default BlockPage;
