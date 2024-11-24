import { memo } from 'react';
import { DrawerHeader } from './DrawerHeader';
import { useDrawer } from 'hooks/useDrawer';

export interface Props {
    title: string;
}

export const DrawerHeaderContainer = (props: Props) => {
    // const {} = props;

    const { CloseDrawer } = useDrawer();

    const childProps = {
        ...props,
        CloseDrawer,
    };

    return <DrawerHeader {...childProps} />;
};

export const MemoizedDrawerHeaderContainer = memo(DrawerHeaderContainer);
