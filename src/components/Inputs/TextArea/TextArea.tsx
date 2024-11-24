import { ChangeEvent } from 'react';
import Styles from './TextArea.styled';
import { ITranslate } from 'utils/interfaces/general.types';
import { Props as ContainerProps } from './TextArea.container';

interface Props extends ContainerProps {
    t: ITranslate;
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    containerStyles: string;
    isDisabled: boolean;
    rows: number;
    cols: number;
}

export const TextArea = (props: Props) => {
    const {
        label,
        value,
        containerStyles,
        handleChange,
        placeholder,
        isDisabled,
        cols,
        rows,
        name,
    } = props;
    return (
        <div className={containerStyles}>
            {label && <p className={Styles.label}>{label}</p>}
            <textarea
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                disabled={isDisabled}
                className={Styles.input}
                rows={rows}
                cols={cols}
                spellCheck={false}
            />
        </div>
    );
};
