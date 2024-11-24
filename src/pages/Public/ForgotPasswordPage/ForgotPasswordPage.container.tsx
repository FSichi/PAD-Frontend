import { useTranslation } from 'react-i18next';
import { ForgotPasswordPage } from './ForgotPasswordPage';
import { TranslationsKeys } from 'utils/i18n';

export interface Props {}

export const ForgotPasswordPageContainer = (props: Props) => {
    // const {} = props;
    const { t } = useTranslation(TranslationsKeys.AUTH);

    const childProps = {
        ...props,
        t,
    };

    return <ForgotPasswordPage {...childProps} />;
};
