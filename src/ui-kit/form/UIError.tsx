/* eslint-disable no-unused-vars */
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export const SError = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #b00020;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 4px 4px;
    user-select: none;
`;

interface IProps {
    children?: ReactNode;
}
const UIError: FC<IProps> = ({ children }) => <SError>{children}</SError>;

export default UIError;
