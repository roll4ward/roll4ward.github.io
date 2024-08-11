import React from 'react';
import styled from 'styled-components';

import DetailButton from './detail_button';

const Container = styled.div`
    width: 100%;
    height: 100%;

    padding: 10% 0;

    white-space: pre-line;

    overflow-wrap: break-word;
    word-break: keep-all;

    display: flex;
    flex-direction: column;
    align-items : center;
    text-align: center;

    @media (max-width: 768px) {
    padding: 60% 0;
    }
`;

const Title = styled.h1`
    font-size: 7rem;
    margin: 0;

    @media (max-width: 768px) {
    font-size: 4rem;
    }
`;

const Subtitle = styled.h3`
    font-size: 3.5rem;
    margin: 2rem 0;

    @media (max-width: 768px) {
    font-size: 2rem;
    }
`;

const Description = styled.p`
    font-size: 1.5rem;

    margin: 0;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
    font-size: 1rem;
    }
`;

const HeroSection = ({title, subtitle, description}) => (
    <Container>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle> }
        <Description>{description}</Description>
        <DetailButton>지금 바로 지원하기</DetailButton>
    </Container>
);

export default HeroSection;