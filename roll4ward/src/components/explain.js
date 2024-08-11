import React from 'react';
import styled from 'styled-components';

import DetailButton from './detail_button';

const Container = styled.div`
    width: 100%;
    height: 100%;

    white-space: pre-line;

    overflow-wrap: break-word;
    word-break: keep-all;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items : center;
    text-align: center;

    @media (max-width: 768px) {

    }
`;

const Title = styled.h2`
    font-size: 2em;
    margin: 1.5rem 0;

    @media (max-width: 768px) {
    font-size: 2rem;
    }
`;

const Description = styled.p`
    font-size: 1rem;

    margin: 0;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
    font-size: 1rem;
    }
`;

const ExplainSection = ({title, description, button_config}) => (
    <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <DetailButton style = {button_config.style} to = {button_config.to}>{button_config.text}</DetailButton>
    </Container>
);

export default ExplainSection;