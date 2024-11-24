/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from 'react-i18next';
import { SelectInput } from './SelectInput';
import { SelectOption, SelectOptionType } from 'utils/interfaces/general.types';
import { useEffect, useRef } from 'react';
import { SingleValue } from 'react-select';

export interface Props {
    options: SelectOption[];
    value: SelectOptionType;
    defaultValue?: SelectOption;
    onChange: (value: SelectOptionType) => void;
    label?: string;
    isSerchable?: boolean;
    menuSize?: number;
    containerStyles?: string;
    placeholder?: string;
    customStyles?: CustomStylesProps;
    isDisabled?: boolean;
}

export interface CustomStylesProps {
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    arrowColor?: string;
    labelStyle?: string;
}

export const SelectInputContainer = (props: Props) => {
    const {
        isSerchable = false,
        containerStyles = 'w-52',
        defaultValue,
        isDisabled = false,
        onChange,
        menuSize = 208,
        customStyles = {
            bgColor: '#FFFFFF',
            textColor: '#424141',
            borderColor: '#E5E2E2',
            arrowColor: '#96969D',
            labelStyle: 'text-ac-pearlLightGray typography-indicator mb-[6px]',
        },
    } = props;

    const { t } = useTranslation();
    const selectRef = useRef<any>(null);

    const handleChange = (selectedOption: SingleValue<SelectOption>) => {
        onChange(selectedOption);
        if (selectRef.current) selectRef.current.blur();
    };

    useEffect(() => {
        if (defaultValue) {
            onChange(defaultValue);
        }
    }, [defaultValue]);

    const childProps = {
        ...props,
        t,
        isSerchable,
        containerStyles,
        selectRef,
        handleChange,
        menuSize,
        customStyles,
        isDisabled,
    };

    return <SelectInput {...childProps} />;
};
