/* eslint-disable no-unused-vars */

import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as InputCheckBoxIcon } from '../../media/image/input-checkbox-icon.svg';

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 0px;

    & > div {
        flex-basis: auto;
        max-width: 250px;
    }

    & > label {
        display: flex;
        align-items: flex-start;
        cursor: pointer;
        margin: 0 0px;
        padding: 0px 0px;
        user-select: none;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 149%;
        letter-spacing: 0.01em;

        color: #a4a4a4;

        .square-md {
            width: 14px;
            height: 14px;
            background: #ffffff;
            border-radius: 4px;
            border: 1px solid #5ec69d;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 0px 8px 0 0;

            .icon-check {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                width: 14px;
                height: 14px;

                > svg {
                    /* stroke: #00ffff; */
                }
            }
        }
    }

    input[type='checkbox'] {
        display: none;
    }

    input[type='checkbox']:checked + label {
        .square-md {
            width: 14px;
            height: 14px;
            background: #5ec69d;
            border-radius: 4px;
        }
    }
`;

interface IProps {
    label: string;
    checked?: boolean;
    onChange?: (e) => void;
}

const UICheckBox: FC<IProps> = ({ label, onChange, checked }) => {
    const [selected, setChecked] = useState(checked);

    // const onChangeHandler = () => {};

    return (
        <Wrapper>
            <input
                type="checkbox"
                id="keepLoggedIn"
                checked={selected}
                onChange={(e) => {
                    setChecked(!selected);
                    if (onChange) onChange(e);
                }}
            />
            <label htmlFor="keepLoggedIn">
                <span className="square-md">
                    <span className="icon-check">
                        <InputCheckBoxIcon />
                    </span>
                </span>
                <span className="option-label">{label}</span>
            </label>
        </Wrapper>
    );
};

UICheckBox.defaultProps = {
    label: 'Check',
    checked: false,
    onChange: () => null,
};

export default UICheckBox;
