/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import UIFormControl from './UIFormControl';
import { UILabel } from './UILabel';
import UIError from './UIError';

import { ReactComponent as ArrowIcon } from '../../media/image/select-arrow-icon.svg';

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
        /* user-select: false; */
        /* pointer-events: none; */
    }
`;

export const SelectWrapper = styled.div`
    position: relative;
    /* flex: 1; */
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    /* padding: 1px 16px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* line-height: 40px; */
    overflow: hidden;

    &:hover {
        ${IconWrapper} {
            background-color: rgba(94, 198, 157, 0.1);
        }
    }
`;

export const Select = styled.select<any>`
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #ffffff;
    background-image: none;
    flex: 1;
    padding: 0 15px;
    cursor: pointer;
    width: 100%;
    height: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: ${(props) => (props.touched ? '#2d2d2d' : '#A4A4A4')};

    /* Remove IE arrow */
    &::-ms-expand {
        display: none;
    }
`;

interface IProps {
    id?: string;
    name: string;
    label?: string;
    placeholder?: string;
    options?: Array<any>;
}

const UISelectField: FC<IProps> = (props) => {
    const { id, name, label, placeholder, options } = props;
    const [field, meta, helpers] = useField({ name });
    const { value } = meta;
    const { setValue } = helpers;

    return (
        <UIFormControl>
            {label && <UILabel htmlFor={id}>{label}</UILabel>}
            <SelectWrapper>
                <IconWrapper className="input-icon">
                    <ArrowIcon />
                </IconWrapper>
                <Select
                    touched={meta.touched}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                >
                    <option disabled>{placeholder}</option>
                    {options && options.map((x, i) => <option value={x.value}>{x.label}</option>)}
                </Select>
            </SelectWrapper>
            {meta.touched && meta.error ? <UIError>{meta.error}</UIError> : null}
        </UIFormControl>
    );
};

UISelectField.defaultProps = {};

export default UISelectField;
