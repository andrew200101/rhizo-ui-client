import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-height: calc(100vh - 64px);
    /* background-color: #e8e8ee; */
`;
type Props = {
    id?: string;
    children: ReactNode;
};
const Content: FC<Props> = (props) => {
    const { children } = props;

    return <Wrapper>{children}</Wrapper>;
};

export default Content;
