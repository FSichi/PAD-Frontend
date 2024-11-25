import { useTranslation } from 'react-i18next';
import { BaseArticlePage } from './BaseArticlePage';

export interface Props {}

export const BaseArticlePageContainer = (props: Props) => {
    // const {} = props;
    const { t } = useTranslation();

    const childProps = {
        ...props,
        t,
    };

    return <BaseArticlePage {...childProps} />;
};
