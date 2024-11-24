import { useTranslation } from 'react-i18next';
import { DefaultPage } from './DefaultPage';

export interface Props {}

export const DefaultPageContainer = (props: Props) => {
    // const {} = props;
    const { t } = useTranslation();

    const childProps = {
        ...props,
        t,
    };

    return <DefaultPage {...childProps} />;
};
