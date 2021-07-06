/* eslint-disable no-unused-vars */
import { useField } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import Color from 'color';
import UIFormControl from './UIFormControl';
import { UILabel } from './UILabel';
import { Device } from '../../settings/Device';

const Wrapper = styled.div`
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

    & > button {
        margin-right: 10px;
        margin-top: 10px;
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

interface IProps {
    name: string;
    label: string;
}

const UISegmentButton: FC<IProps> = ({ name, label }) => {
    const [field, meta, helpers] = useField({ name });

    const { value } = meta;
    const { setValue } = helpers;

    const isSelected = (v) => (v === value ? 'selected' : '');

    return (
        <UIFormControl>
            {label && <UILabel>{label}</UILabel>}
            <Wrapper>
                <SButton type="button" fill="#5EC69D" onClick={() => setValue(1)} className={isSelected(1)}>
                    <Label>Student</Label>
                    <CircleWrapper>
                        <InnerCircle />
                    </CircleWrapper>
                </SButton>
                <SButton type="button" fill="#4992FF" onClick={() => setValue(2)} className={isSelected(2)}>
                    <Label>Tutor</Label>
                    <CircleWrapper>
                        <InnerCircle />
                    </CircleWrapper>
                </SButton>
                <SButton type="button" fill="#AD90FF" onClick={() => setValue(3)} className={isSelected(3)}>
                    <Label>Both</Label>
                    <CircleWrapper>
                        <InnerCircle />
                    </CircleWrapper>
                </SButton>
            </Wrapper>
        </UIFormControl>
    );
};

export default UISegmentButton;
