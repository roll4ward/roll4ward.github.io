// src/pages/index.js
import React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';

import HeroSection from '../components/hero';
import ExplainSection from '../components/explain';

const BlockPage = () => (
  <Layout>
    <Section height='94vh'>
      <HeroSection
        title = "안녕하세요!"
        subtitle = {"스마트팜 연구 동아리\n앞구르기 입니다!"}
        description= {"우리는 진짜 문제를 해결하려고 노력합니다.\n\
                      이 뜻깊은 여정을 함께하세요!"}
        button_config={{
          to: "/apply",
          text: "지금 바로 지원하기",
          style: {
            backround: "black",
            color: "white"
          }
        }}
      />
    </Section>
    <Section>
    <ExplainSection
        title = "앞구르기는 어떤 동아리인가요?"
        description= {"앞구르기에 대해 궁금하세요?\n\
                      앞구르기가 쌓아올린 핵심가치에 대해 알아봐\n\
                      앞구르기 최고다"}
        button_config={{
          to: "/about",
          text: "알아보러가기",
          style: {
            backround: "black",
            color: "white"
          }
        }}
      />
    </Section>
    <Section>
    <ExplainSection
        title = "오리 너구리 좋아하세요?"
        description= {"앞구르기에 대해 궁금하세요?\n\
                      앞구르기가 쌓아올린 핵심가치에 대해 알아봐\n\
                      앞구르기 최고다"}
        button_config={{
          to: "/apply",
          text: "오리너구리 이해하기",
          style: {
            backround: "black",
            color: "white"
          }
        }}
      />
    </Section>
    <Section>
    <ExplainSection
        title = "오리 고기는 좋아하세요?"
        description= {"앞구르기에 대해 궁금하세요?\n\
                      앞구르기가 쌓아올린 핵심가치에 대해 알아봐\n\
                      앞구르기 최고다"}
        button_config={{
          to: "/apply",
          text: "오리고기 먹으러가기",
          style: {
            backround: "black",
            color: "white"
          }
        }}
      />
    </Section>
    <Section>
    <ExplainSection
        title = "너구리는 좋아하세요?"
        description= {"앞구르기에 대해 궁금하세요?\n\
                      앞구르기가 쌓아올린 핵심가치에 대해 알아봐\n\
                      앞구르기 최고다"}
        button_config={{
          to: "/apply",
          text: "다시마 두개 뽑기",
          style: {
            backround: "black",
            color: "white"
          }
        }}
      />
    </Section>
  </Layout>
);

export default BlockPage;
