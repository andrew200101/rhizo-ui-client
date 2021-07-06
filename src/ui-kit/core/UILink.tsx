import React, { FC } from 'react';
import styled from 'styled-components';

const SLink = styled.a`
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    min-width: 40px;
    min-height: 20px;
    padding: 4px;
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    letter-spacing: 0.01em;
    color: #5ec69d;
`;

interface IProps {
    label?: string;
    onClick?: (e) => void;
}

const UILink: FC<IProps> = ({ label, onClick }) => (
    <SLink href="#" onClick={onClick}>
        {label}
    </SLink>
);

export default UILink;
