import Select, { SingleValue } from 'react-select';
import { Props as ContainerProps } from './SelectInput.container';
import { ITranslate, SelectOption } from 'utils/interfaces/general.types';
import { MutableRefObject } from 'react';
import Styles from './SelectInput.styled';

interface Props extends ContainerProps {
    t: ITranslate;
    handleChange: (selectedOption: SingleValue<SelectOption>) => void;
    selectRef: MutableRefObject<any>;
}

export const SelectInput = (props: Props) => {
    const {
        label,
        options,
        isSerchable,
        value,
        containerStyles,
        defaultValue,
        handleChange,
        selectRef,
        menuSize,
        placeholder,
        customStyles,
        isDisabled,
    } = props;

    const StylesFormatted = Styles({ menuHeight: menuSize!, customStyles: customStyles! });

    return (
        <div className={containerStyles}>
            {label && <p className={`${StylesFormatted.label}`}>{label}</p>}

            <Select
                ref={selectRef}
                options={options}
                styles={StylesFormatted}
                isSearchable={isSerchable}
                isDisabled={isDisabled}
                placeholder={placeholder || 'Seleccionar...'}
                value={value}
                noOptionsMessage={() => 'No hay opciones'}
                defaultValue={defaultValue}
                onChange={handleChange}
                classNamePrefix="react-select"
            />
        </div>
    );
};
