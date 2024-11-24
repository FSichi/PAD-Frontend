import { memo, ReactNode } from 'react';
import { Card } from './Card';

export interface Props {
    width?: string | number;
    height?: string | number;
    fullWidth?: boolean;
    children: ReactNode;
    backgroundColor?: string;
    customStyles?: string;
    shadow?: boolean;
    border?: boolean;
    action?: () => void;
}

export const CardContainer = (props: Props) => {
    const {
        backgroundColor = 'bg-cia-white',
        customStyles = '',
        height = 'auto',
        width = 'auto',
        fullWidth = false,
        shadow = true,
        border = true,
        action = () => {},
    } = props;

    const childProps = {
        ...props,
        backgroundColor,
        customStyles,
        height,
        width,
        fullWidth,
        shadow,
        action,
        border,
    };

    return <Card {...childProps} />;
};

export const MemoizedCardContainer = memo(CardContainer);
