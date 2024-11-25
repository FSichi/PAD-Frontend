import { Props as ContainerProps } from './BaseArticlePage.container';
import { ITranslate } from 'utils/interfaces/general.types';
import Styles from './BaseArticlePage.styled';

interface Props extends ContainerProps {
    t: ITranslate;
}

export const BaseArticlePage = (props: Props) => {
    const { t } = props;
    return <section className={Styles.container}>BaseArticlePage</section>;
};
