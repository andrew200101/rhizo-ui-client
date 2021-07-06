import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Color } from '../../settings/Color';
import Content from './Content';
import Header from './Header';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${Color.pageBg};
`;

interface IProps {
    layout?: any;
    name?: string;
    children: ReactNode;
}

const Page: FC<IProps> = (props) => {
    const { children, name } = props;

    return (
        <Wrapper>
            <Header page={name} />
            <Content>{children}</Content>
        </Wrapper>
    );
};

export default Page;
