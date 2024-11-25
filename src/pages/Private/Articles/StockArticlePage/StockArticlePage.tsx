import { Props as ContainerProps } from './StockArticlePage.container';
import { ITranslate } from 'utils/interfaces/general.types';
import Styles from './StockArticlePage.styled';

interface Props extends ContainerProps {
    t: ITranslate;
}

export const StockArticlePage = (props: Props) => {
    const { t } = props;
    return <section className={Styles.container}>StockArticlePage</section>;
};
