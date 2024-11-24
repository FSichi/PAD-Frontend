import { useState, useMemo } from 'react';
import { SortDirection } from 'utils/interfaces/Table.types';

interface TableSortConfig<T> {
    data: T[];
    initialSortColumn?: keyof T;
    initialSortDirection?: SortDirection;
}

export function useTableSort<T>({
    data,
    initialSortColumn,
    initialSortDirection = 'asc',
}: TableSortConfig<T>) {
    const [sortColumn, setSortColumn] = useState<keyof T | null>(initialSortColumn || null);
    const [sortDirection, setSortDirection] = useState<SortDirection>(initialSortDirection);

    const compareValues = (a: any, b: any) => {
        if (a === b) return 0;

        if (a === null || a === undefined) return sortDirection === 'asc' ? -1 : 1;
        if (b === null || b === undefined) return sortDirection === 'asc' ? 1 : -1;

        // Comparar fechas si ambos son instancias de Date
        if (a instanceof Date && b instanceof Date) {
            return a.getTime() - b.getTime();
        }

        // Comparar cadenas de texto de forma local
        if (typeof a === 'string' && typeof b === 'string') {
            return a.localeCompare(b);
        }

        // Comparar números y otros tipos
        return a < b ? -1 : 1;
    };

    const handleSort = (columnKey: keyof T) => {
        if (sortColumn === columnKey) {
            setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortColumn(columnKey);
            setSortDirection('asc');
        }
    };

    const sortedData = useMemo(() => {
        if (!sortColumn) return data;

        return [...data].sort((a, b) => {
            const valueA = a[sortColumn];
            const valueB = b[sortColumn];
            const comparisonResult = compareValues(valueA, valueB);

            return sortDirection === 'asc' ? comparisonResult : -comparisonResult;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, sortColumn, sortDirection]);

    return { sortedData, handleSort, sortColumn, sortDirection };
}
