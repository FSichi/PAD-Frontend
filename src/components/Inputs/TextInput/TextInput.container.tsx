import { useTranslation } from 'react-i18next';
import React from 'react';
import { TextInput } from './TextInput';

export interface Props {
    value?: string;
    onChange: (value: string) => void;
    label?: string;
    containerStyles?: string;
    placeholder?: string;
    isDisabled?: boolean;
    name?: string;
    inputType?: 'text' | 'password' | 'email' | 'number';
}

export const TextInputContainer = (props: Props) => {
    const {
        containerStyles = '',
        isDisabled = false,
        onChange,
        name = '',
        inputType = 'text',
    } = props;

    const { t } = useTranslation();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    const childProps = {
        ...props,
        t,
        containerStyles,
        handleChange,
        isDisabled,
        name,
        inputType,
    };

    return <TextInput {...childProps} />;
};
