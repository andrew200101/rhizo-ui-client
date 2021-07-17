/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import Page from '../common/Page';
import UICard from '../../ui-kit/core/UICard';

import { ReactComponent as HeroImage } from '../../media/image/student-info-presentation.svg';
import UIButton from '../../ui-kit/core/UIButton';
import { Device } from '../../settings/Device';
import UIForm from '../../ui-kit/form/UIForm';
import UIBox from '../../ui-kit/layout/UIBox';
import UIAutocomplete from '../../ui-kit/form/UIAutoComplete';
import UICourseGroup from '../../ui-kit/form/UICourseGroup';
import UITextField from '../../ui-kit/form/UITextField';
import AuthContentWrapper from '../../widget/AuthContentWrapper';
import Presentation from '../../widget/Presentation';
import UILink from '../../ui-kit/core/UILink';
import UIStaticField from '../../ui-kit/form/UIStaticField';
import UIHint from '../../ui-kit/core/UIHint';
import UITagField from '../../ui-kit/form/UITagField';

const Title = styled.h4`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
    max-width: 420px;
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
const ConfirmWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 15px;

    h4 {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.01em;
        color: #2d2d2d;
        margin: 0px 0px 4px 0px;
        padding: 0px;
    }

    span {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #686868;
    }
`;

const majorList = [
    {
        value: 'Economics',
        label: 'Economics',
    },
    {
        value: 'Mathematics',
        label: 'Mathematics',
    },
    {
        value: 'Business',
        label: 'Business',
    },
    {
        value: 'Agriculture',
        label: 'Agriculture',
    },
    {
        value: 'Arts',
        label: 'Arts',
    },
    {
        value: 'Communications',
        label: 'Communications',
    },
    {
        value: 'Community',
        label: 'Community',
    },
    {
        value: 'Science',
        label: 'Science',
    },
    {
        value: 'Engineering',
        label: 'Engineering',
    },
    {
        value: 'Health Administration',
        label: 'Health Administration',
    },
    {
        value: 'Health Sciences & Technologies',
        label: 'Health Sciences & Technologies',
    },
    {
        value: 'Philosophy',
        label: 'Philosophy',
    },
    {
        value: 'Repair, Production & Construction',
        label: 'Repair, Production & Construction',
    },
    {
        value: 'Social Sciences & Law',
        label: 'Social Sciences & Law',
    },
    {
        value: 'Sciences Biological & Physical',
        label: 'Sciences Biological & Physical',
    },
];

const educationLevelList = [
    {
        value: 'Undergraduate',
        label: 'Undergraduate',
    },
    {
        value: 'sophomore',
        label: 'Sophomore',
    },
    {
        value: 'graduate',
        label: 'Graduate',
    },
];

const profileList = {
    student: ['Student'],
    tutor: ['Tutor'],
    both: ['Student', 'Tutor'],
};

interface IPayload {
    institution: string;
    educationLevel: string;
}

const FormSchema = Yup.object().shape({
    institution: Yup.string().required('Required'),
    educationLevel: Yup.string().required('Required'),
    day: Yup.string().required('Required'),
    month: Yup.string().required('Required'),
    year: Yup.string().required('Required'),
});

const TutorProfilePage = (props) => {
    const [isTutor, setIsTutor] = useState(true);
    const [selectedProfile, setSelectedProfile] = useState('both');

    const formik = useFormik({
        initialValues: {
            institution: '',
            educationLevel: '',
        },
        validationSchema: FormSchema,
        onSubmit: (values: IPayload, { setSubmitting }: FormikHelpers<IPayload>) => {
            setTimeout(() => {
                setSubmitting(false);
            }, 500);
        },
    });

    return (
        <Page name="profile-student">
            <AuthContentWrapper>
                <Presentation title="Discover the Best Tutors Around the World" image={<HeroImage />} />

                <UICard flat={true}>
                    <Title>Tutor information</Title>

                    <UIForm formik={formik}>
                        <UIBox justifyContent="flex-end">
                            <UILink label="Register as a student only" />
                        </UIBox>
                        <UITextField
                            id="institution"
                            name="institution"
                            onChange={formik.handleChange}
                            value={formik.values.institution}
                            label="institution"
                            placeholder="Enter name institution"
                        ></UITextField>

                        <ConfirmWrapper>
                            <h4>Confirmation educational institution</h4>
                            <span>
                                This email is to verify that you attend your selected institution. We will send you a
                                verification link
                            </span>
                        </ConfirmWrapper>

                        <UIStaticField id="emailConf" name="emailConf" value={['abc@domain.com']} label="" />
                        <UIHint text="You must belong to an institution currently supported at Rhizo." />

                        <UIAutocomplete
                            id="majors"
                            name="majors"
                            label="Select major(s) currently attending"
                            placeholder="Select major"
                            options={majorList}
                        />

                        <UITagField
                            id="majors"
                            name="majors"
                            label="Select major(s) currently attending"
                            placeholder="Select major"
                            options={majorList}
                        />

                        <UICourseGroup
                            id="courseGroup"
                            name="courseGroup"
                            label="Input courses you are currently taking"
                            // placeholder="Select major"
                            // options={majorList}
                        />
                        <UIBox direction="column">
                            <UIButton label="Continue" />
                        </UIBox>
                    </UIForm>
                </UICard>
            </AuthContentWrapper>
        </Page>
    );
};

export default TutorProfilePage;
