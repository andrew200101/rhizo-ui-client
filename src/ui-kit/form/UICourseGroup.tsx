/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Color from 'color';
import UIFormControl from './UIFormControl';
import { UILabel } from './UILabel';
import { Device } from '../../settings/Device';
import UITextField from './UITextField';
import UISpacer from '../core/UISpacer';
import UIIconButton from '../core/UIIconButton';

import { ReactComponent as PlusIcon } from '../../media/image/plus-icon.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    @media (max-width: ${Device.mobile}px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    > button {
        width: 40px;
        height: 40px;

        svg {
            width: 14px;
            height: 14px;
        }
    }
`;

const CircleWrapper = styled.span`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    top: 12px;
    right: 12px;
`;

// const OuterCircle = styled.div`
//     position: relative;

//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     width: 16px;
//     height: 16px;
//     background-color: #ffffff;
//     border-radius: 50%;
// `;

const InnerCircle = styled.div<any>`
    position: relative;

    display: flex;
    width: 16px;
    height: 16px;
    border: 3px solid #ffffff;
    background-color: #ffffff;
    /* background-color: ${(props) => props.fill}; */
    border-radius: 50%;
    transition: background-color 0.3s linear;
`;

const SButton = styled.button<any>`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: ${(props) => props.fill};
    border: none;
    border-radius: 10px;
    min-width: 130px;
    height: 40px;
    border: none;
    transition: background-color 0.3s linear;
    cursor: pointer;
    padding: 4px 15px;
    overflow: hidden;
    width: 100%;

    @media (max-width: ${Device.mobile}px) {
        width: 100%;
    }

    &.selected {
        & ${InnerCircle} {
            background-color: ${(props) => props.fill};
        }
    }

    :hover {
        background-color: ${(props) => Color(props.fill).darken(0.1).toString()};
        /* background-color: #7dd8b5; */
    }
`;

const Label = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin: 0px 0px;
`;

const CourseGroupWrapper = styled.div`
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

interface ICourseItem {
    major: string;
    course: string;
}

interface IProps {
    id: string;
    name: string;
    label: string;
}

const UICourseGroup: FC<IProps> = ({ id, name, label }) => {
    const [list, setList] = useState([{ major: '', course: '' }]);
    const [field, meta, helpers] = useField({ name });

    const { value } = meta;
    const { setValue } = helpers;

    const isSelected = (v) => (v === value ? 'selected' : '');

    const setCourse = (i, fi, e) => {
        const v = e.target.value;
        const itemList: Array<ICourseItem> = [...list];
        if (fi === 0) itemList[i].major = v;
        else if (fi === 1) itemList[i].course = v;

        setList([...itemList]);
    };

    const addItem = () => {
        const itemList: Array<ICourseItem> = [...list];
        itemList.push({ major: '', course: '' });
        setList([...itemList]);
    };

    return (
        <UIFormControl>
            {label && <UILabel>{label}</UILabel>}
            <Wrapper>
                {list &&
                    list.map((x, i) => (
                        <CourseGroupWrapper key={`course-${i}`}>
                            <UITextField
                                id="majorName"
                                name="majorName"
                                onChange={(e) => setCourse(i, 0, e)}
                                value={list[i].major}
                                label="Major"
                                placeholder="Enter Major"
                            />
                            <UISpacer width={10} height={1} />
                            <UITextField
                                id="courseNum"
                                name="courseNum"
                                onChange={(e) => setCourse(i, 1, e)}
                                value={list[i].course}
                                label="Course Number"
                                placeholder="Enter Course"
                            />
                        </CourseGroupWrapper>
                    ))}
                <UIIconButton onClick={addItem}>
                    <PlusIcon />
                </UIIconButton>
            </Wrapper>
        </UIFormControl>
    );
};

export default UICourseGroup;
