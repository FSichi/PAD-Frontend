interface Props {
    customStyles?: string;
    format?: 'rounded' | 'squared';
    variant?: 'dark' | 'light';
    tabsNumber: number;
    titlePosition?: string;
}

export const StylesForButton = ({
    customStyles,
    format = 'squared',
    variant = 'light',
    tabsNumber,
}: Props) => {
    let container = 'p-1';

    const formatStyles = {
        rounded: 'rounded-full',
        squared: 'rounded-md',
    };

    const background = {
        dark: 'bg-[#042F5A]',
        light: 'bg-[#E8EDF3]',
        default: 'bg-[#E8EDF3]',
    };

    const width: {
        [key: number]: string;
        default: string;
    } = {
        2: 'w-28',
        3: 'w-44',
        default: 'w-44',
    };

    const tabsWidth: {
        [key: number]: string;
        default: string;
    } = {
        2: 'w-1/2',
        3: 'w-1/3',
        default: 'w-1/3',
    };

    container += `
        ${formatStyles[format] || formatStyles.squared}
        ${background[variant] || background.default}
        ${width[tabsNumber] || width.default}
        ${customStyles}
    `;

    const className = {
        container,
        tab: `transition-transform-background duration-300 py-1 text-[13px] font-medium ${formatStyles[format]} ${tabsWidth[tabsNumber] || tabsWidth.default}`,
        tabSelected: 'bg-transparent text-ac-black',
        tabUnselectedDark: 'bg-transparent text-white',
        tabUnselectedLight: 'bg-transparent text-ac-space',
    };

    return {
        ...className,
    };
};

export const StylesForTitle = (titlePosition?: string) => ({
    container: titlePosition || 'flex gap-6' /* border-b border-[#E5E2E2] */,
    titleContainer: 'py-3 hover:cursor-pointer',
    titleActive: 'text-cia-purple-main',
    titleDisabled: 'text-[#2024214D]',
    titleBase: 'text-xl font-semibold',
});

export default { StylesForButton, StylesForTitle };
