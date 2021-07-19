/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import UICheckBox from './UICheckBox';
import UIFormControl from './UIFormControl';
import { UILabel } from './UILabel';

import { ReactComponent as GoogleCalendarIcon } from '../../media/image/google-cal-icon.svg';
import { ReactComponent as OutlookCalendarIcon } from '../../media/image/outlook-cal-icon.svg';
// import { ReactComponent as OutlookCalendarIcon } from '../../media/image/icons8-outlook-calendar.svg';
// import { ReactComponent as GoogleCalendarIcon } from '../../media/image/icons8-google-calendar.svg';
import { ReactComponent as BinIcon } from '../../media/image/bin-icon.svg';
import { ReactComponent as PlusIcon } from '../../media/image/plus-icon.svg';
import UIIconButton from '../core/UIIconButton';
import { Device } from '../../settings/Device';

const calendarList = [
    {
        title: 'Personal Schedule',
        desc: 'Outlook Calendar',
        type: 'outlook',
        image: OutlookCalendarIcon,
    },
    {
        title: 'School',
        desc: 'Google Calendar',
        type: 'google',
        image: GoogleCalendarIcon,
    },
];

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

    & > button {
        width: 40px;
        height: 40px;
        margin-top: 0px;

        svg {
            width: 14px;
            height: 14px;
        }
    }
`;

export const FieldWrapper = styled.div<any>`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 15px;
    position: static;
    height: 60px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    border-radius: 10px;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    margin: 10px 0px;
`;

export const TextWrapper = styled.span`
    display: flex;
    flex: auto;
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    margin-right: 30px;

    & > h4 {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.01em;
        color: #2d2d2d;

        flex: none;
        flex-grow: 0;
        margin: 4px 0px;
    }

    & > span {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.01em;
        color: #a4a4a4;
        flex: none;
        flex-grow: 0;
        margin: 4px 0px;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: none;
    flex-grow: 0;
    margin: 0px 15px 0px 0px;
    width: 36px;
    height: 36px;

    & > svg {
    }
`;

const ControlWrapper = styled.div<any>`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    right: 7px;
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

export const Title = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #2d2d2d;
    flex: none;
    flex-grow: 0;
    margin: 3px 0px;
    user-select: none;
`;

export const Desc = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #686868;
    margin: 3px 0px 10px 0px;
    user-select: none;
`;

const InputWrapper = styled.div`
    position: relative;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 16px;
    /* margin-top: 16px; */
    margin-bottom: 0px;
    border-radius: 0px;

    background: #ffffff;
    /* border: 1px solid #e5e5e5; */
    box-sizing: border-box;
    flex: none;
    flex-grow: 0;
    align-self: stretch;
    margin: 0px;
    padding: 0px;

    > input {
        &:focus {
            /* box-shadow: rgba(94, 198, 157, 0.25) 0 0 0 2px; */
            /* border-color: rgba(94, 198, 157, 1); */
            border-color: #5ec69d;
        }
    }
`;

const SInput = styled.input`
    flex: 1;
    height: 20px;
    border-radius: 0px;
    border: none;
    /* border-bottom: 1px solid #e5e5e5; */
    border-bottom: 1px solid #ffffff;
    padding: 0px 0px 4px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    transition: border-color 0.3s linear, box-shadow 0.3s linear;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #2d2d2d;

    &::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 32px;
        display: flex;
        align-items: center;
        color: #a4a4a4;
        opacity: 1;
    }

    :focus {
        outline: none;
    }
`;

const Label = styled.label`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.01em;
    color: #a4a4a4;
    flex: none;
    flex-grow: 0;
    margin: 2px 0px 0px 0px;
    user-select: none;
`;

interface IProps {
    id?: string;
    name: string;
    label?: string;
    desc?: string;
}

const UICalendarGroup: FC<IProps> = (props) => {
    const { id, name, label, desc } = props;
    const [list, setList] = useState(calendarList);
    // const [field, meta, helpers] = useField(name);
    const [field, meta, helpers] = useField({ name });

    const removeItem = (n) => {
        // if (list && list.length) {
        //     const itemList: Array<ICourseItem> = [...list];
        //     itemList.splice(n, 1);
        //     setList([...itemList]);
        // }
    };

    return (
        <UIFormControl>
            <Wrapper>
                {label && <Title>{label}</Title>}
                {desc && <Desc>{desc}</Desc>}

                {list &&
                    list.map((x, i) => (
                        <FieldWrapper key={`ui-cal-item-${x}`} count={list.length}>
                            <IconWrapper>{<x.image />}</IconWrapper>
                            <TextWrapper>
                                <InputWrapper>
                                    <SInput
                                        placeholder="Enter name"
                                        type="text"
                                        id={`cal-name-${id}-${i}`}
                                        name={`cal-name-${id}-${i}`}
                                        value={x.title}
                                        onChange={() => {}}
                                    />
                                </InputWrapper>
                                <Label htmlFor={`cal-name-${id}-${i}`}>{x.desc}</Label>
                            </TextWrapper>
                            <ControlWrapper onClick={() => removeItem(i)}>
                                <BinIcon />
                            </ControlWrapper>
                        </FieldWrapper>
                    ))}
                <UIIconButton type="button" onClick={() => {}}>
                    <PlusIcon />
                </UIIconButton>
            </Wrapper>
        </UIFormControl>
    );
};

UICalendarGroup.defaultProps = {};

export default UICalendarGroup;
