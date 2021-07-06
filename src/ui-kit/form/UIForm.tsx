/* eslint-disable no-unused-vars */
import { FormikProvider } from 'formik';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Device } from '../../settings/Device';

const SForm = styled.form`
    width: 420px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0px;
    box-sizing: border-box;
    margin-bottom: 0px;
    box-sizing: border-box;
    /* overflow: hidden; */

    @media (max-width: ${Device.tablet}px) and (min-width: ${Device.mobile + 1}px) {
        max-width: 420px;
        width: calc(100vw - 60px);
    }

    @media (max-width: ${Device.mobile}px) {
        max-width: 325px;
        width: calc(100vw - 60px);
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
