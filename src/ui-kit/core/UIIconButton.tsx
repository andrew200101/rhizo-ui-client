import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const SButton = styled.button<Partial<IProps>>`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #5ec69d;
    border: none;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    border: none;
    transition: background-color 0.3s linear;
    cursor: pointer;
    padding: 4px 4px;

    &:hover {
        background-color: #7dd8b5;
    }
`;

const IconWrapper = styled.div<any>`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    padding: 0px;
    border-radius: 16px;
    overflow: hidden;

    & > svg {
        display: flex;
        width: 24px;
        height: 24px;
        fill: #a4a4a4;
        user-select: false;
        /* pointer-events: none; */
    }
`;

interface IProps {
    children: ReactNode;
    onClick: (e) => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

const UIIconButton: FC<IProps> = ({ children, type, onClick }) => {
    return (
        <SButton type={type} onClick={onClick}>
            <IconWrapper>{children}</IconWrapper>
        </SButton>
    );
};

UIIconButton.defaultProps = {
    type: 'button',
};

export default UIIconButton;
