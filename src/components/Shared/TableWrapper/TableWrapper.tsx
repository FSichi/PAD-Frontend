import { Props as ContainerProps } from './TableWrapper.container';
import { ITranslate } from 'utils/interfaces/general.types';
import { CommonTable } from 'components/CommonTable';
import { Button } from 'components/Button';
import { SortDirection } from 'utils/interfaces/Table.types';
import { CustomPagination } from 'components/CustomPagination';
import { FiltersCreator } from 'components/Filters';
import Styles from './TableWrapper.styled';

interface Props<T> extends ContainerProps<T> {
    t: ITranslate;
    handleSort: (columnKey: keyof T) => void;
    sortColumn: keyof T | null;
    sortDirection: SortDirection;
    handleNavigateTo: () => void;
    dataLength: number;
}

export const TableWrapper = <T,>(props: Props<T>) => {
    const {
        tableHeaders,
        handleSort,
        sortColumn,
        sortDirection,
        children,
        tableData,
        dataLength,
        hasFilters,
        hasPagination,
        filterSettings,
        paginationSettings,
        handleNavigateTo,
    } = props;

    return (
        <div className={Styles.container}>
            {hasFilters && filterSettings && (
                <FiltersCreator
                    filters={filterSettings.filters}
                    handleSetFilter={filterSettings.handleSetFilter!}
                    hasItemSearch={filterSettings.hasSearch}
                />
            )}
            <CommonTable
                tableHeaders={tableHeaders}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                handleSort={handleSort}>
                {children(tableData)}
            </CommonTable>

            <div className={Styles.paginationContainer}>
                {hasPagination && paginationSettings ? (
                    <CustomPagination
                        page={paginationSettings.page}
                        setPage={paginationSettings.setPage}
                        dataLength={dataLength}
                    />
                ) : (
                    <Button
                        onClick={handleNavigateTo}
                        type="button"
                        variant="secondary"
                        size="default"
                        text="Ver más"
                    />
                )}
            </div>

            {/* {hasPagination ? (
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
            )} */}
        </div>
    );
};
