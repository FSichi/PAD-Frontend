import { getColumnWidth, getTableHeaders } from 'utils/helpers/table.helpers';
import { TableWrapper } from '../../../../components/Shared/TableWrapper';
import { TableHeaderData } from 'utils/interfaces/Table.types';
import { useGet } from 'hooks/db/useGet';
import { ComplementService } from 'db/services/app';
import Styles from '../ComplementsPage.styled';
import { Button } from 'components/Button';
import { CustomIcon } from 'components/Icon/CustomIcon';
import { EditPenIcon } from 'assets/icons';
import { NewItem } from '../Drawers/NewItem';
import { EditItem } from '../Drawers/EditItem';
import { CustomDrawer } from 'components/CustomDrawer';
import { useEffect, useState } from 'react';
import { useDrawer } from 'hooks/useDrawer';
import { CategoriaResponse } from 'db/interfaces/Complements';

const tableHeaders: TableHeaderData[] = [
    {
        key: 'idCategoria',
        title: 'ID',
        width: 'w-[100px]',
        sort: false,
    },
    {
        key: 'descripcion',
        title: 'Descripcion',
        width: 'w-[600px]',
        sort: true,
    },
    {
        key: '',
        title: 'Accion',
        width: 'w-[100px]',
        sort: false,
    },
];

const tableHeadersFormatted = getTableHeaders(tableHeaders, []);

export const Categoria = () => {
    const [drawerType, setDrawerType] = useState<'new' | 'edit'>('new');
    const { drawer, OpenDrawer } = useDrawer();

    const [itemDrawerData, setItemDrawerData] = useState<{
        id: number;
        description: string;
    }>();

    const { data, refetch } = useGet({
        name: 'Complements - GetCategorias',
        endpoint: () => ComplementService.getCategorias(),
    });

    const handleOpenDrawer = (type: 'new' | 'edit', data?: CategoriaResponse) => {
        data && setItemDrawerData({ id: data.idCategoria, description: data.descripcion });
        setDrawerType(type);
        OpenDrawer();
    };

    useEffect(() => {
        if (drawer === false) {
            refetch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawer]);

    return (
        <>
            <div className="-mt-3">
                <Button
                    text={'Nueva Categoria'}
                    size="large"
                    type="button"
                    variant="primary"
                    onClick={() => handleOpenDrawer('new')}
                />
            </div>

            <TableWrapper
                tableHeaders={tableHeadersFormatted}
                tableData={data?.data || []}
                hasPagination
                paginationSettings={{ page: 1, setPage: () => {} }}>
                {sortedData =>
                    sortedData.map((data, index) => (
                        <tr key={index} className={Styles.table.row}>
                            <td
                                className={`${Styles.table.dataCell} font-medium`}
                                style={getColumnWidth(tableHeaders[0].width)}>
                                {data.idCategoria}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[1].width)}>
                                {data.descripcion}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[2].width)}>
                                <Button
                                    variant="transparent"
                                    onClick={() => handleOpenDrawer('edit', data)}
                                    customStyles="-ml-2">
                                    <CustomIcon color="black" Icon={EditPenIcon} />
                                </Button>
                            </td>
                        </tr>
                    ))
                }
            </TableWrapper>

            <CustomDrawer>
                {drawerType === 'new' ? (
                    <NewItem type="categoria" itemId={data?.data?.length + 1 || 0} />
                ) : (
                    <EditItem type="categoria" itemData={itemDrawerData!} />
                )}
            </CustomDrawer>
        </>
    );
};
