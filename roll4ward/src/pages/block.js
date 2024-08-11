// src/pages/index.js
import React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';
import DetailButton from '../components/detail_button';

const BlockPage = () => (
  <Layout>
    <Section height='90vh'>
    임팩트 어쩌구 시작하기
    <DetailButton to='/'>니얼굴</DetailButton>
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
