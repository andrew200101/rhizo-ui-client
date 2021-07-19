/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import UICheckBox from './UICheckBox';
import UIFormControl from './UIFormControl';
import { UILabel } from './UILabel';

export const FieldWrapper = styled.div<any>`
    position: relative;
    border: none;
    display: flex;
    width: 100%;
    height: 40px;
    flex-direction: row;
    justify-content: space-between;
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
    color: #2d2d2d;
    user-select: none;
`;

export const Title = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #2d2d2d;
    flex: none;
    order: 0;
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

interface IProps {
    id?: string;
    name: string;
    label?: string;
    desc?: string;
    options: Array<any>;
}

const UICourseConfirmGroup: FC<IProps> = (props) => {
    const { id, name, label, options, desc } = props;
    // const [field, meta, helpers] = useField(name);
    const [field, meta, helpers] = useField({ name });
    return (
        <UIFormControl>
            {label && <Title>{label}</Title>}
            {desc && <Desc>{desc}</Desc>}
            {options &&
                options.map((x) => (
                    <FieldWrapper key={`ui-static-fw-${x}`} count={options.length}>
                        <Text>{x.label}</Text>
                        <UICheckBox label="" checked />
                    </FieldWrapper>
                ))}
        </UIFormControl>
    );
};

UICourseConfirmGroup.defaultProps = {};

export default UICourseConfirmGroup;
