/* eslint-disable no-unused-vars */
import { FormikProvider } from 'formik';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Device } from '../../settings/Device';
import { Margin } from '../../settings/Margin';
import { Padding } from '../../settings/Padding';

const SForm = styled.form`
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0px;
    box-sizing: border-box;
    margin-bottom: 0px;
    /* overflow: hidden; */

    @media (max-width: ${Device.tablet}px) and (min-width: ${Device.mobile + 1}px) {
        width: 100%;
    }

    @media (max-width: ${Device.mobile}px) {
        width: 100%;
    }

    & button {
        width: 100%;
        height: 40px;
        margin: 20px 0px 0px 0px;
    }
`;

interface IProps {
    children: ReactNode;
    formik: any;
}

const UIForm: FC<IProps> = ({ children, formik }) => {
    return (
        <FormikProvider value={formik}>
            <SForm noValidate onSubmit={formik.handleSubmit}>
                {children}
            </SForm>
        </FormikProvider>
    );
};

export default UIForm;
