import { ReactNode } from 'react';
import ImgLogo from 'assets/img/logo.png';
import Styles from './PageLayout.styled';
import { CopyrigthText } from 'utils/constants/appConstants';

interface Props {
    children: ReactNode;
    customClassName?: string;
}

export const PublicPageLayout = ({ children, customClassName }: Props) => {
    return (
        <section className={`${customClassName} ${Styles.public.containerSection}`}>
            <section className={Styles.public.gradientSection}>
                <div className="flex justify-center mt-52">
                    <img src={ImgLogo} alt="LogoIMG Tiendita" className={Styles.public.logoImg} />
                </div>
                <p className={Styles.public.copyrigth}>{CopyrigthText}</p>
            </section>
            <section className={Styles.public.containerPage}>{children}</section>
        </section>
    );
};
