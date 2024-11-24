import { ChangeEvent } from 'react';
import { Props as ContainerProps } from './CheckInput.container';
import Styles from './CheckInput.styled';

interface Props extends ContainerProps {
    isChecked: boolean;
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CheckInput = (props: Props) => {
    const { handleCheckboxChange, isChecked, inputStyles } = props;

    return (
        <div className={Styles.container}>
            <input
                type="checkbox"
                className={`${Styles.checkbox} ${inputStyles}`}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />

            <span className={Styles.iconCheckbox}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1">
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"></path>
                </svg>
            </span>
        </div>
    );
};
