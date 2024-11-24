import { Props as ContainerProps } from './DefaultPage.container';
import { ITranslate } from 'utils/interfaces/general.types';
import Styles from './DefaultPage.styled';

interface Props extends ContainerProps {
    t: ITranslate;
}

export const DefaultPage = (_props: Props) => {
    // const { t } = props;
    return <section className={Styles.container}>DefaultPage</section>;
};
