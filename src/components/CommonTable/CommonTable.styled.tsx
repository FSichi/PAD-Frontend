interface TableStylesProps {
    width?: string;
}

export const Styles = ({ width = '' }: TableStylesProps) => {
    return {
        header: `bg-cia-white text-cia-grey-main h-11 typography-p-medium p-3 ${width} border-b border-[#F6F6F6]`,
    };
};

export default Styles;
