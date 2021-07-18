/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import Color from 'color';
import UIFormControl from './UIFormControl';
import { UILabel } from './UILabel';
import { Device } from '../../settings/Device';
import UITextField from './UITextField';
import UISpacer from '../core/UISpacer';
import UIIconButton from '../core/UIIconButton';

import { ReactComponent as PlusIcon } from '../../media/image/plus-icon.svg';
import { ReactComponent as BinIcon } from '../../media/image/bin-icon.svg';
import UITagField from './UITagField';

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

const SelectedCourseGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background: #f0f0f0;
    border-radius: 13px;
    padding: 15px 20px;
    margin-bottom: 15px;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        > h4 {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.01em;
            color: #2d2d2d;
            margin: 0 0 3px 0;
        }

        > span {
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 140%;
            letter-spacing: 0.01em;
            color: #686868;
        }
    }

    > span {
        position: relative;
        display: flex;
        min-width: 32px;
        min-height: 24px;
        justify-content: center;
        align-items: center;

        svg {
            width: 15px;
            height: 15px;
        }
    }
`;

const IconWrapper = styled.div<any>`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    right: -8px;
    width: 32px;
    height: 32px;
    padding: 0px;
    border-radius: 16px;
    overflow: hidden;

    ${(props) => {
        if (props.onClick) {
            return css`
                cursor: pointer;

                :hover {
                    background-color: rgba(94, 198, 157, 0.1);

                    > svg {
                    }
                }
            `;
        }

        return null;
    }}

    & > svg {
        display: flex;
        width: 15px;
        height: 15px;
        user-select: false;
        pointer-events: none;
    }
`;

const CourseInputWrapper = styled.div`
    display: flex;
    flex: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 20px;
    align-self: stretch;
    flex-grow: 0;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 15px;
    margin: 0px 0px;
`;
const CourseGroupWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex: none;
    flex-grow: 0;
    align-self: stretch;
    margin: 0px;

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
    options?: Array<any>;
}

const UICourseGroup: FC<IProps> = ({ id, name, label, options }) => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState({ major: '', course: '' });
    const [field, meta, helpers] = useField({ name });

    const { value } = meta;
    const { setValue } = helpers;

    const isSelected = (v) => (v === value ? 'selected' : '');

    const onChange = (fi, e) => {
        const v = e.target.value;
        if (fi === 0) setItem({ ...item, major: v });
        else if (fi === 1) setItem({ ...item, course: v });
    };

    const addItem = () => {
        if (item.major && item.course) {
            const itemList: Array<ICourseItem> = [...list];
            itemList.push({ ...item });
            setList([...itemList]);
            setItem({ major: '', course: '' });
        }
    };
    const removeItem = (n) => {
        if (list && list.length) {
            const itemList: Array<ICourseItem> = [...list];
            itemList.splice(n, 1);
            setList([...itemList]);
        }
    };

    return (
        <UIFormControl>
            {label && <UILabel>{label}</UILabel>}
            <Wrapper>
                {list &&
                    list.map((x, i) => (
                        <SelectedCourseGroupWrapper key={`sel-course-${i}`}>
                            <div>
                                <h4>{list[i].major}</h4>
                                <span>{list[i].course}</span>
                            </div>
                            <span>
                                <IconWrapper onClick={() => removeItem(i)}>
                                    <BinIcon />
                                </IconWrapper>
                            </span>
                        </SelectedCourseGroupWrapper>
                    ))}
                <CourseInputWrapper>
                    <CourseGroupWrapper>
                        <UITextField
                            id="majorName"
                            name="majorName"
                            onChange={(e) => onChange(0, e)}
                            value={item.major}
                            label="Major"
                            placeholder="Enter Major"
                            style={{ marginBottom: 0 }}
                        />
                        <UISpacer width={10} height={1} />
                        <UITextField
                            id="courseNum"
                            name="courseNum"
                            onChange={(e) => onChange(1, e)}
                            value={item.course}
                            label="Course Number"
                            placeholder="Enter Course"
                            style={{ marginBottom: 0 }}
                        />
                    </CourseGroupWrapper>
                    {options && options.length && (
                        <UITagField
                            id="majors"
                            name="majors"
                            label="Tags"
                            placeholder="Select major"
                            options={options}
                        />
                    )}
                </CourseInputWrapper>

                <UIIconButton onClick={addItem}>
                    <PlusIcon />
                </UIIconButton>
            </Wrapper>
        </UIFormControl>
    );
};

export default UICourseGroup;
