import { useTranslation } from 'react-i18next';
import { ComplementsPage } from './ComplementsPage';
import { useState } from 'react';
import { Tab } from 'utils/interfaces/general.types';

export interface Props {}

const tabs: Tab[] = [
    {
        label: 'Color',
        value: 0,
        width: 52,
    },
    {
        label: 'Marca',
        value: 1,
        width: 60,
    },
    {
        label: 'Categoria',
        value: 2,
        width: 94,
    },
    {
        label: 'Tipo Talle',
        value: 3,
        width: 90,
    },
    {
        label: 'Talle',
        value: 4,
        width: 43,
    },
];

export const ComplementsPageContainer = (props: Props) => {
    // const {} = props;
    const { t } = useTranslation();

    const [tabSelected, setTabSelected] = useState(0);

    const childProps = {
        ...props,
        t,
        tabs,
        tabSelected,
        setTabSelected,
    };

    return <ComplementsPage {...childProps} />;
};
