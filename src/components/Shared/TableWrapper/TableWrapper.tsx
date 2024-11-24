import { ReactNode } from 'react';
import { Props as ContainerProps } from './TableWrapper.container';
import { ITranslate } from 'utils/interfaces/general.types';
import { CommonTable } from 'components/CommonTable';
import { Button } from 'components/Button';
import { CustomIcon } from 'components/Icon/CustomIcon';
import { SearchIcon } from 'assets/icons';
import { SortDirection, TableHeaderFormatted } from 'utils/interfaces/Table.types';
import { CustomPagination } from 'components/CustomPagination';
// import Styles from './TableWrapper.styled';

interface Props<T> extends ContainerProps<T> {
    t: ITranslate;
    children: (sortedData: T[]) => ReactNode;
    tableHeaders: TableHeaderFormatted[];
    tableData: T[];
    handleSort: (columnKey: keyof T) => void;
    sortColumn: keyof T | null;
    sortDirection: SortDirection;
    page: number;
    setPage: (value: number) => void;
    handleNavigateTo: () => void;
}

export const TableWrapper = <T,>(props: Props<T>) => {
    const {
        tableHeaders,
        handleSort,
        sortColumn,
        sortDirection,
        children,
        tableData,
        hasPagination,
        page,
        setPage,
        handleNavigateTo,
    } = props;

    return (
        <div className="bg-cia-white rounded-[10px] p-6 grid gap-4">
            <div className="flex justify-between items-center">
                <div className="w-80 h-10 py-3 px-4 border border-[#E2E8F0] rounded-lg bg-cia-white flex items-center">
                    <CustomIcon Icon={SearchIcon} size={20} color="#64748B" className="mr-3" />
                    <input
                        type="text"
                        className="bg-cia-white focus:outline-none text-cia-grey-main text-sm cursor-pointer"
                        placeholder="Buscar..."
                    />
                </div>
            </div>
            <CommonTable
                tableHeaders={tableHeaders}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                handleSort={handleSort}>
                {children(tableData)}
            </CommonTable>

            {hasPagination ? (
                <div className="flex justify-center items-center my-4">
                    <CustomPagination page={page} setPage={setPage} dataLength={tableData.length} />
                </div>
            ) : (
                <div className="mt-5 flex justify-center">
                    <Button
                        onClick={handleNavigateTo}
                        type="button"
                        variant="secondary"
                        size="default"
                        text="Ver más"
                    />
                </div>
            )}
        </div>
    );
};
