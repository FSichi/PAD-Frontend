import { ChangeEvent, memo, useState } from 'react';
import { CheckInput } from './CheckInput';

export interface Props {
    checked?: boolean;
    inputStyles?: string;
}

export const CheckInputContainer = (props: Props) => {
    const { checked = false, inputStyles = '' } = props;

    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const childProps = {
        ...props,
        checked,
        isChecked,
        handleCheckboxChange,
        inputStyles,
    };

    return <CheckInput {...childProps} />;
};

export const MemoizedCheckInputContainer = memo(CheckInputContainer);
