import { customShadows, customTheme, customTypographyTheme } from './tailwind.theme';
const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/components/pagination.js',
        './node_modules/@nextui-org/theme/dist/components/popover.js',
    ],
    theme: {
        extend: {
            ...customTheme.extend,
            screens: {
                ...customTheme.extend.screens,
            },
        },
        borderColor: theme => ({
            ...theme('colors'),
            gradient: 'linear-gradient(90deg, #F0CA63 0%, #F69F9A 50%, #C7AFF9 100%)',
        }),
        boxShadow: customShadows,
    },
    plugins: [customTypographyTheme, nextui()],
};
