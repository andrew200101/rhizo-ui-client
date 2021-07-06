/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import UIFormControl from './UIFormControl';
import { UILabel } from './UILabel';

export const FieldWrapper = styled.div<any>`
    position: relative;
    border: none;
    display: flex;
    width: 100%;
    height: 40px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-right: 16px;
    /* margin-top: 16px; */
    border-radius: 16px;
    background: #f0f0f0;
    /* border: 1px solid #e5e5e5; */
    box-sizing: border-box;
    border-radius: 10px;
    padding: 4px 15px;
    margin-bottom: ${(props) => (props.count > 1 ? 10 : 0)}px;
`;

export const Text = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #686868;
    user-select: none;
`;

interface IProps {
    id?: string;
    name: string;
    label?: string;
    value: Array<string>;
}

const UIStaticField: FC<IProps> = (props) => {
    const { id, name, label, value } = props;
    // const [field, meta, helpers] = useField(name);
    const [field, meta, helpers] = useField({ name });
    return (
        <UIFormControl>
            {label && <UILabel htmlFor={id}>{label}</UILabel>}
            {value &&
                value.map((x) => (
                    <FieldWrapper count={value.length}>
                        <Text>{x}</Text>
                    </FieldWrapper>
                ))}
        </UIFormControl>
    );
};

UIStaticField.defaultProps = {};

export default UIStaticField;
