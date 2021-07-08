/* eslint-disable no-unused-vars */

import React, { FC } from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { useField } from 'formik';

import styled, { css } from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import UIFormControl from './UIFormControl';
import { UILabel } from './UILabel';
import UIError from './UIError';

import { ReactComponent as ArrowIcon } from '../../media/image/select-arrow-icon.svg';

interface IOption {
    label: string;
    value: number;
}

const TagInputWrapper = styled('div')<any>`
    width: 100%;
    /* border: 1px solid #d9d9d9; */
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;

    border-radius: 16px;
    background: #f0f0f0;
    /* border: 1px solid #e5e5e5; */
    box-sizing: border-box;
    border-radius: 10px;
    padding: ${(props) => (props.count ? '15px 15px 5px 15px' : '0px')};
    margin-top: ${(props) => (props.count ? '4px' : '0px')};
    height: ${(props) => (props.count ? 'auto' : '0px')};
    max-height: 168px;
    overflow: auto;

    /* &:hover {
        border-color: #40a9ff;
    }

    &.focused {
        border-color: #40a9ff;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    } */
`;

const Tag = styled(({ label, onDelete, ...props }) => (
    <div {...props}>
        <span>{label}</span>
        <CloseIcon onClick={onDelete} />
    </div>
))`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 6px 3px 7px;
    /* height: 20px; */
    /* background-color: #fafafa; */
    background-color: #ffffff;
    /* border: 1px solid #e8e8e8; */
    /* border-radius: 4px; */
    box-sizing: content-box;
    /* padding: 0 4px 0 10px; */
    outline: 0;
    overflow: hidden;
    color: #2d2d2d;
    /* background: #f0f0f0; */
    border-radius: 7px;
    margin: 0 10px 10px 0;

    /* &:hover {
        border-color: #40a9ff;
        background-color: #e6f7ff;
    } */

    & span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    & svg {
        width: 20px;
        height: 20px;
        /* font-size: 12px; */
        cursor: pointer;
        padding: 4px;
        fill: #2d2d2d;
    }
`;

const ListWrapper = styled.div`
    width: 100%;
    margin: 85px 0px 0px 0px;
    padding: 0px;
    z-index: 1;
    position: absolute;
    list-style: none;
    background-color: #ffffff;
    overflow: hidden;
    max-height: 250px;
    /* border: 1px solid rgba(0, 0, 0, 0.25); */
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const ListGroup = styled.ul`
    width: 100%;
    max-height: 250px;
    overflow: auto;
    margin: 0px;
    padding: 0px;
    position: relative;
    list-style: none;

    & > li {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        color: #686868;
        min-height: 32px;
        padding: 8px 8px;

        &[data-focus='true'] {
            background-color: rgba(94, 198, 157, 0.25);
        }

        :hover {
            background-color: #eeeeee;
            color: #686868;
        }

        :active {
            background-color: rgba(94, 198, 157, 0.5);
            color: #686868;
        }
    }
`;

const ListBox = styled('ul')`
    width: 100%;
    margin: 2px 0 0;
    padding: 0;
    list-style: none;
    background-color: #fff;
    overflow: auto;
    max-height: 250px;
    /* border-radius: 4px; */
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); */
    /* z-index: 1; */

    & li {
        cursor: pointer;
        color: #686868;
        min-height: 32px;
        padding: 5px 12px;
        display: flex;

        & span {
            flex-grow: 1;
        }

        & svg {
            width: 24px;
            height: 24px;
            color: transparent;
        }
    }

    & li[aria-selected='true'] {
        /* background-color: #fafafa; */
        background-color: rgba(94, 198, 157, 0.1);
        font-weight: 600;

        & svg {
            color: rgba(94, 198, 157, 1);
        }
    }

    & li[data-focus='true'] {
        /* background-color: #e6f7ff; */
        background-color: #fafafa;
        /* background-color: rgba(94, 198, 157, 0.1); */
        cursor: pointer;

        & svg {
            color: #c0c0c0;
        }
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
        /* user-select: false; */
        /* pointer-events: none; */
    }
`;

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

interface IProps {
    id?: string;
    name: string;
    label?: string;
    placeholder?: string;
    options: Array<any>;
}

const UIAutocomplete: FC<IProps> = (props) => {
    const { id, name, label, placeholder, options } = props;
    const [field, meta, helpers] = useField({ name });
    // const { value } = meta;
    const { setValue } = helpers;

    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
        focused,
        setAnchorEl,
    } = useAutocomplete({
        id: `autocomplete-${id}`,
        defaultValue: [options[1]],
        multiple: true,
        options,
        getOptionLabel: (option) => option.label,
    });

    return (
        <UIFormControl autoComplete={getRootProps()}>
            {label && (
                <UILabel htmlFor={id} {...getInputLabelProps()}>
                    {label}
                </UILabel>
            )}
            <InputWrapper>
                <IconWrapper className="input-icon">
                    <ArrowIcon />
                </IconWrapper>
                <SInput
                    placeholder={placeholder}
                    type="text"
                    id={id}
                    name={name}
                    value={'value'}
                    {...getInputProps()}
                />
            </InputWrapper>
            <TagInputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''} count={value ? value.length : 0}>
                {value.map((option: IOption, index: number) => (
                    <Tag label={option.label} {...getTagProps({ index })} />
                ))}
                {/* <input {...getInputProps()} /> */}
            </TagInputWrapper>
            {meta.touched && meta.error ? <UIError>{meta.error}</UIError> : null}
            {groupedOptions.length > 0 ? (
                // <ListWrapper {...getListboxProps()}>
                //     <ListBox>
                //         {groupedOptions.map((option, index) => (
                //             <li {...getOptionProps({ option, index })}>{option.label}</li>
                //         ))}
                //     </ListBox>
                // </ListWrapper>
                <ListWrapper {...getListboxProps()}>
                    <ListBox>
                        {groupedOptions.map((option, index) => (
                            <li {...getOptionProps({ option, index })}>
                                <span>{option.label}</span>
                                <CheckIcon fontSize="small" />
                            </li>
                        ))}
                    </ListBox>
                </ListWrapper>
            ) : null}
        </UIFormControl>
    );
};

export default UIAutocomplete;
