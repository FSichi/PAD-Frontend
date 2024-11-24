import { Props as ContainerProps } from './ForgotPasswordPage.container';
import { ITranslate } from 'utils/interfaces/general.types';
import { Button } from 'components/Button';
import { RoutesListPaths } from 'routes';
import { Link } from 'react-router-dom';
import Styles from './ForgotPasswordPage.styled';

interface Props extends ContainerProps {
    t: ITranslate;
}

export const ForgotPasswordPage = (props: Props) => {
    const { t } = props;
    return (
        <section className={Styles.container}>
            <h1 className={Styles.title}>{t('forgot_pass_title')}</h1>
            <div className="text-cia-white">
                <p>{t('login_input_email')}</p>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('forgot_pass_email_placeholder')}
                    className={Styles.input}
                />
            </div>
            <Link to={RoutesListPaths.LOGIN} className={Styles.link}>
                {t('forgot_pass_back')}
            </Link>
            <Button
                type="button"
                variant="primary"
                text={t('forgot_pass_submit')}
                customStyles="!rounded-lg"
            />
        </section>
    );
};
