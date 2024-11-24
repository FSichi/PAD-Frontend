import { CustomStylesProps } from './SelectInput.container';

interface Props {
    menuHeight: number;
    customStyles: CustomStylesProps;
}

const Styles = ({ menuHeight, customStyles }: Props) => {
    const StylesReturn = {
        label: customStyles.labelStyle,
        placeholder: (provided: any, _state: any) => ({
            ...provided,
            color: '#0F172A',
            fontWeight: 500,
        }),
        control: (provided: any, state: any) => ({
            ...provided,
            borderRadius: 6,
            minHeight: '48px',
            height: '48px',
            textAlign: 'start',
            borderColor: state.isFocused ? '#64748B' : customStyles.borderColor, // Cambia el color del borde cuando está enfocado
            boxShadow: state.isFocused ? 'none' : provided.boxShadow,
            backgroundColor: customStyles.bgColor,
            '&:hover': {
                borderColor: '#64748B', // Color del borde cuando está enfocado y en hover
                cursor: 'pointer',
            },
        }),
        option: (provided: any, _state: { isSelected: any }) => ({
            ...provided,
            padding: '6px 8px',
            minHeight: 'auto',
            height: 'auto',
            color: '#040B16',
            backgroundColor: _state.isSelected ? '#F6F6F6' : 'white',
            borderRadius: 2,
            fontFamily: 'DM Sans',
            fontWeight: 500,
            lineHeight: '20px',
            fontSize: '14px',
            '&:hover': {
                backgroundColor: '#F6F6F6',
                cursor: 'pointer',
            },
        }),
        singleValue: (provided: any, _state: any) => ({
            ...provided,
            color: customStyles.textColor,
            fontFamily: 'DM Sans',
            fontWeight: 500,
            fontSize: '14px',
        }),
        valueContainer: (provided: any, _state: any) => ({
            ...provided,
            height: '48px',
        }),
        input: (provided: any, _state: any) => ({
            ...provided,
            color: '#5B5B65',
            fontFamily: 'DM Sans',
            fontWeight: 500,
            fontSize: '14px',
        }),
        indicatorSeparator: (_state: any) => ({
            display: 'none',
        }),
        indicatorsContainer: (provided: any, _state: any) => ({
            ...provided,
            height: '48px',
        }),
        dropdownIndicator: (provided: any, _state: any) => ({
            ...provided,
            marginRight: 10,
            width: 15,
            height: 15,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: customStyles.arrowColor,
            fontWeight: 300,
            '&:hover': {
                color: '#0F172A',
            },
        }),
        menu: (provided: any) => ({
            ...provided,
            width: menuHeight, // Ajusta este valor según sea necesario
        }),
        menuList: (provided: any) => ({
            ...provided,
            width: menuHeight,
            display: 'grid',
            gap: '4px',
            padding: 5,
        }),
    };

    return StylesReturn;
};

export default Styles;
