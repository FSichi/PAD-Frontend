import { Button } from 'components/Button';
import { Props as ContainerProps } from './DrawerHeader.container';
import Styles from './DrawerHeader.styled';
import { CloseDrawerIcon } from 'assets/icons';
import { CustomIcon } from 'components/Icon/CustomIcon';

interface Props extends ContainerProps {
    CloseDrawer: () => void;
}

export const DrawerHeader = (props: Props) => {
    const { CloseDrawer, title } = props;
    return (
        <div className={Styles.drawerHeader}>
            <h2 className={Styles.drawerHeaderTitle}>{title}</h2>
            <Button onClick={CloseDrawer} variant="transparent">
                <CustomIcon Icon={CloseDrawerIcon} color="#282E32" />
            </Button>
        </div>
    );
};
