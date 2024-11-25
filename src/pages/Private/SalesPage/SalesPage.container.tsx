import { useTranslation } from 'react-i18next';
import { SalesPage } from './SalesPage';

export interface Props {}

export const SalesPageContainer = (props: Props) => {
    // const {} = props;
    const { t } = useTranslation();

    const childProps = {
        ...props,
        t,
    };

    return <SalesPage {...childProps} />;
};
