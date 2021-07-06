import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 64px;
    display: inline-block;
    width: 100%;
    padding: 8px 16px;
`;

const Footer = () => {
    return <Wrapper>Footer</Wrapper>;
};

export default Footer;
