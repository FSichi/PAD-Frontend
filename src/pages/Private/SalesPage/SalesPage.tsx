import { Props as ContainerProps } from './SalesPage.container';
import { ITranslate } from 'utils/interfaces/general.types';
import Styles from './SalesPage.styled';

interface Props extends ContainerProps {
    t: ITranslate;
}

export const SalesPage = (props: Props) => {
    const { t } = props;
    return <section className={Styles.container}>SalesPage</section>;
};
