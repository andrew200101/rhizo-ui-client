/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as InputPasswordHideIcon } from '../../media/image/input-password-hide-icon.svg';
import UIFormControl from './UIFormControl';
import { UILabel } from './UILabel';
import UIError from './UIError';

export const InputWrapper = styled.div`
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

const IconWrapper = styled.div<any>`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 4px;
    right: 4px;
    width: 32px;
    height: 32px;
    padding: 0px;
    border-radius: 16px;
    /* background-color: rgba(94, 198, 157, 0); */
    /* transition: background-color- 0.3s linear; */
    overflow: hidden;

    ${(props) => {
        if (props.onClick) {
            return css`
                cursor: pointer;

                :hover {
                    background-color: rgba(94, 198, 157, 0.1);

                    > svg {
                        fill: rgba(94, 198, 157, 1);
                        /* stroke: rgba(94, 198, 157, 1); */
                    }
                }
            `;
        }

        return null;
    }}

    & > svg {
        display: flex;
        /* width: 24px; */
        /* height: 24px; */
        fill: #a4a4a4;
        /* stroke: #a4a4a4; */
        user-select: false;
        pointer-events: none;
    }
`;

export const SInput = styled.input`
    border: none;
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

    ${(props) => {
        if (props.type === 'password') {
            return css`
                font-family: caption;
                /* font-size: 24px; */
                color: #2d2d2d;
            `;
        }

        return null;
    }}

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

interface IProps {
    id?: string;
    name: string;
    placeholder?: string;
    label?: string;
    onChange?: (e) => void;
    value?: string;
}

const UIPasswordField: FC<IProps> = ({ id, label, placeholder, name, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [field, meta, helpers] = useField({ name });
    return (
        <UIFormControl>
            {label && <UILabel htmlFor={id}>{label}</UILabel>}
            <InputWrapper>
                <IconWrapper className="input-icon" onClick={() => setShowPassword(!showPassword)}>
                    <InputPasswordHideIcon />
                </IconWrapper>
                <SInput
                    placeholder={placeholder}
                    type={showPassword ? 'text' : 'password'}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </InputWrapper>
            {meta.touched && meta.error ? <UIError>{meta.error}</UIError> : null}
        </UIFormControl>
    );
};

UIPasswordField.defaultProps = {};

export default UIPasswordField;
