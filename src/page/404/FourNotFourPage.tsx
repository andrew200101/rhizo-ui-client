import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Title = styled.div`
    display: flex;
    font-size: 24px;
    font-weight: 400;
    color: #444444;
    text-transform: none;
    margin-bottom: 4px;
    height: auto;
    min-height: 4px;
    max-height: 26px;
    overflow: hidden;
    justify-content: center;
`;

const FourNotFourPage = (props) => {
    return (
        <Wrapper>
            <Title>404</Title>
        </Wrapper>
    );
};

export default FourNotFourPage;
