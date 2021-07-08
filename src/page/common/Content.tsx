import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Device } from '../../settings/Device';
import { Layout } from '../../settings/Layout';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: calc(100vh - ${Layout.header.height.laptop}px);
    margin-top: ${Layout.header.height.laptop}px;
    overflow: auto;
    @media (max-width: ${Device.tablet}px) and (min-width: ${Device.mobile + 1}px) {
        height: calc(100vh - ${Layout.header.height.tablet}px);
        margin-top: ${Layout.header.height.mobile}px;
    }

    @media (max-width: ${Device.mobile}px) {
        height: calc(100vh - ${Layout.header.height.mobile}px);
        margin-top: ${Layout.header.height.mobile}px;
    }
`;
type Props = {
    id?: string;
    children: ReactNode;
};
const Content: FC<Props> = (props) => {
    const { children } = props;

    return <Wrapper id="content">{children}</Wrapper>;
};

export default Content;
