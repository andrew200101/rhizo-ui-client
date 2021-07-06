import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<Partial<IProps>>`
    display: flex;
    flex: 0 0 100%;
    width: 100%;
    box-sizing: border-box;

    ${(props) => {
        return css`
            flex-direction: ${props.direction};
            justify-content: ${props.justifyContent};
            align-items: ${props.alignItems};
            background-color: ${props.fill};
            border: ${props.stroke !== 'none' ? `${props.thickness}px solid ${props.stroke}` : 'none'};
            padding: ${props.padding}px;
            margin: ${props.margin}px;
        `;
    }}
`;

interface IProps {
    children?: ReactNode;
    direction?: 'row' | 'column';
    justifyContent?: string;
    alignItems?: string;
    fill?: string;
    stroke?: string;
    thickness?: number;
    padding?: string | number;
    margin?: string | number;
}

const UIBox: FC<IProps> = (props) => <Wrapper {...props}>{props.children}</Wrapper>;

UIBox.defaultProps = {
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fill: '#ffffff',
    stroke: 'none',
    thickness: 1,
    padding: 0,
    margin: 0,
};

export default UIBox;
