import { Props as ContainerProps } from './ComplementsPage.container';
import { ITranslate, Tab } from 'utils/interfaces/general.types';
import Styles from './ComplementsPage.styled';
import { CustomTabs } from 'components/CustomTabs';
import { FC, useMemo } from 'react';
import { Categoria, Color, Marca, Talle, TipoTalle } from './Elements';

interface Props extends ContainerProps {
    t: ITranslate;
    tabs: Tab[];
    tabSelected: number;
    setTabSelected: (value: number) => void;
}

const TabsComponent: { [key: number]: FC } = {
    0: Color,
    1: Marca,
    2: Categoria,
    3: TipoTalle,
    4: Talle,
};

export const ComplementsPage = (props: Props) => {
    const { setTabSelected, tabSelected, tabs } = props;

    const CurrentTab = useMemo(() => TabsComponent[tabSelected], [tabSelected]);

    return (
        <section className={Styles.container}>
            <CustomTabs
                buttonStyle={false}
                tabs={tabs}
                changeValue={setTabSelected}
                valueSelected={tabSelected}
            />

            <CurrentTab />
        </section>
    );
};
