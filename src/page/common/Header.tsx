import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../media/image/logo.svg';
import { Device } from '../../settings/Device';
import UIButton from '../../ui-kit/core/UIButton';

const Wrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 76px;
`;
const LeftWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 24px;

    @media (max-width: ${Device.tablet}px) and (min-width: ${Device.mobile + 1}px) {
        padding-left: 20px;
    }

    @media (max-width: ${Device.mobile}px) {
        padding-left: 15px;
    }
`;

const RightWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 5px;
    padding-right: 72px;

    @media (max-width: ${Device.tablet}px) and (min-width: ${Device.mobile + 1}px) {
        padding-right: 20px;
    }

    @media (max-width: ${Device.mobile}px) {
        padding-right: 15px;
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 76px;
`;

interface IProps {
    page?: string;
}

const Header: FC<IProps> = ({ page }) => {
    // const history = useHistory();

    useEffect(() => {}, []);
    return (
        <Wrapper>
            <LeftWrapper>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
            </LeftWrapper>
            <RightWrapper>
                {page === 'login' && <UIButton label="Register" />}
                {page === 'signup' && <UIButton label="Sign in" />}
            </RightWrapper>
        </Wrapper>
    );
};

export default Header;
