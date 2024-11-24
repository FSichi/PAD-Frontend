import { memo, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { TextArea } from './TextArea';

export interface Props {
    value?: string;
    onChange: (value: string) => void;
    label?: string;
    containerStyles?: string;
    placeholder?: string;
    isDisabled?: boolean;
    rows?: number;
    cols?: number;
    name: string;
}

export const TextAreaContainer = (props: Props) => {
    const { containerStyles = '', isDisabled = false, onChange, cols = 4, rows = 4 } = props;

    const { t } = useTranslation();

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    const childProps = {
        ...props,
        t,
        containerStyles,
        handleChange,
        isDisabled,
        rows,
        cols,
    };

    return <TextArea {...childProps} />;
};

export const MemoizedTextAreaContainer = memo(TextAreaContainer);
