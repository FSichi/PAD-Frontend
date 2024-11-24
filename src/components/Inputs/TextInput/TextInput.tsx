import { ITranslate } from 'utils/interfaces/general.types';
import React from 'react';
import Styles from './TextInput.styled';
import { Props as ContainerProps } from './TextInput.container';

interface Props extends ContainerProps {
    t: ITranslate;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    containerStyles: string;
    isDisabled: boolean;
    name: string;
    inputType: 'text' | 'password' | 'email' | 'number';
}

export const TextInput = (props: Props) => {
    const {
        label,
        value,
        containerStyles,
        handleChange,
        placeholder,
        isDisabled,
        name,
        inputType,
    } = props;

    return (
        <div className={containerStyles}>
            {label && <p className={Styles.label}>{label}</p>}
            <input
                id={name}
                name={name}
                type={inputType}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                disabled={isDisabled}
                className={Styles.input}
            />
        </div>
    );
};
