import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { CommonTable } from './CommonTable';
import { SortDirection, TableHeaderFormatted } from 'utils/interfaces/Table.types';

export interface Props<T> {
    TableStyles?: (props: { width?: string }) => Record<string, string>;
    tableHeaders: TableHeaderFormatted[];
    children: ReactNode;
    handleSort: (columnKey: keyof T) => void;
    sortColumn: keyof T | null;
    sortDirection: SortDirection;
}

export const CommonTableContainer = <T,>(props: Props<T>) => {
    // const {  } = props;
    const { t } = useTranslation();

    const childProps = {
        ...props,
        t,
    };

    return <CommonTable {...childProps} />;
};
