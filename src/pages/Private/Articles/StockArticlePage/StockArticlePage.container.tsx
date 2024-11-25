import { useTranslation } from 'react-i18next';
import { StockArticlePage } from './StockArticlePage';

export interface Props {}

export const StockArticlePageContainer = (props: Props) => {
    // const {} = props;
    const { t } = useTranslation();

    const childProps = {
        ...props,
        t,
    };

    return <StockArticlePage {...childProps} />;
};
