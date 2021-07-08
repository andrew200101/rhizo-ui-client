/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Paper, Grid } from '@material-ui/core';
import isWeekend from 'date-fns/isWeekend';
import DateFnsUtils from '@date-io/date-fns';

import { ReactComponent as CalendarIcon } from '../../media/image/calendar-icon.svg';
import UIFormControl from './UIFormControl';
import { UILabel } from './UILabel';

const InputWrapper = styled.div`
    position: relative;
    border: none;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 16px;
    /* margin-top: 16px; */
    margin-bottom: 0px;
    border-radius: 16px;

    background: #ffffff;
    /* border: 1px solid #e5e5e5; */
    box-sizing: border-box;
    border-radius: 10px;

    > input {
        &:focus {
            /* box-shadow: rgba(94, 198, 157, 0.25) 0 0 0 2px;
            border-color: rgba(94, 198, 157, 1); */
            border-color: #5ec69d;
        }
    }
`;

const SInput = styled.input`
    flex: 1;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    padding: 8px 16px;
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
    color: #686868;

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

const IconWrapper = styled.div<any>`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 3px;
    right: 4px;
    width: 32px;
    height: 32px;
    padding: 0px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    pointer-events: none;

    ${(props) => {
        return css`
            /* cursor: pointer; */

            :hover {
                background-color: rgba(94, 198, 157, 0.1);

                > svg {
                }
            }
        `;

        return null;
    }}

    & > svg {
        width: 24px;
        height: 24px;
        user-select: false;
        /* pointer-events: none; */
    }
`;

interface IProps {
    id: string;
    name: string;
    label: string;
}

const UIDatePicker: FC<IProps> = ({ id, name, label }) => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const today = new Date(); // just Date object of today

    const renderInput = (props) => (
        <InputWrapper>
            <IconWrapper className="input-icon">
                <CalendarIcon />
            </IconWrapper>
            <SInput
                placeholder={'MM/DD/YYYY'}
                type="text"
                id={`datePicker-${props.id}`}
                name={`datePicker-${props.name}`}
                onClick={props.onClick}
                value={props.value}
                onChange={props.onChange}
            />
        </InputWrapper>
    );
    return (
        <UIFormControl>
            {label && <UILabel htmlFor={id}>{label}</UILabel>}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    label="Light blue picker"
                    value={selectedDate}
                    format="MM/dd/yyyy"
                    onChange={(date) => handleDateChange(date)}
                    TextFieldComponent={renderInput}
                    shouldDisableDate={isWeekend}
                />
            </MuiPickersUtilsProvider>
        </UIFormControl>
    );
};

export default UIDatePicker;
