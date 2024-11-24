interface Props {
    descriptionColor?: string;
}

const Styles = ({ descriptionColor }: Props) => {
    const StylesReturn = {
        description: `text-sm ${descriptionColor ? `text-[${descriptionColor}]` : 'text-cia-grey-main'}`,
    };

    return StylesReturn;
};

export default Styles;
