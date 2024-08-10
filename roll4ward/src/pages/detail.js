// src/pages/detail-example.js
import React from 'react';
import Layout from '../components/layout';
import Detail from '../components/detail';

const DetailPage = () => (
  <Layout>
    <Detail 
      title="Smart Farming Club" 
      content={`
# 앞구르기에서 새로운 부원을 모집합니다!

> 🔥 **번뜩이는 아이디어**로 농업 발전에 기여하고 싶다면?
>
> 🔥 다른 사람들과 **함께** 여러 가지 **도전**을 해보고 싶다면?
>
> 🔥 **공부한 것들을 활용**해 볼 기회를 찾고 있다면?
>
> 🔥 서로 **소통**하며 **함께 발전할 친구**를 찾고 있다면?

😄 **앞구르기**는 프로젝트 활동을 통해 스마트 농업에 대해 연구하고, 농업의 미래를 모색하는 동아리입니다! 다양한 전공의 학생들이 참여하여, 기술 연구뿐만 아니라 농업에 대한 다양한 아이디어도 나누며 함께 나아가길 바랍니다. 그리고 지속적인 친목 활동으로 즐겁고 화목한 분위기로 활동하고 있습니다.

---

## ❓ 앞구르기는 어떤 활동을 하나요?

😃 매 월 첫 주 토요일에 **오프라인 월간 모임**과 매 주 금요일 **온라인 주간 모임**도 있습니다!
      `}
    />
    <Detail 
      title="About Platypus" 
      content={`
## The Platypus

The platypus is a unique mammal endemic to Australia. It is one of the few mammals that lay eggs instead of giving birth to live young. Its distinct features include a duck-bill, webbed feet, and a beaver-like tail.

### Interesting Facts

- **Egg-laying mammal**: One of only five species of monotremes.
- **Venomous**: Males have a spur on their hind feet that can deliver venom.
- **Aquatic lifestyle**: The platypus is an excellent swimmer and spends much of its time in the water.
      `}
    />
  </Layout>
);

export default DetailPage;
