import React, { FC } from 'react';
import styled from 'styled-components';

const Spacer = styled.span<Partial<IProps>>`
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
`;

interface IProps {
    width?: number;
    height?: number;
}

const UISpacer: FC<IProps> = (props) => {
    return <Spacer {...props} />;
};

UISpacer.defaultProps = {
    width: 0,
    height: 0,
};
export default UISpacer;
