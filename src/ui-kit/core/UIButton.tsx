import React, { FC } from 'react';
import styled from 'styled-components';
import UILoader from './UILoader';

const SButton = styled.button<Partial<IProps>>`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #5ec69d;
    border: none;
    border-radius: 10px;
    min-width: 60px;
    height: 40px;
    border: none;
    transition: background-color 0.3s linear, width 0.3s linear;
    cursor: pointer;
    padding: 4px 20px;

    &:hover {
        background-color: #7dd8b5;
    }
`;

const Label = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin: 0px 10px;
`;

interface IProps {
    label: string;
    activity?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

const UIButton: FC<IProps> = ({ label, type, activity }) => {
    return (
        <SButton type={type}>
            {activity && <UILoader />}
            <Label>{label}</Label>
        </SButton>
    );
};

UIButton.defaultProps = {
    type: 'submit',
};

export default UIButton;
