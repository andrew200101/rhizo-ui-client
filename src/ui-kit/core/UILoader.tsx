import React from 'react';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
`;

const SLoader = styled.div`
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-left: 4px solid rgba(255, 255, 255, 0.7);
    animation: ${loadingAnimation} 1s infinite linear;
    border-radius: 50%;
    width: 25px;
    height: 25px;
`;

const UILoader = () => <SLoader />;

export default UILoader;
