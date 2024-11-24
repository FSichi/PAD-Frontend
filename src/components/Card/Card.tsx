import { Props as ContainerProps } from './Card.container';
import Styles from './Card.styled';
import './styles.css';

interface Props extends ContainerProps {}

export const Card = (props: Props) => {
    const {
        children,
        height,
        backgroundColor,
        customStyles,
        width,
        fullWidth,
        shadow,
        action,
        border,
    } = props;
    const stylesFormatted = `${backgroundColor} ${Styles.common} ${customStyles} ${border && 'card-border'} ${shadow && Styles.shadow}`;

    return (
        <div
            className={stylesFormatted}
            style={{ height, width: fullWidth ? '100%' : width }}
            onClick={action}>
            {children}
        </div>
    );
};
