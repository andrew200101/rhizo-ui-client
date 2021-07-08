import React from 'react';
import styled from 'styled-components';

import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import Page from '../common/Page';
import UICard from '../../ui-kit/core/UICard';

import { ReactComponent as HeroImage } from '../../media/image/sign-in-presentation.svg';
import UIButton from '../../ui-kit/core/UIButton';
import UIForm from '../../ui-kit/form/UIForm';
import UICheckBox from '../../ui-kit/form/UICheckBox';
// import { ReactComponent as InputMailIcon } from '../../media/image/input-mail-icon.svg';
// import { ReactComponent as InputEditIcon } from '../../media/image/input-edit-icon.svg';
import UITextField from '../../ui-kit/form/UITextField';
import UIPasswordField from '../../ui-kit/form/UIPasswordField';
import UIBox from '../../ui-kit/layout/UIBox';
import AuthContentWrapper from '../../widget/AuthContentWrapper';
import Presentation from '../../widget/Presentation';

const Title = styled.h4`
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 140%;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0.01em;
    color: #2d2d2d;
    margin: 0 0 20px 0px;
`;

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    span {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 149%;
        text-align: center;
        letter-spacing: 0.01em;
        color: #a4a4a4;

        a {
            color: #5ec69d;
            text-decoration: none;
        }
    }
`;

interface IPayload {
    email: string;
    password: string;
}

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const LoginPage = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: (values: IPayload, { setSubmitting }: FormikHelpers<IPayload>) => {
            setTimeout(() => {
                setSubmitting(false);
            }, 500);
        },
    });
    return (
        <Page name="login">
            <AuthContentWrapper>
                <Presentation title="Discover the Best Tutors Around the World" image={<HeroImage />} />

                <UICard>
                    <Title>Sign in to Rhizo</Title>

                    <UIForm formik={formik}>
                        <UIBox direction="column">
                            <UITextField
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                label="Email"
                                placeholder="E-mail"
                                email
                            ></UITextField>
                            <UIPasswordField
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                label="Password"
                                placeholder="Password"
                            ></UIPasswordField>
                            <UICheckBox label="Keep me logged in" checked></UICheckBox>

                            <UIButton label="Sign in" />
                            <LinkWrapper>
                                <span>
                                    Don't have an account yet??{' '}
                                    <a href="./" title="register">
                                        Register
                                    </a>
                                </span>
                            </LinkWrapper>
                        </UIBox>
                    </UIForm>
                </UICard>
            </AuthContentWrapper>
        </Page>
    );
};

export default LoginPage;
