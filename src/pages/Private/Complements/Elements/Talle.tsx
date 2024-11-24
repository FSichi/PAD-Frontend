import { getColumnWidth, getTableHeaders } from 'utils/helpers/table.helpers';
import { TableWrapper } from '../../../../components/Shared/TableWrapper';
import { TableHeaderData } from 'utils/interfaces/Table.types';
import { useGet } from 'hooks/db/useGet';
import { ComplementService } from 'db/services/app';
import Styles from '../ComplementsPage.styled';
import { Button } from 'components/Button';
// import { CustomIcon } from 'components/Icon/CustomIcon';
// import { EditPenIcon } from 'assets/icons';
import { CustomDrawer } from 'components/CustomDrawer';
import { NewItem } from '../Drawers/NewItem';
import { useEffect } from 'react';
import { useDrawer } from 'hooks/useDrawer';

const tableHeaders: TableHeaderData[] = [
    {
        key: 'idTalle',
        title: 'ID',
        width: 'w-[100px]',
        sort: false,
    },
    {
        key: 'talleArticulo',
        title: 'Descripcion',
        width: 'w-[300px]',
        sort: true,
    },
    {
        key: 'descripcion',
        title: 'TipoTalle',
        width: 'w-[300px]',
        sort: true,
    },
    // {
    //     key: '',
    //     title: 'Accion',
    //     width: 'w-[100px]',
    //     sort: false,
    // },
];

const tableHeadersFormatted = getTableHeaders(tableHeaders, []);

export const Talle = () => {
    const { drawer, OpenDrawer } = useDrawer();

    const { data, refetch } = useGet({
        name: 'Complements - GetTalles',
        endpoint: () => ComplementService.getTalles(),
    });

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
                    text={'Nuevo Talle'}
                    size="large"
                    type="button"
                    variant="primary"
                    onClick={() => OpenDrawer()}
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
                                {data.idTalle}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[1].width)}>
                                {data.talleArticulo}
                            </td>
                            <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[2].width)}>
                                {data.descripcion}
                            </td>
                            {/* <td
                                className={Styles.table.dataCell}
                                style={getColumnWidth(tableHeaders[3].width)}>
                                <Button
                                    variant="transparent"
                                    onClick={() => OpenDrawer()}
                                    customStyles="-ml-2">
                                    <CustomIcon color="black" Icon={EditPenIcon} />
                                </Button>
                            </td> */}
                        </tr>
                    ))
                }
            </TableWrapper>

            <CustomDrawer>
                <NewItem type="talle" itemId={data?.data?.length + 1 || 0} />
            </CustomDrawer>
        </>
    );
};
