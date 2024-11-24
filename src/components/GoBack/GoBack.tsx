import { CustomIcon } from 'components/Icon/CustomIcon';
import { Props as ContainerProps } from './GoBack.container';
import Styles from './GoBack.styled';
import { ITranslate } from 'utils/interfaces/general.types';
import { CommonArrowIcon } from 'assets/icons';
import { Link } from 'react-router-dom';

interface Props extends ContainerProps {
    t: ITranslate;
}

export const GoBack = (props: Props) => {
    const { link } = props;
    return (
        <Link to={link} className={Styles.container}>
            <CustomIcon Icon={CommonArrowIcon} color="#000000" size={26} className={Styles.icon} />
            <p className={Styles.title}>Volver</p>
        </Link>
    );
};
