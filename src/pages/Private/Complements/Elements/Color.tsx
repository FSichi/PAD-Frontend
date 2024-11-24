import { getColumnWidth, getTableHeaders } from 'utils/helpers/table.helpers';
import { TableWrapper } from '../../../../components/Shared/TableWrapper';
import { TableHeaderData } from 'utils/interfaces/Table.types';
import { useGet } from 'hooks/db/useGet';
import { ComplementService } from 'db/services/app';
import Styles from '../ComplementsPage.styled';
import { Button } from 'components/Button';
import { CustomIcon } from 'components/Icon/CustomIcon';
import { EditPenIcon } from 'assets/icons';
import { useDrawer } from 'hooks/useDrawer';
import { CustomDrawer } from 'components/CustomDrawer';
import { NewItem } from '../Drawers/NewItem';
import { useEffect, useState } from 'react';
import { EditItem } from '../Drawers/EditItem';

const tableHeaders: TableHeaderData[] = [
    {
        key: 'idColor',
        title: 'ID',
        width: 'w-[100px]',
        sort: false,
    },
    {
        key: 'nombre',
        title: 'Color',
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

export const Color = () => {
    const [drawerType, setDrawerType] = useState<'new' | 'edit'>('new');
    const { drawer, OpenDrawer } = useDrawer();

    const { data, refetch } = useGet({
        name: 'Complements - GetColors',
        endpoint: () => ComplementService.getColors(),
    });

    const handleOpenDrawer = (type: 'new' | 'edit') => {
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
                    text={'Nuevo Color'}
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
                                {data.idColor}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[1].width)}>
                                {data.nombre}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[2].width)}>
                                <Button
                                    variant="transparent"
                                    onClick={() => handleOpenDrawer('edit')}
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
                    <NewItem type="color" itemId={data?.data?.length + 1 || 0} />
                ) : (
                    <EditItem />
                )}
            </CustomDrawer>
        </>
    );
};
