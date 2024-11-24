import { useTranslation } from 'react-i18next';
import { CustomDrawer } from './CustomDrawer';
import { ReactNode } from 'react';
import { useDrawer } from 'hooks/useDrawer';

export interface Props {
    children: ReactNode;
}

export const CustomDrawerContainer = (props: Props) => {
    // const {} = props;
    const { t } = useTranslation();

    const { drawer, CloseDrawer } = useDrawer();

    const childProps = {
        ...props,
        t,
        isOpen: drawer,
        CloseDrawer,
    };

    return <CustomDrawer {...childProps} />;
};
