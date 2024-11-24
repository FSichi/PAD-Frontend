import { CustomIcon } from 'components/Icon/CustomIcon';
import { FunctionComponent, SVGProps } from 'react';

interface Props {
    icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    title: string;
    customClassName?: string;
    customIconClassName?: string;
    customTitleClassName?: string;
}

export const PageTitle = ({
    title,
    customClassName,
    customIconClassName,
    customTitleClassName,
    icon,
}: Props) => {
    return (
        <div className={`flex items-center gap-2 ${customClassName} w-full`}>
            <div className="bg-[#F1E3FF] rounded-full">
                <CustomIcon
                    Icon={icon}
                    size={40}
                    color="#7169FF"
                    className={`p-1.5 ${customIconClassName}`}
                />
            </div>
            <h1 className={`text-cia-dark typography-h4 ml-3 ${customTitleClassName}`}>{title}</h1>
        </div>
    );
};
