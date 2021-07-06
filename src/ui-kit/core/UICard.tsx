import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Device } from '../../settings/Device';

const Wrapper = styled.div<Partial<IProps>>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    min-width: 240px;
    min-height: 240px;
    padding: 35px 40px 40px;
    background: #ffffff;
    box-shadow: 0px 21px 73px rgba(0, 0, 0, 0.16);
    border-radius: 15px;
    height: fit-content;

    @media (max-width: ${Device.mobile}px) {
        width: calc(100vw - 20px);
        padding: 20px 20px 20px;
    }

    ${(props) => {
        return css`
            @media (min-width: ${Device.tablet + 1}px) {
                box-shadow: ${props.flat ? 'none' : '0px 21px 73px rgba(0, 0, 0, 0.16)'};
            }
        `;
    }}
`;

interface IProps {
    children?: ReactNode;
    flat?: boolean;
}

const UICard: FC<IProps> = ({ children, flat }) => <Wrapper flat={flat}>{children}</Wrapper>;

UICard.defaultProps = {
    flat: false,
};
export default UICard;
