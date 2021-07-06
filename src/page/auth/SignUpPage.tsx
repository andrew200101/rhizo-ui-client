import React from 'react';
import styled from 'styled-components';

import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import Page from '../common/Page';
import UICard from '../../ui-kit/core/UICard';

import { ReactComponent as HeroImage } from '../../media/image/sign-up-presentation.svg';
import UIButton from '../../ui-kit/core/UIButton';
import { Device } from '../../settings/Device';
import UIForm from '../../ui-kit/form/UIForm';
import UICheckBox from '../../ui-kit/form/UICheckBox';
// import { ReactComponent as InputMailIcon } from '../../media/image/input-mail-icon.svg';
// import { ReactComponent as InputEditIcon } from '../../media/image/input-edit-icon.svg';
import UITextField from '../../ui-kit/form/UITextField';
import UIPasswordField from '../../ui-kit/form/UIPasswordField';
import UIBox from '../../ui-kit/layout/UIBox';
import UISegmentButton from '../../ui-kit/form/UISegmentButton';
import UIHint from '../../ui-kit/core/UIHint';
import UILink from '../../ui-kit/core/UILink';
import UISpacer from '../../ui-kit/core/UISpacer';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 124px;
    justify-content: space-around;
    width: 100%;

    @media (max-width: ${Device.tablet}px) and (min-width: ${Device.mobile + 1}px) {
        padding-top: 84px;
    }

    @media (max-width: ${Device.mobile}px) {
        padding-top: 46px;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

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

const TermsCheckboxWrapper = styled.div`
    margin-top: 2px;
`;
const TermsWrapper = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #a4a4a4;
    span {
        color: #5ec69d;
        cursor: pointer;
    }
`;
const NameGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    @media (max-width: ${Device.mobile}px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 480px;

    @media (max-width: ${Device.tablet}px) and (min-width: ${Device.mobile + 1}px) {
        display: none;
    }

    @media (max-width: ${Device.mobile}px) {
        display: none;
    }

    .caption {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 56px;
        letter-spacing: 0.01em;
        color: #2d2d2d;
        margin: 0px 0px 34px 0px;
    }

    .image {
    }
`;

interface IPayload {
    userType: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const FormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    firstName: Yup.string().min(2, 'Too Short!').max(24, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(24, 'Too Long!').required('Required'),
    password: Yup.string().required('Required'),
});

const SignUpPage = (props) => {
    const formik = useFormik({
        initialValues: {
            userType: 1,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        },
        validationSchema: FormSchema,
        onSubmit: (values: IPayload, { setSubmitting }: FormikHelpers<IPayload>) => {
            setTimeout(() => {
                setSubmitting(false);
            }, 500);
        },
    });
    return (
        <Page name="signup">
            <Wrapper>
                <InfoWrapper>
                    <h2 className="caption">Student Mentors at Your Fingertips</h2>
                    <div className="image">
                        <HeroImage />
                    </div>
                </InfoWrapper>
                <UICard>
                    <Title>Register with Rhizo</Title>

                    <UIForm formik={formik}>
                        <UIBox direction="column">
                            <UISegmentButton label="Select user type" name="userType"></UISegmentButton>
                            <UIHint text="To become a tutor, you will be required to verify that you have attended your university. " />
                            <NameGroupWrapper>
                                <UITextField
                                    id="firstName"
                                    name="firstName"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                    label="First Name"
                                    placeholder="Enter name"
                                />
                                <UISpacer width={10} height={1} />
                                <UITextField
                                    id="lastName"
                                    name="lastName"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                    label="Last Name"
                                    placeholder="Enter surname"
                                />
                            </NameGroupWrapper>
                            <UITextField
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                label="Email"
                                placeholder="Enter email"
                                email
                            ></UITextField>
                            <UIPasswordField
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                label="Password"
                                placeholder="Input password"
                            ></UIPasswordField>
                            <UIBox justifyContent="flex-end">
                                <UILink label="Forgot Password?" />
                            </UIBox>
                            <UISpacer height={18} />
                            <UIBox>
                                <TermsCheckboxWrapper>
                                    <UICheckBox label="" checked />
                                </TermsCheckboxWrapper>
                                <TermsWrapper>
                                    Creating an account means you’re okay with our <span>Terms of Service</span>,{' '}
                                    <span>Privacy Policy</span>
                                    <span></span>, and our default <span>Notification Settings</span>.
                                </TermsWrapper>
                            </UIBox>
                            <UIButton label="Continue" />
                            <LinkWrapper>
                                <span>
                                    Already have an account?{' '}
                                    <a href="./" title="register">
                                        Sign in
                                    </a>
                                </span>
                            </LinkWrapper>
                        </UIBox>
                    </UIForm>
                </UICard>
            </Wrapper>
        </Page>
    );
};

export default SignUpPage;
