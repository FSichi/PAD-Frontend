import { Link } from 'react-router-dom';
import { Props as ContainerProps } from './LinkRedirect.container';
import { ITranslate } from 'utils/interfaces/general.types';
import { CustomIcon } from 'components/Icon/CustomIcon';
import { FC, SVGProps } from 'react';

interface Props extends ContainerProps {
    t: ITranslate;
    icon: FC<SVGProps<SVGSVGElement>>;
    text: string;
}

export const LinkRedirect = (props: Props) => {
    const { route, icon, text } = props;
    return (
        <Link to={route} className="hover:text-cia-purpleBlue-main group">
            <div className="flex items-center gap-2">
                <p className="text-sm">{text}</p>
                <CustomIcon
                    Icon={icon}
                    color="#000000"
                    size={14}
                    className="group-hover:stroke-cia-purpleBlue-main"
                />
            </div>
        </Link>
    );
};
