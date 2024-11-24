import { FC, SVGProps } from 'react';

interface Props {
    Icon: FC<SVGProps<SVGSVGElement>>;
    size?: number;
    color?: string;
    activeColor?: string;
    isActive?: boolean;
    className?: string;
}

export const CustomIcon = ({
    Icon,
    size = 20,
    color = '#E0DFF5',
    activeColor = '#758FFF',
    isActive = false,
    className = '',
}: Props) => {
    return (
        <Icon
            width={size}
            height={size}
            stroke={isActive ? activeColor : color}
            fill="none"
            className={className}
        />
    );
};
