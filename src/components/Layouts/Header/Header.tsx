import { Props as ContainerProps } from './Header.container';
import { ITranslate } from 'utils/interfaces/general.types';
import { RoutesListPaths } from 'routes';
import { Link } from 'react-router-dom';
import ImgLogo from 'assets/img/logo.png';
import Styles from './Header.styled';
import ProfileDropdown from './Elements/ProfileDropdown';

interface Props extends ContainerProps {
    t: ITranslate;
}

export const Header = (_props: Props) => {
    return (
        <section className={Styles.headerContainer} style={{ backdropFilter: 'blur(14px)' }}>
            <Link to={RoutesListPaths.ROOT} className="flex items-center gap-3">
                <img src={ImgLogo} alt="LogoIMG Codetria" className={Styles.logoImg} />
                <p className="italic font-bold text-lg">Tiendita</p>
            </Link>
            <ProfileDropdown />
        </section>
    );
};
