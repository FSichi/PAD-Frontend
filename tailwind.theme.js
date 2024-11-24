const customColors = {
    /* COLORS FROM FIGMA DESIGN CodetriIA */
    cia: {
        purpleBlue: {
            main: '#7169FF',
            light: '#758FFF',
        },
        purple: {
            main: '#B871FF',
            light: '#F3E8FF',
            dark: '#2B2741',
        },
        grey: {
            main: '#64748B',
            light: '#E0DFF5',
            dark: '#212529',
        },
        background: '#F3F4FD',
        blue: '#4A6FF2',
        dark: '#0A0F1F',
        white: '#FFFFFF',
    },
};

const customHeight = {
    small: '32px',
    medium: '40px',
    large: '48px',
};

const customWidth = {
    screenContent: '1280px',
};

const customScreens = {
    1920: '1920px',
    1440: '1440px',
    1537: '1537px',
    1280: '1280px',
};

const customGradients = {
    gradient: 'linear-gradient(90deg, #5266FF 0%, #B871FF 100%)',
    gradient2: 'linear-gradient(90deg, #F0CA63 0%, #F69F9A 50%, #C7AFF9 100%)',
    hoverBPGradient: 'linear-gradient(90deg, #7224EB 0%, #5266FF 100%)',
    activeBPGradient:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(90deg, #7224EB 0%, #5266FF 100%)',
    activeBSGradient:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, #7169FF, #7169FF)',
    activeBTGradient:
        'linear-gradient(0deg, rgba(47, 79, 156, 0.1), rgba(47, 79, 156, 0.1)), linear-gradient(0deg, #E9E9FF, #E9E9FF)',
    disabledBSGradient:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, #7169FF, #7169FF)',
};

const customTypography = {
    '.typography-h2': {
        fontWeight: 500,
        fontSize: '32px',
        lineHeight: '130%',
        letterSpacing: '0%',
        paragraphSpacing: 0,
    },
    '.typography-h3': {
        fontWeight: 500,
        fontSize: '28px',
        lineHeight: '130%',
        letterSpacing: '0%',
        paragraphSpacing: 0,
    },
    '.typography-h4': {
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '130%',
        letterSpacing: '0%',
        paragraphSpacing: 0,
    },
    '.typography-h5': {
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '130%',
        letterSpacing: '0%',
        paragraphSpacing: 0,
    },
    '.typography-body-regular': {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '0%',
        paragraphSpacing: 0,
    },
    '.typography-body-medium': {
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '0%',
        paragraphSpacing: 0,
    },
    '.typography-p-regular': {
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0%',
        paragraphSpacing: 0,
    },
    '.typography-p-medium': {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0%',
        paragraphSpacing: 0,
    },
    '.typography-small-regular': {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0%',
        paragraphSpacing: 0,
    },
    '.typography-small-semiBold': {
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0%',
        paragraphSpacing: 0,
    },
};

export const customShadows = {
    shadowMain: '0 30px 15px 0px rgba(39, 16, 78, 0.04)',
    shadowCard: '0 20px 4px 0px rgba(233, 233, 233, 0.8)',
    shadowButton: '0 16px 34px -17px rgba(185, 116, 225, 1)',
};

export const customTheme = {
    extend: {
        height: customHeight,
        colors: customColors,
        screens: customScreens,
        width: customWidth,
        backgroundImage: customGradients,
    },
};

export const customTypographyTheme = function ({ addUtilities }) {
    addUtilities(customTypography);
};
