import { memo, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TableWrapper } from './TableWrapper';
import { TableHeaderFormatted } from 'utils/interfaces/Table.types';
import { useTableSort } from 'hooks/useTableSort';
import { useNavigate } from 'react-router-dom';
import { RoutesListPaths } from 'routes';

export interface Props<T> {
    tableHeaders: TableHeaderFormatted[];
    tableData: T[];
    children: (sortedData: T[]) => ReactNode;
    hasPagination?: boolean;
    redirectTo?: RoutesListPaths;
}

export const TableWrapperContainer = <T,>(props: Props<T>) => {
    const { tableData, children, hasPagination = false, redirectTo = '' } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [page, setPage] = useState(0);

    const { sortedData, handleSort, sortColumn, sortDirection } = useTableSort({
        data: tableData,
    });

    const handleNavigateTo = () => navigate(redirectTo);

    const childProps = {
        ...props,
        t,
        tableData: sortedData,
        handleSort,
        sortColumn,
        sortDirection,
        hasPagination,
        page,
        setPage,
        handleNavigateTo,
    };

    return <TableWrapper {...childProps}>{(sortedData: T[]) => children(sortedData)}</TableWrapper>;
};

export const MemoizedTableWrapperContainer = memo(TableWrapperContainer);
