import { memo, ReactNode, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TableWrapper } from './TableWrapper';
import { TableHeaderFormatted } from 'utils/interfaces/Table.types';
import { useTableSort } from 'hooks/useTableSort';
import { useNavigate } from 'react-router-dom';
import { RoutesListPaths } from 'routes';
import { FilterConfig, HandleSetFilterType } from 'utils/interfaces/filters.types';
import { PaginationContext } from 'context/pagination.context';

export interface Props<T> {
    tableHeaders: TableHeaderFormatted[];
    tableData: T[];
    isLoadingData?: boolean;
    children: (sortedData: T[]) => ReactNode;
    hasPagination?: boolean;
    hasFilters?: boolean;
    redirectTo?: RoutesListPaths;
    filterSettings?: {
        hasSearch?: boolean;
        filters: FilterConfig[];
        handleSetFilter: HandleSetFilterType;
    };
    paginationSettings?: {
        page: number;
        setPage: (page: number) => void;
    };
}

export const TableWrapperContainer = <T,>(props: Props<T>) => {
    const {
        tableData,
        children,
        isLoadingData = false,
        hasPagination = false,
        hasFilters = false,
        redirectTo = '',
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { dataLength } = useContext(PaginationContext);

    const [page, setPage] = useState(0);

    const { sortedData, handleSort, sortColumn, sortDirection } = useTableSort({
        data: isLoadingData ? [] : tableData,
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
        hasFilters,
        page,
        setPage,
        handleNavigateTo,
        dataLength,
    };

    return <TableWrapper {...childProps}>{(sortedData: T[]) => children(sortedData)}</TableWrapper>;
};

export const MemoizedTableWrapperContainer = memo(TableWrapperContainer);
