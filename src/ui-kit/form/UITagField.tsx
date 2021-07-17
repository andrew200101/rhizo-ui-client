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

interface IOption {
    label: string;
    value: number;
}

const TagInputWrapper = styled('div')<any>`
    flex: none;
    align-self: stretch;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    border-radius: 16px;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    max-height: 168px;
    overflow: auto;

    &:hover {
        border-color: rgba(94, 198, 157, 1);
    }

    &.focused {
        border-color: rgba(94, 198, 157, 1);
    }

    & input {
        font-size: 14px;
        height: 20px;
        box-sizing: border-box;
        padding: 4px 6px;
        width: 0;
        min-width: 30px;
        flex-grow: 1;
        border: 0;
        margin: 0;
        outline: 0;
    }
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
    padding: 0px 6px;
    margin-right: 1px;
    margin-bottom: 1px;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 7px;
    box-sizing: content-box;
    outline: 0;
    overflow: hidden;
    color: #2d2d2d;
    border-radius: 7px;
    user-select: none;

    & span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.01em;
    }

    & svg {
        width: 10px;
        height: 10px;
        /* font-size: 12px; */
        cursor: pointer;
        margin-left: 8px;
        fill: #2d2d2d;
        &:hover {
            fill: #ff7c7c;
        }
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

const UITagField: FC<IProps> = (props) => {
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
            <TagInputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''} count={value ? value.length : 0}>
                {value.map((option: IOption, index: number) => (
                    <Tag label={option.label} {...getTagProps({ index })} />
                ))}
                <input {...getInputProps()} />
            </TagInputWrapper>

            {meta.touched && meta.error ? <UIError>{meta.error}</UIError> : null}
            {groupedOptions.length > 0 ? (
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

export default UITagField;
